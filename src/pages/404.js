import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Oops, Page not found 😐">
      <p>Sorry 😔, I couldn’t find what you were looking for.</p>
      <p>I'll do my best next time!</p>
      <Link to="/">Go home</Link>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
