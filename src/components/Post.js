import React from "react";

export default ({ post }) => {
    return (
        <tr key={post.id+post.title}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>{post.userId}</td>
        </tr>
    );
};
