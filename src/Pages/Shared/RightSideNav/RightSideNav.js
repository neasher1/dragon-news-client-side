import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { FaGoogle, FaGithub, FaWhatsapp, FaYoutube, FaTwitch, FaTwitter } from "react-icons/fa";
import Brand1 from '../../../Assets/Brands/Brand1.png';
import Brand2 from '../../../Assets/Brands/Brand2.jpg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const { googleProviderLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div>

            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login With Github</Button>
            </ButtonGroup>

            <div className='mt-4'>
                <h5>Find Us More</h5>
                <ListGroup>
                    <ListGroup.Item><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item><FaYoutube /> Youtube</ListGroup.Item>
                    <ListGroup.Item><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                </ListGroup>
            </div>

            <div className='mt-4'>
                <h5>Brand Ads</h5>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Brand1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Brand2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default RightSideNav;