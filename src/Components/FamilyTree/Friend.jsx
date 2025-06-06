import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {
    const [money, setMoney] = use(MoneyContext)
    return (
        <div>
            <h3>Friend</h3>
            <p>family got: {money}</p>
        </div>
    );
};

export default Friend;