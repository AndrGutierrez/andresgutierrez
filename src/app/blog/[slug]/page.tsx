import PostContent from '@/components/blog/PostContent'
import PostItem from '@/components/blog/PostItem'
import Tag from '@/components/ui/Tag'
import { notFound } from 'next/navigation'
import { fetchApi } from '@/utils/fetchApi'
import { PostPreviewType, PostType } from "@/types";
import { Clock, Calendar, Eye, Layout } from 'lucide-react'
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


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params
    const { post } = await getPostData(slug)
    const { title, description, thumbnailUrl } = post
    const thumbnail = `${process.env.NEXT_PUBLIC_CDN_URL}/posts/${slug}/${thumbnailUrl}`

    return {
      title: `${title} | Andrés Gutiérrez`,
      description,
      openGraph: {
        title,
        description,
        url: `https://andresgutierrez.me/blog/${slug}`,
        type: 'article',
        publishedTime: new Date(post.createdAt).toISOString(),
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
        canonical: `https://andresgutierrez.me/blog/${slug}`,
      },
    }
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'The post you are looking for does not exist',
    }
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: postSlug } = await params
  const { post } = await getPostData(postSlug)
  
  // Fetch more posts for the bottom section
  const list = await fetchApi(`post`)
  const { posts }: { posts: PostPreviewType[] } = list
  const morePosts = posts
    .filter(p => p.slug !== postSlug)
    .slice(0, 2)

  const { title, thumbnailUrl, createdAt, content: base64Content, slug, tags } = post

  const postDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const content = atob(base64Content)
  const wordCount = content.split(/\s+/).length
  const readTime = Math.ceil(wordCount / 200)
  const thumbnail = `${process.env.NEXT_PUBLIC_CDN_URL}/posts/${slug}/${thumbnailUrl}`

  return (
    <div className="min-h-screen bg-bg-main text-white font-space-grotesk relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] aspect-square bg-brand/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[35%] aspect-square bg-brand/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[40%] aspect-square bg-brand/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[45%] aspect-square bg-brand/15 blur-[140px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="max-w-[1240px] mx-auto space-y-8">
          {/* Category/Tag Label - Example "Blog" or first tag */}
          <div className="flex items-center gap-2 text-brand font-medium">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
            <span className="uppercase tracking-widest text-xs">{tags?.[0] || 'BLOG'}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-archivo font-medium leading-[1.1] tracking-tight text-balance">
            {title}
          </h1>

          {/* Banner Image */}
          {thumbnailUrl && (
            <div className="relative w-full aspect-[21/9] md:h-[400px] overflow-hidden rounded-2xl border border-white/10 group">
              <img 
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-32 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_287px] gap-12 xl:gap-24">
          
          {/* Main Article Content */}
          <article className="min-w-0">
            <div className="prose prose-lg prose-invert max-w-none 
              prose-headings:font-archivo prose-headings:font-medium
              prose-p:text-white/60 prose-p:leading-relaxed 
              prose-strong:text-white prose-strong:font-semibold
              prose-code:text-brand prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-bg-section prose-pre:border prose-pre:border-white/5
              prose-blockquote:border-l-brand prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
              prose-a:text-brand hover:prose-a:text-white transition-colors prose-a:font-medium
              ">
              <PostContent post={post} />
            </div>

            {/* Tags area below content */}
            {tags && tags.length > 0 && (
              <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-3">
                {tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/40 hover:text-brand hover:border-brand/40 transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-24 h-fit">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm py-3 border-b border-white/5">
                  <span className="text-white/40 flex items-center gap-2 lowercase">
                    <span className="w-4 h-4 text-brand">📅</span> Published
                  </span>
                  <span className="text-white/90 font-medium">{postDate}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm py-3 border-b border-white/5">
                  <span className="text-white/40 flex items-center gap-2 lowercase">
                    <span className="w-4 h-4 text-brand">⏱️</span> Read time
                  </span>
                  <span className="text-white/90 font-medium">{readTime} min</span>
                </div>

                <div className="flex items-center justify-between text-sm py-3 border-b border-white/5">
                  <span className="text-white/40 flex items-center gap-2 lowercase">
                    <span className="w-4 h-4 text-brand">👁️</span> Views
                  </span>
                  <span className="text-white/90 font-medium">1.2k</span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2 text-white/40">
                    <Layout className="w-4 h-4" />
                    <span className="text-sm">Topic</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {tags?.length ? tags.map(tag => (
                      <Tag key={tag} variant="solid">
                        {tag}
                      </Tag>
                    )) : (
                      <Tag variant="solid">DevOps</Tag>
                    )}
                  </div>
                </div>
              </div>

              {/* Newsletter or Contact Mini-CTA */}
              <div className="pt-6 border-t border-white/5">
                <h4 className="font-archivo text-lg mb-4">Have a project in mind?</h4>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  Let's talk about your awesome project and make something cool!
                </p>
                <a href="#contact" className="group flex items-center justify-between w-full px-6 py-3 bg-brand text-bg-main font-bold rounded-full hover:bg-white transition-all">
                  <span>Let's Talk</span>
                  <span className="w-6 h-6 rounded-full bg-bg-main/20 flex items-center justify-center group-hover:bg-bg-main group-hover:text-white transition-colors">
                    →
                  </span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer / More Posts Divider */}
      <div className="max-w-[1240px] mx-auto border-t border-white/10" />
      
      {/* "More Posts" Section */}
      <section className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full border border-brand/20 flex items-center justify-center text-brand text-xl">
              <span className="transform -rotate-45">→</span>
            </div>
            <h2 className="text-2xl font-archivo font-medium text-brand">More posts</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {morePosts.map(p => (
               <PostItem key={p.id} post={p} />
             ))}
          </div>
        </div>
      </section>
    </div>
  )
}
