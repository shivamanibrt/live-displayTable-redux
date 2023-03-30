import React from 'react'
import { Form, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setLiveData } from '../nameSlice'
import { setDisplayData } from '../nameSlice'


export const SearchForm = () => {
    // this is used to send data to redux
    const dispatch = useDispatch();

    const handelOnChange = (e) => {

        //this retreive data and puts to value
        const { value } = e.target;
        //this sends data to setLiceData
        dispatch(setLiveData(value));
    }
    const handelOnSubmit = e => {
        e.preventDefault();
        dispatch(setDisplayData())
    }
    return (
        <div className='bg-black p-5 rounded shadow-lg'>
            <Form onSubmit={handelOnSubmit}>
                <Row className='gap-1'>
                    <Col md='9'>
                        <Form.Control onChange={handelOnChange} type="text" placeholder="Enter text" />
                    </Col>

                    <Col className='d-grid'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>

            </Form>
        </div>
    )
}
