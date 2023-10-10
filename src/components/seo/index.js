import * as React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Seo = ({ title, description, pathname, heroImage, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl
  } = useSiteMetadata()

  const seo = {
    title: `${title} | ${defaultTitle}`,
    description: description || defaultDescription,
    image: heroImage ? `${siteUrl}${heroImage}` : `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>

      <meta name="title" content={title === 'Posts' ? defaultTitle : title} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={title === 'Posts' ? defaultTitle : title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {children}
    </>
  )
}

export default Seo