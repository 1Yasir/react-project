import React, { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function PasswordGenerator() {
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const generateRandomPassword = () => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+|}{";

    if (includeNumbers) chars += numbers;
    if (includeSpecialChars) chars += specialChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  useEffect(() => {
    generateRandomPassword();
  }, [length, includeNumbers, includeSpecialChars]);

  return (
    <div className='password-generator position-fixed w-100 h-100 bg-dark text-white d-flex justify-center align-items-center'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 offset-0 offset-sm-3">
            <h1 className='mb-3 text-center'>Password Generator</h1>

            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Password" readOnly value={password} />
            </FloatingLabel>
            <div className='d-flex align-items-center justify-content-between'>
              <div className="range d-flex align-items-center gap-3 w-50">
                <Form.Range
                  min="10"
                  max="100"
                  className='w-50'
                  onChange={(e) => setLength(e.target.value)}
                  value={length}
                />
                <Form.Label className="m-0">Range: {length}</Form.Label>
              </div>
              <Form.Check
                inline
                label="Add Numbers"
                name="group1"
                type="checkbox"
                id='addNumbers'
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
              />
              <Form.Check
                inline
                label="Add Special Characters"
                name="group1"
                type="checkbox"
                id='addSpecialChars'
                checked={includeSpecialChars}
                onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
