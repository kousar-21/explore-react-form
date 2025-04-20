import React from 'react';
import useInputField from '../CustomHooks/useInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', name, email, password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={nameOnChange} name="" />
                <br />
                <input type="email"defaultValue={email} onChange={emailOnChange} name="" />
                <br />
                <input type="password" defaultValue={password} onChange={passwordOnChange} name=""  />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;