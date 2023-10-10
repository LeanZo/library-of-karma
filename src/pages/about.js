import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="What is Library of Karma?">
      <StaticImage
        alt="A cute witch using a 90's computer"
        src="../images/cute-witch-no-bg-small.png"
      />
      <p>Hi, I am Karma, the witch, and this is my digital library!</p>
      <p>Some time ago, I got into J-Horror movies, especially the ones made between the 90s and 10s. But some of these are really hard to find online, even through legal means. Some you can't even find at all, with lots of deleted and expired download links. The trend is that every day that passes, these movies will get harder and harder to find.</p>
      <p>I believe these pieces of art should continue to be enjoyed by people. Because of that, I decided to build this digital repository. My mission is to use my witch powers to make these cool movies available for as long as possible without ads and such things. This blog is entirely non-profit, dedicated to preserving the beauty of J-Horror. I will continue to add films as I watch them.</p>
      <p>I hope you enjoy!</p>
      <p>Karma, the witch</p>
    </Layout>
  )
}

export const Head = () => <Seo title="What is Library of Karma?" />

export default AboutPage