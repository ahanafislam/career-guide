import React from 'react';
import { Card } from 'react-bootstrap';

const SecondQns = () => {
    return (
        <Card className='p-3 border-0 shadow mt-5'>
            <Card.Body>
            <h4 className='brand-text text-center mb-3'>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <Card.Text>
                    <p>In this project, we use firebase for authentication. With the help of firebase, we easily make user signup process and login process. Users can log in with their email id and password and also can log in with their social accounts. We also host our projects in firebase.</p>
                    <p>There are many alternatives way of authentication like firebase, Some examples are Ory, Supabase, Okta, OneLogin, JumpCloud, G2 Deals, Auth0, etc. </p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SecondQns;