import React from 'react';

const SimpleFrom = () => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log('onsubmit working')
        console.log(event.target.name.value)
        console.log(event.target.email.value)
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='your name' />
                <br />
                <input type="email" name="email" placeholder='your email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;