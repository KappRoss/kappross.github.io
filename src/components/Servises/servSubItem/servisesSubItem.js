import React from 'react';
import s from './servisesSubItem.module.css';

const ServSubItem = ({text,clicked,subText,onClick,id}) => {
  const cls = []
      
      if(!clicked){
        cls.push('open')
      }
      else{
        cls.push('close')
      }

  return (
    <>
    <li 
      onClick = {onClick} 
      id = {id}
      className = {s.ServSubItem}
    >
      {text} <br/>
      
        
        
    </li>
    {clicked 
      ?<div className = {s.SubText}>{subText}</div>
      : null}
      </>
  )
}


// <i className="fas fa-arrow-circle-down"></i>

export default ServSubItem;