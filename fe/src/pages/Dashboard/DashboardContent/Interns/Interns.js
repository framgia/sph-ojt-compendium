import React from 'react';

import style from './Interns.module.css'
import InternsCard from './InternsCard/InternsCard';
import { Pagination } from 'semantic-ui-react'

const Interns = () => {

    const internList = [
        {
            "intern": "David Brent",
            "otherDetails": {},
        },
        {
            "intern": "Jhon Dewy",
            "otherDetails": {},
        },
        {
            "intern": "Mary Grace",
            "otherDetails": {},
        },
        {
            "intern": "John Joseph",
            "otherDetails": {},
        },
        {
            "intern": "Nina Marie",
            "otherDetails": {},
        }
    ];
    return (
        <div className={style.interns}>
            <div className={style.header}>
                <span className={style.label}>Interns</span>
                <input className={style.search}></input>
            </div>
           {
            internList.map((int) => <InternsCard intern={int.intern}/>)
           }
           <div className={style.pagination}>
                <Pagination defaultActivePage={5} totalPages={10}/>
           </div>
        </div>
    );
}
 
export default Interns;