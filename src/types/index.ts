
export interface PostType {
  id: string
  createdAt: number
  title: string
  content: string
  slug: string
  thumbnailUrl: string
  description: string
}

export interface PostPreviewType {
  id: string
  slug: string
  title: string
  description: string
  excerpt: string
  createdAt: number
  thumbnailUrl: string
}
