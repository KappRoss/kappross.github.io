import React from 'react';
import translate from '../../../i18n/translate';
import s from './title.module.css';

const Title = () => {
    return (
        <div className = {s.title}>
            
                <h1>{translate('h1')}</h1>
                <p>{translate('mainSubTitle')}</p>
            
        </div>
    )
}

export default Title;