import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Library's Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{
                maxWidth: '200px',
                padding: '0 5px',
                height: '255px'
              }}>
                <Link to={`/post/${node.frontmatter.slug}`}>
                  <GatsbyImage
                    image={getImage(node.frontmatter.hero_image)}
                    alt={node.frontmatter.hero_image_alt}
                    imgStyle={{objectFit: 'contain'}}
                    style={{height: '255px'}}
                  />
                </Link>
              </div>
              <div>
                <h2 style={{
                  marginBottom: '0',
                }}>
                  <Link to={`/post/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <sub>Posted: {node.frontmatter.date}</sub>
                <p>{node.excerpt.replace('Description: ', '')}</p>
              </div>
            </div>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          slug
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Posts" />

export default IndexPage