import { TypePost } from "../page";

type Props = {
    params: {
        id: string;
    };
};

export async function generateMetadata({ params: { id } }: Props) {
    const post = await getData(id)
    console.log(post)
    return {
        title: `${post.title}`
    }
}
async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.json()
}

export default async function Post({ params: { id } }: Props) {
    const post: TypePost = await getData(id)
    return <>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </>;
}