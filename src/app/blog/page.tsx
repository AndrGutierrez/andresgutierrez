import type { Metadata } from 'next'
import { fetchApi } from '@/utils/fetchApi'
import { PostPreviewType } from '@/types'
import BlogHero from '@/components/blog/BlogHero'
import BlogContent from '@/components/blog/BlogContent'
import BackgroundRays from '@/components/ui/BackgroundRays'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog | Andrés Gutiérrez',
    description: 'Explore articles and tutorials about Software Engineering, web development, serverless cloud architecture, AI and my personal experiences.',
    openGraph: {
      title: 'Blog | Andrés Gutiérrez',
      description: 'Explore articles and tutorials about Software Engineering, web development, serverless cloud architecture, AI and my personal experiences.',
      url: 'https://andresgutierrez.me/blog',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog | Andrés Gutiérrez',
      description: 'Explore articles and tutorials about Software Engineering, web development, serverless cloud architecture, AI and more.',
    },
    alternates: {
      canonical: 'https://andresgutierrez.me/blog',
    },
  }
}

export default async function BlogPage() {
  const res = await fetchApi(`post`)
  const { posts }: { posts: PostPreviewType[] } = await res

  return (
    <main className="bg-bg-main min-h-screen text-white relative overflow-hidden">
      {/* 1. Background Glows and Rays */}
      <BackgroundRays opacity={0.1} />
      
      {/* Premium Hero Section */}
      <BlogHero />

      {/* Main Content (Filters + Grid + Sidebar) */}
      <BlogContent initialPosts={posts} />
    </main>
  )
}
