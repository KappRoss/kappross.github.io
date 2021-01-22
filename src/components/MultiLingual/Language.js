import React, { useContext, useState } from 'react';
import s from './Language.module.css';
import {LanguageContext} from '../../App';
import ukr from '../../img/ukraine_icon_64.png';
import eng from '../../img/united_kingdom_icon_64.png';
import rus from '../../img/russia_icon_64.png';

const Language = () => {
//{localeRu, localeUa, localeEn}
  const localeHandlerS = useContext(LanguageContext);

  const [imgLang, setImgLang] = useState(ukr);
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className = {s.Language}>
      <div className={s.langBox} >
        <a id='Lang' onClick={() => setDropDown(!dropDown)}><img src={imgLang}/></a>
      </div>
      {dropDown 
      ? <ul>
      <li onClick = {()=> {setImgLang(eng); setDropDown(!dropDown)}}>
        <button onClick = { localeHandlerS.localeHandlerEn }><img src={eng}/>ENG</button>
      </li>
      <li onClick = {()=> {setImgLang(rus); setDropDown(!dropDown)}}>
        <button onClick = { localeHandlerS.localeHandlerRu }><img src={rus}/>РУС</button>
      </li>
      <li onClick = {()=> {setImgLang(ukr); setDropDown(!dropDown)}}>
        <button onClick = { localeHandlerS.localeHandlerUa }><img src={ukr}/>УКР</button>
      </li>
    </ul>
      : null
      }
      
    </div>
  )
}

export default Language;