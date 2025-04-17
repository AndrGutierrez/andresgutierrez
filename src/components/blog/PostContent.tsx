import rehypePrettyCode from "rehype-pretty-code";
import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from "@/mdx-components";
import { PostType } from "@/types";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "github-dark"
}
export default function PostContent({ post }: { post: PostType }) {
  const components = useMDXComponents({})
  const { content: base64Content } = post

  const content = atob(base64Content)
  return (

    <MDXRemote source={content} components={components}
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, options]],
        },
      }}
    >
    </MDXRemote>
  )
}
