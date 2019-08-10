import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  {
    conferences {
      listConferences {
        items {
          name
          description
          weather
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Cool Conferences</h1>
    <ul>
      {data.conferences.listConferences.items.map(conf => (
        <li key={conf.id}>
          <h2>{conf.name}</h2>
          <p>{conf.description}</p>
          <p>{conf.weather}</p>
        </li>
      ))}
    </ul>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
