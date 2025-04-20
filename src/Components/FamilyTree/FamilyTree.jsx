import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {

    const [money, setMoney] = useState(0)

    const asset = "Diamond";
    const newAsset = 'gold'
    return (
        <div className='family-tree'>
            <h1>Family tree</h1>
            <h2>Total Family Money: {money}</h2>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <Grandpa asset={asset}></Grandpa>
                </AssetContext.Provider>
            </MoneyContext.Provider>


        </div>
    );
};

export default FamilyTree;


/**
 * 1.create a context using createContext with a default value make sure you export the contexxt to be used in other files.
 * 
 * 
 * */ 