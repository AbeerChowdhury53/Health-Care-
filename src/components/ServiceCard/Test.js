import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ('./Test.css');

const Test = (props) => {
    const {id ,pic, fee, name, description}=props.service
    console.log(props.service)

    return (
        <div className="card">          
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pic} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 150)+'...'}
                    </Card.Text>
                    <Link to={`/singletest${id}`} >
                    <Button variant="primary">Details</Button>
                    </Link>
                </Card.Body>
            </Card>            
        </div>
    );
};

export default Test;