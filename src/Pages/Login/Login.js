import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, email, password, photoURL);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate('/');
                setSuccess('Successfully logged in')
                console.log(user);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
        setError('');
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter Email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>

            <Form.Text>
                <span className="text-success">{success}</span>
                <span className="text-danger">{error}</span>
            </Form.Text>
        </Form>
    );
};

export default Login;