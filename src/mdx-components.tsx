import type { MDXComponents } from 'mdx/types'
import CopyButton from '@/components/blog/CopyButton'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const reactToText = (children: React.ReactNode): string => {
    if (typeof children === 'string') return children;
    if (Array.isArray(children)) return children.map(reactToText).join('');
    if (children && typeof children === 'object' && 'props' in children) {
      return reactToText(children.props.children);
    }
    return '';
  };
  return {
    h2: ({ children }) => (
      <h2 className='text-3xl mb-4'>{children}</h2>
    ),
    ol: ({ children }) => (
      <ol className='list-decimal ml-5 mb-5'>{children}</ol>
    ),
    ul: ({ children }) => (
      <ul className='list-disc ml-5 mb-5'>{children}</ul>
    ),
    h3: ({ children }) => (
      <h3 className='text-2xl mb-3'>{children}</h3>
    ),
    a: (props) => (
      <a className='text-underline text-cyan-600' href={props.href}>{props.children}</a>
    ),
    img: (props) => (
      <img
        src={props.src || ''}
        alt={props.alt || ''}
        width={'1000'}
        height={'500'}
        loading="lazy"
      />
    ),
    pre: (props: JSX.IntrinsicElements["pre"] & { "data-language"?: string }) => (
      <pre className='mb-6'>
        <figcaption className="flex items-center justify-between rounded-t-lg border-x border-t border-zinc-200 bg-zinc-100 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-sm text-zinc-700 dark:text-zinc-300">
            {props["data-language"]}
          </span>
          <CopyButton text={reactToText(props.children)} />
        </figcaption>
        <pre
          className="relative rounded-b-lg rounded-t-none border border-zinc-200 bg-zinc-100 px-0 py-4 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-[#abb2bf] px-2 overflow-auto"
          {...props}
        />
      </pre>
    ),
    p: ({ children }) => (
      <p className='pb-4 text-lg'>{children}</p>
    ),
    ...components,
  }
}
