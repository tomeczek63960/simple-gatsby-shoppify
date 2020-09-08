import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/PageHero/PageHero";
import FeaturedProducts from "../components/HomePage/FeaturedProducts";

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Home" />
      <PageHero/>
      <FeaturedProducts />
   </Layout>
)}

export default IndexPage;