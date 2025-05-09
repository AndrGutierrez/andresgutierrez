import PostContent from '@/components/blog/PostContent'
import { notFound } from 'next/navigation'
import { fetchApi } from '@/utils/fetchApi'
import { PostPreviewType, PostType } from "@/types";
import type { Metadata } from 'next'


export async function generateStaticParams() {
  const res = await fetchApi(`post`)
  const list = await res
  const { posts }: { posts: PostPreviewType[] } = list

  return posts.map((post) => ({
    slug: post.slug,
  }))
}


async function getPostData(slug: string): Promise<{ post: PostType }> {
  const list = await fetchApi(`/post`)
  const { posts }: { posts: PostPreviewType[] } = list

  const postPreview = posts.find((post) => post.slug === slug)
  if (!postPreview) return notFound()

  const res = await fetchApi(`post/${postPreview.id}`)
  return res
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const { post } = await getPostData(params.slug)
    const { title, description, thumbnailUrl, createdAt } = post
    const thumbnail = `${process.env.NEXT_PUBLIC_CDN_URL}/posts/${params.slug}/${thumbnailUrl}`

    return {
      title: `${title} | Andrés Gutiérrez`,
      description,
      openGraph: {
        title,
        description,
        url: `https://andresgutierrez.me/blog/${params.slug}`,
        type: 'article',
        publishedTime: new Date(createdAt).toISOString(),
        images: thumbnail ? [{
          url: thumbnail,
          width: 1000,
          height: 630,
          alt: title,
        }] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: thumbnail ? [thumbnail] : undefined,
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

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
        {thumbnailUrl && (
          <img src={thumbnail}
            alt={title}
            className="w-full h-auto mb-6 rounded-lg object-cover xs:h-[150px] md:h-[300px] "
            loading="lazy"
            width={800}
            height={100}
            style={{
            }}
          />
        )}

        <h1 className="text-4xl font-bold mb-2">{title}</h1>

        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
          <time dateTime={new Date(createdAt).toISOString()}>{postDate}</time>
          <span className="mx-2">•</span>
          <span>{readTime} min read</span>
        </div>
        <PostContent post={post} />
      </article>
    </main >
  )
}
