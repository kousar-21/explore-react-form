import React, { createContext } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'

export const AssetContext = createContext('');

const FamilyTree = () => {
    const asset = "Diamond";
    const newAsset = 'gold'
    return (
        <div className='family-tree'>
            <h1>Family tree</h1>
            <AssetContext.Provider value={newAsset}>
            <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider>
           
        </div>
    );
};

export default FamilyTree;