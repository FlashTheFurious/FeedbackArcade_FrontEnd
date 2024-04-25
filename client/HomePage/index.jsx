import React, { useState } from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import Select from "react-select";
import { message } from 'antd'

import { Link } from "react-router-dom";
import { useAuth } from "../../service/authService";
import { useNavigate } from 'react-router-dom'
import Navbar from "../../Components/Navbar";
import GameList from "../../Components/Games/GameList";

const HomePage = () => {
return (
    <>
        <Navbar/>
        <GameList/>
    </>
)
};

export default HomePage;
