import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = event => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, email, password, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setSuccess('Successfully created a user');
                handleUpdateUserProfile(name, photoURL);
                // console.log(user);
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
        setError('');
    }

    const hanldeChecked = event => {
        setAcceptedTerms(event.target.checked);
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Your PhotoURL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Enter Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter Email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={hanldeChecked}
                    type="checkbox"
                    label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>}
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!acceptedTerms}>
                Register
            </Button>


            <Form.Text>
                <span className="text-success">{success}</span>
                <span className="text-danger">{error}</span>
            </Form.Text>
        </Form>
    );
};

export default Register;