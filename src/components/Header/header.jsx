import React, { Component } from 'react';
import s from './header.module.css';
import { Link, animateScroll as scroll } from "react-scroll";
import MobileMenu from '../mobileMenu';
// import { fallDown as Menu } from 'react-burger-menu';

import logo from "./../../img/Log.png"
import Language from '../MultiLingual/Language';
import translate from '../../i18n/translate';




export default class Header extends Component  {
    scrollToTop = () => {
        scroll.scrollToTop();
      };
      showSettings (event) {
        event.preventDefault();
        
        
        
      }
    render(){
        return (
            <nav className = {s.header} id="navbar">
                <MobileMenu />
                <ul className = {s.menuMain}>
                    <li className={s.leftItem}>
                    <Link
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >{translate('projects')}</Link>
                    
                    </li>
                    <li className={s.leftItem}>
                    <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >{translate('Services')}</Link>
                    </li>
                    <li id = 'LangBlock' className={s.rightItem}>
                        <Language />
                    </li>
                    <li className={s.rightItem}>
                    <Link
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >{translate('Contacts')}</Link>
                    
                    </li>
                    <li className={s.rightItem}>
                    <Link
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >{translate('About')}</Link>
                    </li>
                    
                </ul>
                    <img
                        src= {logo}
                        className={s.navBarLogo}
                        alt="Logo."
                        onClick={this.scrollToTop}
                    />
                
            </nav>
        )
    }
    
}