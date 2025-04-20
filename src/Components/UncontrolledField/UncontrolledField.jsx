import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        // const email = emailRef.current.value;
        // const password = passwordRef.current.value;
        // console.log(email, password)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" ref={emailRef} name="email" />
                <br />
                <input type="password" ref={passwordRef} name="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;