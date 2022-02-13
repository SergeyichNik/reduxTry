import React from "react";

type PostType = {
    post: any
}

const Post = (props: PostType) => {
    let {post} = props

    return(
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">Title here{post}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Post;