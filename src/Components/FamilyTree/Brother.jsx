import React, { use, useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {
    // ei dui vhabei context api use kora jai
    const [money, setMoney] = use(MoneyContext)
    // const [money, setMoney] = useContext(MoneyContext)



    return (
        <div>
            <h3>Brother</h3>
            <button onClick={()=> setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Brother;