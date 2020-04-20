import React from 'react'
import Layout from "../components/MyLayout"
import Link from "next/link"
import fetch from "isomorphic-unfetch"

const getPosts = ()=>{
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ];
}

const PostLink = ({post})=>{
  return <li key={post.id}>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{
      `
      li{
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover{
          opacity: 0.6;
        }
      `}</style>
  </li>
}

export default ()=>{
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {getPosts().map(post=>(
          <PostLink post={post} key={post.id}/>
        ))}
      </ul>
      <style jsx>{`
        h1,
        a{
          font-family 'Arial';
        }

        ul{
          padding: 0;
        }
        `}</style>
    </Layout>
  )
};
