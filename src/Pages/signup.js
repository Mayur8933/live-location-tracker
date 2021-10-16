import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Styles/signup.css'
import Login from './login';

const Signup = () => {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    // eslint-disable-next-line
    const [flag, setFlag] = useState(false)
    const [login, setLogin] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !pass) {
            setFlag(true)
        } else {
            setFlag(false);
            localStorage.setItem('Name', JSON.stringify(name));
            localStorage.setItem('Password', JSON.stringify(pass));
            console.log('Saved in Local storage!');
            setLogin(!login)
        }
    }

    return (
        <div className='bag'>
            <Container className='justify-content-center text-center height mid'>
                <Row xs={1} md={1} className="justify-content-md-center align-self-center">
                    {login ?
                        <form onSubmit={handleSubmit}>
                            <Col md='auto'>
                                <h2 className='cent'>SignUp</h2>
                            </Col>
                            <div>
                                <input name='name' value={name} className='mar width' placeholder='name' required onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <input name='pass' value={pass} className='mar width' placeholder='password' required onChange={(e) => setPass(e.target.value)} />
                            </div>
                            <Button className='mar wid' type='submit' variant="primary" size='sm'> SignUp </Button>
                        </form> : <Login />}
                </Row>
            </Container>
        </div>
    )
}
export default Signup;