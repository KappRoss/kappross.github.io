import React from 'react';
import { bool , func} from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link, animateScroll as scroll } from "react-scroll";
import translate from '../../../i18n/translate';
import Language from '../../MultiLingual/Language';

const Menu = ({ open, setOpen, ...props }) => {
  
  const isHidden = open ? true : false;

  // const [isToggled, setIsToggled] = React.useState(true);

  return (
    <>
     <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Language

      />  
        <Link
          onClick = {() => setOpen(!open)}
          className="menu-item"
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {translate('projects')}
        </Link>
        <Link
          onClick = {() => setOpen(!open)}
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >{translate('Services')}</Link>
        <Link
          onClick = {() => setOpen(!open)}
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >{translate('Contacts')}</Link>
        <Link
          onClick = {() => setOpen(!open)}
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >{translate('About')}</Link>  
          
    </StyledMenu> 
    </>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Menu;