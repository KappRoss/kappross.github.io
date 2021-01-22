import styled from 'styled-components';

export const StyledMenu = styled.nav`
  

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #0b2a3d;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  
  transition-timing-function: ease;
  transition-duration: .4s;

  @media (min-width: 830px) {
    
      display: none;
    
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      padding: 0;
      background-color: #0b2a3d;
    }
  a:first-child{
    top: 0;
    left: 50%;
    position: fixed;
    transform: translate(-45%, -25%);
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;