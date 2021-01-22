import React from 'react';
import './servises.css';
import translate from '../../i18n/translate'; 
import ServSubItem from './servSubItem/servisesSubItem';
// import { Transition} from 'react-transition-group';

  class Servises extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: false,
        info: [
          { 
            id: 1 ,
            // subText: translate(''),
            text: translate('li9'),
            clicked: false
          },
          { 
            id: 2,
            // subText: translate(''), 
            text: translate('li10'),
            clicked: false
          },
          { 
            id: 3 ,
            // subText: translate(''),
            text: translate('li11'),
            clicked: false
          },
          { 
            id: 4 ,
            // subText: translate(''), 
            text: translate('li12'),
            clicked: false
          },
          { 
            id: 5 ,
            // subText: translate(''),
            text: translate('li13'),
            clicked: false
          },
          { 
            id: 6 ,
            // subText: translate(''),
            text: translate('li14'),
            clicked: false
          },
          { 
            id: 7 ,
            // subText: translate(''), 
            text: translate('li15'),
            clicked: false
          },
          { 
            id: 8 ,
            subText: translate('li8subText'),
            text: translate('li16'),
            clicked: false
          }
        ],
        ProjectSystem:[
          { 
            id: 1 ,
            subText: translate('li1subText'),
            text: translate('li1'),
            clicked: false
          },
          { 
            id: 2 ,
            subText: translate('li2subText'),
            text: translate('li2'),
            clicked: false
          },
          { 
            id: 3 ,
            subText: translate('li3subText'), 
            text: translate('li3'),
            clicked: false
          },
          { 
            id: 4 ,
            subText: translate('li4subText'),
            text: translate('li4'),
            clicked: false
          },
          { 
            id: 5 ,
            subText: translate('li5subText'),
            text: translate('li5'),
            clicked: false
          },
          { 
            id: 6 ,
            subText: translate('li6subText'),
            text: translate('li6'),
            clicked: false
          },
          { 
            id: 7 ,
            subText: translate('li7subText'), 
            text: translate('li7'),
            clicked: false
          },
          { 
            id: 8 ,
            subText: translate('li8subText'),
            text: translate('li8'),
            clicked: false
          }
        ],
        Commissioning:[
          { 
            id: 1 ,
            // subText: translate('li17'),
            text: translate('li17'),
            clicked: false
          },
          { 
            id: 2 ,
            // subText: translate('li17'),
            text: translate('li18'),
            clicked: false
          },
          { 
            id: 3 ,
            // subText: translate('li17'),
            text: translate('li19'),
            clicked: false
          },
        ]
      };
      this.handleClickProjectSystem = this.handleClickProjectSystem.bind(this);
      this.handleClickInfo = this.handleClickInfo.bind(this);
    }
    
    handleClickInfo(e){
      this.setState({
          ...this.state,
          info: this.state.info.map(item => {
            if(e.target.id == item.id){
              return {...item, clicked: !item.clicked}
            }
            if(e.target.id !== item.id){
              return {
                ...item, clicked: false
              }
            }
            return item
        })
      })
    }
    handleClickProjectSystem(e){
      this.setState({
          ...this.state,
          ProjectSystem: this.state.ProjectSystem.map(item => {
            if(e.target.id == item.id){
              return {
                ...item, clicked: !item.clicked
              }
            }
            if(e.target.id !== item.id){
              return {
                ...item, clicked: false
              }
            }
            return item
        })
      })
    }
      
    render() {
      return (
        
        <div 
          className = 'servises' 
          id={this.props.id} 
          
        >
          <div className = 'servisesTitle'>
            <h2>{translate('Service')}</h2>
          </div>
          {/* //////////////////////////////////////////ServiseBlocks//////////////////////////////////////////////////// */}
            <div className='ServiseBlocks'>
              <div className='ProjectSystem'>
                <div className='icon'>
                  <i className="fas fa-clipboard"></i>
                </div>
                <div className='title'>
                  <p>{translate('ProjectSystem')}</p>
                </div>
                <ul>
                {
                    this.state.ProjectSystem.map((item, index) => (
                      <ServSubItem 
                        key = {index}
                        onClick = {this.handleClickProjectSystem}
                        clicked = {this.state.ProjectSystem[index].clicked}
                        id = {index + 1}
                        text = {item.text}
                        subText = {this.state.ProjectSystem[index].subText}
                      />
                   ))
                  }
                </ul>
                  
              </div>
              {/* ///////////////////////////////////////InstallationSystems/////////////////////////////////////////////////////////////// */}
              <div className='InstallationSystems'>
                <div className='icon'>
                  <i className="fas fa-tools"></i>
                </div>
                <div className='title'>
                  <p>{translate('InstallationSystems')} </p>
                </div>
                <ul>
                  {
                    this.state.info.map((item, index) => (
                      <ServSubItem 
                        key = {index}
                        // onClick = {this.handleClickInfo}
                        // clicked = {this.state.info[index].clicked}
                        id = {index + 1}
                        text = {item.text}
                        // subText = {this.state.info[index].subText}
                      />
                   ))
                  }
                </ul>
              </div>
              {/* ///////////////////////////////////////Commissioning/////////////////////////////////////////////////////////////// */}
              <div className='Commissioning'>
                <div className='icon'>
                  <i className="fas fa-sign-in-alt"></i>
                </div>
                <div className='title'>
                  <p>{translate('Commissioning')} </p>
                </div>
                <ul>
                {
                    this.state.Commissioning.map((item, index) => (
                      <ServSubItem 
                        key = {index}
                        // onClick = {this.handleClickInfo}
                        // clicked = {this.state.info[index].clicked}
                        id = {index + 1}
                        text = {item.text}
                        // subText = {this.state.info[index].subText}
                      />
                   ))
                  }
                </ul>
              </div>
            </div>




          {/* {this.state.info.map((item, index) => {
            <div key = {index} >

            </div>
          })}
          </div> */}
          
          {/* <div className = 'buttonForMore'>   

          <Transition
            in = {this.state.isToggleOn}
            timeout={{
              enter: 1000,
              exit: 400
            }}
            mountOnEnter
            unmountOnExit
          > 
             {state => (<div className = 'servisesItem'>
                {this.state.otherInfo.map((item, index) => (
                  <div key = {index} className = {`item square ${state}`}>
                    <div className = 'itemFhoto'>
                      <img src={item.id} alt=""/>
                    </div>
                    <div className = 'textAboutItem'>
                      <p>{item.text}</p>
                    </div> 
                  </div>)
                )
                }
              </div>)} 
          </Transition>
              
              <button onClick = {this.handleClick} type = 'button' className = 'btnServises'>
                {this.state.isToggleOn ? 'Скрыть': 'Показать ещё'}
              </button>
              
          </div> */}
        </div>
      )
    }
  }
export default Servises;