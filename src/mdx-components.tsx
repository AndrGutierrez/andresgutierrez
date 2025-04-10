import type { MDXComponents } from 'mdx/types'
import ExportedImage from 'next-image-export-optimizer'
import Image, { ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h2: ({ children }) => (
      <h2 className='text-xl'>{children}</h2>
    ),
    // FIXME there seems to be an error with image optimizer when get
    img: (props) => (
      <ExportedImage
        src={props.src || ''}
        alt={props.alt || ''}
        width={'1000'}
        height={'500'}
      />
    ),
    ...components,
  }
}
