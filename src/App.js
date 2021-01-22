import { Component, useState } from 'react';
import React from 'react';
import './App.css';
import Company from './components/Company/company';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import MainPage from './components/mainPage/mainPage';
import Project from './components/Project/project';
import Servises from './components/Servises/servises';
import { I18nProvider, LOCALES } from './i18n';
// import { StyleRoot } from 'radium';

export const LanguageContext = React.createContext({})

function App() {

    const [locale, setLocale] = useState(LOCALES.UKRAINIAN)

    const localeHandlerRu = () => {
      setLocale(LOCALES.RUSSIAN )
    }

    const localeHandlerEn = () => {
      setLocale(LOCALES.ENGLISH)
    }

    const localeHandlerUa = () => {
      setLocale(LOCALES.UKRAINIAN)
    }
    
    const localeHandlerS = {
      localeHandlerRu,
      localeHandlerEn,
      localeHandlerUa
    }

    return (
      <I18nProvider locale = {locale}>
        <div className = "app-wrapper">
        {/* <StyleRoot> */}
        <LanguageContext.Provider value = {localeHandlerS}>
          <Header/>
        </LanguageContext.Provider>
        
        <div className = "main">
          <MainPage 
            title="Section 1"
            id="mainPage"
          />
        </div>
        <div className = "content">
          <Servises 
            title="Section 1"
            id="section1"
          />
          <Company 
            title="Section 2"
            id="section2"
          />
          <Project 
            title="Section 3"
            id="section3"
          />
          <Footer 
            title="Section 4"
            id="section4"
          />
        </div>
        {/* </StyleRoot> */}
      </div>
      </I18nProvider>
    )
}

export default App;