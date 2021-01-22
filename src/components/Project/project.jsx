import React from 'react';
import s from './project.module.css';
import Carousel from 'react-elastic-carousel';
import './carousel.css';
import Khostytsa from '../../img/Khostytsa.png';
import HotelSofi from '../../img/HotelSofi.png';
import HotelLondon from '../../img/HotelLondon.png';
import Dlux from '../../img/DLUX.png';
import Avtostation from '../../img/Avtostation.png';
import kosmopolit from '../../img/kosmopolit.png';
import NivkyPark from '../../img/NivkyPark .png';
import Tradytsiia from '../../img/Tradytsiia.png';
import holodomor from '../../img/holodomor.jpg';
import translate from '../../i18n/translate';

export default function Project({ id }) {

  const state =  [
      { 
        id: holodomor ,
        title: translate('holodomor'),
        text: 'Перечень выполненных работ:'
      },
      { 
        id: Tradytsiia ,
        title: translate('Tradytsiia'), 
        text: 'Перечень выполненных работ:'
      },
      { 
        id: kosmopolit ,
        title: translate('kosmopolit'), 
        text: 'Перечень выполненных работ:'
      },
      { 
        id: Avtostation ,
        title: translate('Avtostation'),
        text: 'Перечень выполненных работ:'
      },
      { 
        id: Dlux ,
        title: translate('Dlux'),
        text: 'Перечень выполненных работ:'
      },
      { 
        id: NivkyPark ,
        title: translate('NivkyPark'),
        text: 'Перечень выполненных работ:'
      },
      { 
        id: HotelLondon ,
        title: translate('HotelLondon'),
        text: 'Перечень выполненных работ:'
      },
      { 
        id: HotelSofi ,
        title: translate('HotelSofi', {path: <code>&#9733;</code>}),
        text: 'Перечень выполненных работ:'
      },
      { 
        id: Khostytsa ,
        title: translate('Khostytsa'),
        text: 'Перечень выполненных работ:'
      }
    ]
    
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 }
    ];

  return (
    <div className = {s.project} id={id}>
      <div className = {s.projectTitle}>
      
      <div >
        <h2>{translate('projects')}</h2><br/><br/>
      </div>
        {/* <p className ={s.subTitle}>Познакомьтесь с примерами реализованных нами проектов.</p> */}
      </div>
      <Carousel 
        breakPoints={breakPoints}  
      >
      {
        state.map( (text, index) => 
          <div key = {index} className = {s.item}>
          <div className = {s.titleItem}>
            <h3>{text.title}</h3>
          </div>
          <div className={s.projectBox}>
            {/* <div className = {s.moInfo}>
              
              <p>О проекте</p>
            </div> */}
            <img src={text.id} alt="" className = {s.projectImg}/>
            {/* <div className = {s.itemText}>
              <div className = {s.text}>
                <p>
                  <strong>Расположение: </strong>
                  <br/>
                    г.Киев бульв. Перова, 36 
                  <br/>
                </p>
                <p>
                  <strong>Общая площадь обьекта: </strong>
                  <br/>
                  38 384 м" 
                  <br/>
                </p>
                
                <p>
                  <strong>{text.text}</strong>
                  <br/>
                  сделали и то и это и так и сяк пушка вышка все ништяк
                </p>
              </div>
            </div> */}
          </div>
        </div>
        )
      }
      </Carousel>
    </div>
  )
}
