import React from 'react';
import { Card } from 'react-bootstrap';

const ThirdQns = () => {
    return (
        <Card className='p-3 border-0 shadow mt-5'>
            <Card.Body>
                <h4 className='brand-text text-center mb-3'>What other services does firebase provide other than authentication?</h4>
                <Card.Text>
                    Firebase is a Backend-as-a-Service. It provides developers with many tools and services that help developers to develop quality apps and grow their user base. Firebase uses the NoSql database program that stores data in JSON-like documents.  We can use firebase is many purposes other than authentication. We can use firebase Realtime Database, Remote Config, Cloud Functions, Cloud Messaging, Hosting for deploying our project, And Cloud Storage. We can also use Firebase ML for powerful machine learning Features, Now It is in beta version.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ThirdQns;