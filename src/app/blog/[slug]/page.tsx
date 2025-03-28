import Head from 'next/head'
export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())
  const posts = [
    {
      slug: 'a',
      title: 'hola'
    }
  ]

  return posts.map((post: any) => ({
    slug: post.slug,
    title: post.title
  }))
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string, title: string }>
}) {
  const { slug, title } = await params
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="mt-16">My Post: {slug}</h1>
    </>)
}
