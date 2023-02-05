import React from 'react';
import posts from '../../data/posts.json';
import {Link, useParams} from "react-router-dom";

function BlogpostPage() {
    const {id} = useParams();

    const currentPost = posts.find((post) => {
        return post.id === id;
    });

    return (
        <>
            <div className="post-container">
                <h2>{currentPost.title}</h2>
                <p>{currentPost.date}</p>
                <p>{currentPost.content}</p>
            </div>
            <div>
                <Link to="/">Terug naar Home</Link>
            </div>
        </>

    );
}


export default BlogpostPage;