import Post from "./Post";
type PostsType = Array<number>
type PropsType = {
    posts: PostsType
}

const Posts = (props: any) => {

    if (!props.posts.length) {
        return <p className={'text-center'}>Nothing here yet</p>
    } else {
        return props.posts.map((post: number, index: number) => {
            return (
                <Post post={post} key={index}/>
            )
        })
    }

}

export default Posts;