import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../Styles/signup.css'
import Geo from './geolocate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [namelog, setNamelog] = useState('');
    const [password, setPassword] = useState('');

    // eslint-disable-next-line
    const [flag, setFlag] = useState(false)
    const [dash, setDash] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        let pass = localStorage.getItem('Password').replace(/"/g, "");
        let name = localStorage.getItem('Name').replace(/"/g, "");

        if (!namelog || !password) {
            setFlag(true)
            console.log('Empty')
        } else if ((password !== pass) || (namelog !== name)) {
            setFlag(true)
            return toast("User doesn't exist...",{type: 'error'})
        } else {
            setDash(!dash);
            setFlag(false)
        }
    }

    return (
        <div className='bag'>
            <Container className='justify-content-center text-center height mid bag'>
                <Row xs={1} md={1} className="justify-content-md-center align-self-center bag-color mid">
                    {dash ?
                        <form onSubmit={handleSubmit}>
                            <Col md='auto'>
                                <h2 className='cent'>Login</h2>
                            </Col>
                            <div>  
                                <input name='namelog' value={namelog} className='mar width' placeholder='name' required onChange={(e) => setNamelog(e.target.value)} />
                            </div>
                            <div>
                                <input name='pass' value={password} className='mar width' placeholder='password' required onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <Button className='mar wid' type='submit' variant="primary" size='sm'> Login </Button>
                            <div>
                                <p>Don't have an account?<Link className='none' to='/signup'> Signup</Link></p>
                            </div>
                            <ToastContainer/>
                        </form> : <Geo />}
                </Row>
            </Container>
        </div>
    )
}

export default Login;