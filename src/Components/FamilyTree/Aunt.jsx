import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='lami' asset={asset}></Cousin>
                <Cousin name='Tami'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;