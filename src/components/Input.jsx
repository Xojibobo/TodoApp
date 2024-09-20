import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Input = ({ search, handleSearch }) => {
    return (
        <div className='container'>
            <div className="row">
                <InputGroup className="m-3">
                    <Form.Control
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search todo"
                    />
                    <InputGroup.Text >
                        <Form.Select>
                            <option value="all">All</option>
                            <option value="family">Family</option>
                            <option value="friends">Friends</option>
                            <option value="relatives">Relatives</option>
                        </Form.Select>
                    </InputGroup.Text>
                </InputGroup>
            </div>
        </div>
    );
};

export default Input;
