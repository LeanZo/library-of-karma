import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const CatalogPage = ({ data }) => {
  return (
    <Layout pageTitle="Entire Catalog">
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
      }}>
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                maxWidth: '166px'
              }}>
                <div style={{
                  maxWidth: '166px',
                  padding: '0 10px',
                  height: '210px'
                }}>
                  <Link to={`/post/${node.frontmatter.slug}`}>
                    <GatsbyImage
                      image={getImage(node.frontmatter.hero_image)}
                      alt={node.frontmatter.hero_image_alt}
                      imgStyle={{objectFit: 'contain'}}
                      style={{height: '210px'}}
                    />
                  </Link>
                </div>
                <div>
                  <h2 style={{
                    marginTop: '10px',
                    marginBottom: '15px',
                    textAlign: 'center'
                  }}>
                    <Link to={`/post/${node.frontmatter.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                  </h2>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {title: ASC}}) {
      nodes {
        id
        frontmatter {
          title
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

export const Head = () => <Seo title="Entire Catalog" />

export default CatalogPage