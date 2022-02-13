import React from "react";
import Post from "./Post";


const FetchedPosts = (props: any) => {
    const {posts} = props

    if (!posts.length) {
        return <button className={'btn btn-primary'}>Download post</button>
    } else {
        return props.posts.map((post: number, index: number) => {
            return (
                <Post post={post} key={index}/>
            )
        })
    }

}

export default FetchedPosts;