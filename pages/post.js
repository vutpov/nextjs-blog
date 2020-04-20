import React from 'react'
import Layout from "../components/MyLayout"
import { useRouter } from "next/router"

function Content() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is blog post content.</p>
    </Layout>
  )
}

export default Page = ()=>(
  <Layout>
    <Content/>
  </Layout>
)
