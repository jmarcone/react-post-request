import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default ({ name,addPost }) => {
    const [validated, setValidated] = useState(false);
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() !== false) {
            addPost({
                title: title,
                body: body
            });

        }
        setValidated(true);
    };

    return <div className="create-post">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control  required type="input" placeholder="Enter Post Title" value={title}  onChange={e => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupBody">
                <Form.Label>Body</Form.Label>
                <Form.Control required as="textarea" rows={3} placeholder="Enter Post Body" value={body}  onChange={e => setBody(e.target.value)}/>
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>

    </div>;
};
