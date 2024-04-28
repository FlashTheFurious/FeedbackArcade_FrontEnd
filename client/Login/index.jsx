import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./style.css";
import BackgroundImage from "../../assets/images/background.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../service/authService";
import { message } from 'antd';
import { useNavigate} from 'react-router-dom'


const Login = () => {
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        await delay(500);

        // if (inputUsername !== "admin" || inputPassword !== "admin") {
        //     setShow(true);
        // }
        const userData = {
            email: inputUsername,
            password: inputPassword,
        };
        try {
            await login(userData).then((response) => {
                if (response.status === 200) {
                    message.success("Signin sucessfull");
                    navigate('/dashboard')
                }
                else {
                    message.error(response?.response?.data?.message);
                }
            })
        } catch (error) {
            // Error occurred during registration
            message.error(error);
        }
        setLoading(false);
    };

    const handlePassword = () => { };

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return (
        <div
            className="sign-in__wrapper"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            {/* Overlay */}
            <div className="sign-in__backdrop"></div>
            {/* Form */}
            <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
                {/* Header */}
                {/* <img
          className="img-thumbnail mx-auto d-block mb-2"
        //   src={Logo}
          alt="logo"
        /> */}
                <div className="h4 mb-2 text-center">Sign In</div>
                {/* ALert */}
                {show ? (
                    <Alert
                        className="mb-2"
                        variant="danger"
                        onClose={() => setShow(false)}
                        dismissible
                    >
                        Incorrect username or password.
                    </Alert>
                ) : (
                    <div />
                )}
                <Form.Group className="mb-2" controlId="username">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        value={inputUsername}
                        placeholder="Username"
                        onChange={(e) => setInputUsername(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={inputPassword}
                        placeholder="Password"
                        onChange={(e) => setInputPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="checkbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                {!loading ? (
                    <Button className="w-100" variant="primary" type="submit">
                        Log In
                    </Button>
                ) : (
                    <Button className="w-100" variant="primary" type="submit" disabled>
                        Logging In...
                    </Button>
                )}
                {/* <div className="d-grid  mt-3">
                    <Button
                        className="text-muted px-0"
                        variant="link"
                        onClick={handlePassword}
                        style={{ textAlign: "center" }}
                    >
                        Forgot password?
                    </Button>
                </div> */}
                <div className="mt-3">
                    <p style={{ textAlign: "center" }} className="mt-1">New user? <Link to='/register'><span> Create account</span></Link></p>
                </div>
            </Form>
            {/* Footer */}
            {/* <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Made by Hendrik C | &copy;2022
      </div> */}
        </div>
    );
};

export default Login;
