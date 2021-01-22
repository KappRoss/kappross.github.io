import React from 'react';
import translate from '../../i18n/translate';
import s from './company.module.css';

export default function Company({ id }) {
  return (
    <div className = {s.company} id={id}>
      <div className = {s.overlay}>
      <div className = {s.companyTitle}>
        <h2>{translate('About')}</h2>
      </div>
      <div className = {s.aboutCompany}>
        <div className = {s.description}>
          <p>
            {translate('description1')}<br/><br/>
            {translate('description2')}<br/><br/>
            {translate('description3')}<br/><br/>
            {translate('description4')}<br/><br/>
            {translate('description5')}<br/><br/>
          </p>
        </div>
        {/* <div className = {s.photoCompany}>
          <img src="" alt=""/>
        </div> */}
      </div>
      </div>
    </div>
  )
}
