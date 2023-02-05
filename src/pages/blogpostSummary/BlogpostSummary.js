import React from 'react';
import posts from '../../data/posts.json';
import {Link} from "react-router-dom";
import "./BlogpostSummary.css";

const BlogpostSummary = () => {
    return (
        <div className="blogpost">
            <h2>Blog overzicht pagina</h2>
            <h4>Aantal blogpost: {posts.length}</h4>
            <ul className="bloglist">
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link to={`/blogposts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default BlogpostSummary;
