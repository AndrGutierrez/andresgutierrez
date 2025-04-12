import type { Metadata } from 'next'
import { fetchApi } from '@/utils/fetchApi'
import Link from 'next/link'

interface PostPreview {
  id: string
  slug: string
  title: string
  description: string
  excerpt: string
  createdAt: number
  thumbnailUrl: string
}

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
  console.log("###", posts[0])

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
          >
            <div className="relative aspect-video overflow-hidden">
              {post.thumbnailUrl && (
                <img
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/posts/${post.slug}/${post.thumbnailUrl}`}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              )}
            </div>

            <div className="p-5">
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={new Date(post.createdAt).toISOString()}>
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
