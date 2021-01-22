import React from 'react';
import s from './mainPage.module.css';
import Title from './Title/title';


export default function MainPage({ id }) {
    return (
        <div className = {s.mainContent} id = {id}>
            <div className = {s.overlay}>
            <Title />
            </div>
        </div>
        
        
        
    )
}