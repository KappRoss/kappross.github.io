import React from 'react';
import translate from '../../i18n/translate';
import s from './footer.module.css';

export default function Footer({ id }) {
  return (
    <div className = {s.footer} id={id}>
      <div className = {s.location}>
        <div className = {s.title}>
          <p>{translate('ourOffice')}</p>
        </div>
        <div className = {s.info}>
          <p>{translate('address')}</p>
        </div>
      </div>
      <div className = {s.contacts}>
        <div className = {s.title}>
          <p>{translate('phone')}</p>
        </div>
        <div className = {s.info}>
          
          <p><a href="tel:380674468455">+38 (067) 446 84 55</a></p>
          <p><a href="tel:380672834045">+38 (067) 283 40 45</a></p>
          <br/>
          {/* <p>Email:</p> */}
          <p><a href = "mailto: abs.tcentre@gmail.com">abs.tcentre@gmail.com</a></p>
          <p><a href = "mailto: v.pav@aitehno.com">v.pav@aitehno.com</a></p>
      <br/>
        </div>
      </div>
      <div className = {s.socialNet}>
        <div className = {s.title}>
          {/* <p>{translate('')}МЫ В СОЦСЕТЯХ</p> */}
        </div>
        <div className = {s.info}>
          <p>
            {/* F    U    I */}
          </p>
        </div>
      </div>
      <div className = {s.copyright}>
        <p>{translate('Copyright')}</p>
        <br/>
        </div>
    </div>
  )
}
