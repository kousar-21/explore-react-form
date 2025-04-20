import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error, setError] = useState('');

    const handleProductSubmit =(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        // console.log(name, price, quantity)

        // validation cheack
        if(name.length === 0){
            setError('please fill up the name option');
            return;
        }
        else if(price.length === 0){
            setError('please enter the price');
            return;
        }
        else if(price < 0){
            setError('price can not be negetive');
            return;
        }
        else if(quantity.length === 0){
            setError('please enter the quantity');
            return;
        }
        else if(quantity < 0){
            setError('quantity can not be negetive');
            return;
        }
        else{
            setError('')
        }

        const newProduct = {
            name,
            price,
            quantity
        }

        // console.log(newProduct)
        handleAddProduct(newProduct);
    }
    return (
        <div>
            <h3>Add a Product</h3>

            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder='product name' />
                <br />
                <input type="text" name="price" placeholder='product Price' />
                <br />
                <input type="text" name="quantity" placeholder='product Quantity' />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;