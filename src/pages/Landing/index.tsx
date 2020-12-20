import React from 'react';

import logoImg from '../../assets/logo.svg';


import instagramLogo from '../../assets/instagram.svg';
import linkedinLogo from '../../assets/linkedin.svg';
import twitterLogo from '../../assets/twitter.svg';
import coffeeImg from '../../assets/copo.svg';

import { Container, Navbar, Content } from './style';

const Landing: React.FC = () => {
  return(
   <Container>
      <Navbar>
        <a href="/"><img src={logoImg} alt="Logo"/></a>
        <li><a href="menu">menu</a></li>
        <li><a href="contact">contact</a></li>
        <li><a href="find us">find us</a></li>
      </Navbar>
      <Content>
        <div>
          <p>The best way to get your coffee without leaving the comfort of your house </p>
          <button>make your order</button>
          <a href=""><img src={instagramLogo}/></a>
          <a href=""><img src={linkedinLogo}/></a>
          <a href=""><img src={twitterLogo}/></a>
        </div>

        <div>
          <img src={coffeeImg} alt="Coffee Glass"/>
        </div>
        
      </Content>


    </Container> 
  );
};

export default Landing;