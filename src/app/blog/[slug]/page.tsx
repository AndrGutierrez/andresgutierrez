import ExportedImage from "next-image-export-optimizer";
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchApi } from '@/utils/fetchApi'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from "@/mdx-components";
import rehypePrettyCode from "rehype-pretty-code";
/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "github-dark"
}


interface Post {
  id: string
  createdAt: number
  title: string
  content: string
  slug: string
  thumbnailUrl: string
  description: string
}

interface PostPreview {
  id: string
  slug: string
  title: string
  description: string
  createdAt: number
  thumbnailUrl: string
}

export async function generateStaticParams() {
  const res = await fetchApi(`post`)
  const list = await res
  const { posts }: { posts: PostPreview[] } = list

  return posts.map((post) => ({
    slug: post.slug,
  }))
}


async function getPostData(slug: string): Promise<{ post: Post }> {
  const list = await fetchApi(`/post`)
  const { posts }: { posts: PostPreview[] } = list

  const postPreview = posts.find((post) => post.slug === slug)
  if (!postPreview) return notFound()

  const res = await fetchApi(`post/${postPreview.id}`)
  return res
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const { post } = await getPostData(params.slug)
    const { title, description, thumbnailUrl, createdAt } = post

    return {
      title: `${title} | Andrés Gutiérrez`,
      description,
      openGraph: {
        title,
        description,
        url: `https://andresgutierrez.me/blog/${params.slug}`,
        type: 'article',
        publishedTime: new Date(createdAt).toISOString(),
        images: thumbnailUrl ? [{
          url: thumbnailUrl,
          width: 1200,
          height: 630,
          alt: title,
        }] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: thumbnailUrl ? [thumbnailUrl] : undefined,
      },
      alternates: {
        canonical: `https://andresgutierrez.me/blog/${params.slug}`,
      },
    }
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'The post you are looking for does not exist',
    }
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { post } = await getPostData(params.slug)

  const { title, thumbnailUrl, createdAt, content: base64Content, slug } = post

  const postDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const content = atob(base64Content)
  const wordCount = content.split(/\s+/).length
  const readTime = Math.ceil(wordCount / 200)
  const thumbnail = `${process.env.NEXT_PUBLIC_CDN_URL}/posts/${slug}/${thumbnailUrl}`
  const components = useMDXComponents({})

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
        {thumbnailUrl && (
          <ExportedImage
            src={thumbnail}
            alt={title}
            className="w-full h-auto mb-6 rounded-lg"
            loading="lazy"
            width={800}
            height={100}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        )}

        <h1 className="text-4xl font-bold mb-2">{title}</h1>

        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-8">
          <time dateTime={new Date(createdAt).toISOString()}>{postDate}</time>
          <span className="mx-2">•</span>
          <span>{readTime} min read</span>
        </div>
        <MDXRemote source={content} components={components}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypePrettyCode, options]],
            },
          }}
        >
        </MDXRemote>
      </article>
    </main >
  )
}
