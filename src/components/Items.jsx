import React from 'react';
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

const Items = ({ name, lastName, number, membership, isFavourite, handleFavourite, handleEdit, handleDelete }) => {
    return (
        <div>
            <Alert variant="primary" className="d-flex justify-content-between align-items-center">
                <div>
                    <span>{name} </span><span>{lastName}</span> <span>{membership}</span>
                    <p>{number}</p>
                </div>
                <div>
                    <Button onClick={handleFavourite} className="mr-2">
                        {isFavourite ? 'Unfavourite' : 'Favourite'}
                    </Button>
                    <Button onClick={handleEdit} className="mr-2">Edit</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </div>
            </Alert>
        </div>
    );
};

export default Items;
