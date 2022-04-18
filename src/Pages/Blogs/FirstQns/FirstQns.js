import React from 'react';
import { Card, Table } from 'react-bootstrap';

const FirstQns = () => {
    return (
        <Card className='p-3 border-0 shadow'>
            <h4 className='brand-text text-center mb-3'>Difference between authorization and authentication.</h4>
            <Card.Body>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Authorization</th>
                            <th>Authentication</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>In the Authentication Process, we identify or check user information.</td>
                            <td>The authorization Process is used for what resources a user can access.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>In Authentication, we verified the users by their email or phone and password.</td>
                            <td>Authorization works with the setting that is implemented and gives access to the user by the organization.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Authentication is done before the authorization process.</td>
                            <td>The authorization part comes after Authentication.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Authentication can be partially changeable by the user. Like user can change the password and email address.</td>
                            <td>But a general user can’t change the authorization access.</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Authentication Check whether the person is a user or not.</td>
                            <td>Authorization determines that, is the user has permission to view this page or not.</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default FirstQns;