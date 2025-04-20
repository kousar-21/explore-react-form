import React from 'react';

const FormAction = () => {
    const handleFormAction = (formData) => {
        console.log(formData.get('name'))
        console.log(formData.get('email'))
    }
    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" name="name" placeholder='your name'/>
                <br />
                <input type="email" name="email" placeholder='your email' />
                <br />
                <input type="submit" value="submit"/>
                <br />
            </form>
        </div>
    );
};

export default FormAction;