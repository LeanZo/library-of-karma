import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Post = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  console.log(data);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p style={{
        margin: '-1.2rem 0 1rem 2px',
        fontSize: '13px'
      }}>
        Posted: {data.mdx.frontmatter.date}
      </p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      excerpt
      frontmatter {
        title
        slug
        date(formatString: "DD/MM/YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo
  title={data.mdx.frontmatter.title}
  pathname={`/post/${data.mdx.frontmatter.slug}`}
  description={data.mdx.excerpt.replace('Description: ', '')}
  heroImage={data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData.images.fallback.src}
/>

export default Post