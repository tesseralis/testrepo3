import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
<<<<<<< HEAD
    <SEO title="Home" keywords={[`awesome`, `nat`, `tess`]} />
    <h1>Much @tesseralis. very official. wow</h1>
    <p>o hai. very fan club.</p>
    <p>very praise.</p>
    <p>So pretty. wow. Much talented.</p>
=======
    <SEO title="Home" keywords={['awesome', 'nat', 'tess', 'alison']} />
    <h1>Official @tesseralis fan site</h1>
    <p>Welcome to the official tesseralis fan club.</p>
    <p>Here you can praise the beautiful, talented genius that is tesseralis</p>
>>>>>>> 1691d46592e397fa740ce9ee510fae9b68881ed3
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">go 2</Link>
    <Link to="/page-3/">go 3</Link>
    <Link to="/page-4/">go 4</Link>
  </Layout>
)

export default IndexPage
