import React from "react";
import Post from "./Post.js";
import Table from "react-bootstrap/Table";

export default ({ posts }) => {
    return (
        <div className="post-list">
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>User Id</th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post) => (
                    <Post post={post} />
                ))}
                </tbody>
            </Table>
        </div>
    );
};
