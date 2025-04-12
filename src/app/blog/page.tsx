import PostItem from '@/components/blog/PostItem'
import type { Metadata } from 'next'
import { fetchApi } from '@/utils/fetchApi'
import { PostPreview } from '@/types'


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
  const { posts }: { posts: PostPreview[] } = await res

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostItem post={post}></PostItem>
        ))}
      </div>
    </main>
  )
}
