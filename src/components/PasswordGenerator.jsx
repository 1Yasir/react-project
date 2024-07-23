import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';




function PasswordGenerator() {
  return (
    <div className='passwordGenerator position-fixed w-100 h-100  bg-dark text-white d-flex  justify-center align-items-center'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 offset-0 offset-sm-3">
            <h1 className='mb-3 text-center'>Password Generator</h1>
            <FloatingLabel
              controlId="floatingInput"
              label="password"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="password" readOnly />
            </FloatingLabel>
            <div className='d-flex gap-5 align-items-center'>

              <div className="range d-flex align-items-center gap-3">
                <Form.Range
                  min="0"
                  max="100"
                />
                <Form.Label>Range</Form.Label>

              </div>

              <Form.Check
                inline
                label="Add Number"
                name="group1"
                type="checkbox"
                id='addNumber'
              />
              <Form.Check
                inline
                label="Add Character"
                name="group1"
                type="checkbox"
                id='addCharacter'
              />


            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default PasswordGenerator