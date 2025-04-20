import React, { useState } from 'react';

const ControlledField = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password)
        if (password.length < 6) {
            setError('password must be 6 characters or more than 6 character')
        }
        else {
            setError('');
        }
    }

    const handleOnChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)

        if (password.length < 6) {
            setError('password must be 6 characters or longer')
        }
        else {
            setError('');
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleNameChange = (e)=>{
        setName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={handleNameChange} name='name' />
                <br />
                <input type="email" defaultValue={email} onChange={ handleEmailChange} name="email" placeholder='Email' required />
                <br />
                <input type="password" defaultValue={password} onChange={handleOnChange} name="password" placeholder='password' required />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;