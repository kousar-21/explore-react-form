import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("okay")
    }

    const handleOnChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Email' required />
                <br />
                <input type="password" defaultValue={password} onChange={handleOnChange} name="password" placeholder='password' required />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ControlledField;