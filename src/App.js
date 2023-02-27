import {useEffect, useState} from "react";
import CreatePost from "./components/CreatePost";
import Instructions from "./components/Instructions";
import PostList from "./components/PostList";
import "./styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
//const axios = require('axios').default;
import axios from "axios";


export default function App() {
    const [posts, setPosts] = useState([]);
    const API_URL = "https://jsonplaceholder.typicode.com/posts";


    const getUsers = async () => {
        try {
            const response = await axios.get(API_URL);
            return (response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const addPost = (newPost) => {
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({
                title: newPost.title,
                body: newPost.body,
                userId: 100,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((newPost) => setPosts([...posts, newPost]))

    }

    useEffect(() => {
        //usign axios and async/await
        getUsers().then((json) => setPosts(json));

        //standart fetch
        // fetch(API_URL)
        //     .then((response) => response.json())
        // .then((json) => console.log(json)).catch(e => console.log(e);

    }, []);



    return (
        <Container className="p-3">
            <Container className="p-5 mb-4 bg-light rounded-3">
                <Instructions/>
            </Container>
            <Container className="p-5 bg-light">
                <CreatePost name={"name"} addPost={addPost}/>
            </Container>
            <Container className="p-3 bg-light">
                <PostList posts={posts}/>
            </Container>
        </Container>
    );
}
