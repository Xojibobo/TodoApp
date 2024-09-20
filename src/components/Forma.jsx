import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Forma = ({ name, validated, submit, handleValue, lastName, number, membership }) => {



    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <Form noValidate validated={validated} className='col-6' onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            name="firstName"
                            value={name}
                            required
                            type="text"
                            onChange={handleValue}
                            placeholder="First name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please fill!.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            name="lastName"
                            value={lastName}
                            required
                            type="text"
                            onChange={handleValue}
                            placeholder="Last name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please fill!.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="number">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            name="number"
                            value={number}
                            required
                            type="number"
                            onChange={handleValue}
                            placeholder="Phone number"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please fill!.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Label>Choose categories</Form.Label>
                    <Form.Select name="membership" value={membership} onChange={handleValue}>
                        <option value="">Choose...</option>
                        <option value="family">Family</option>
                        <option value="friends">Friends</option>
                        <option value="relatives">Relatives</option>
                    </Form.Select>
                    <Button variant="primary" type="submit" className='mt-4 w-100'>
                        Add Todo
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Forma;
