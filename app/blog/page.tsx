
import { Metadata } from "next"
import Link from "next/link";

export type TypePost = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    }
  })

  return response.json()
}

export const metadata: Metadata = {
  title: "Blog",
  description: "page with info about us",
}

export default async function Blog() {
  const posts = await getData();

  return <>
    <h1>Blog</h1>
    <ul>
      {posts.map( (post:TypePost) => 
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
        )}
    </ul>
  </>
}
