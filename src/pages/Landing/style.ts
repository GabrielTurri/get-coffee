import styled from 'styled-components';


export const Container = styled.div`
  height: 100vh;

  align-items: stretch;

  background-color: #F5F5F5;
`;

export const Navbar = styled.ul`
  margin: 0;
  padding: 0;
  position: sticky;

  display: flex;
  overflow: hidden;
  

  align-items: center;

  list-style-type: none;
  
  background-color: #fff;
  box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.2);

  img{
    height: 30px;
    margin-left: 130px;
    margin-right: 50vw;
  }

  li{
    
  }

  li a{
    text-decoration: none;
    color: #242424;


    display: inline-block;
    margin: 20px 10px;
    
    padding: 2px;
    border-radius: 5px;    
  }
  li a:hover{
    background-color: #CDCBCB;    
    transition: 0.4s;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  align-items: center;


  div{
    margin-top: 50px;
    text-align: center;
    
  }
  p{
    font-size: 28px;

    margin: auto;
    width: 70%;
    text-align: left;

  }

  

  button{
    background-color: #FCA60F;
    color: #fff;

    border: none;
    border-radius: 4px;

    padding: 8px;
    margin: 10px;
    margin-top: 70px;
    width: 200px;

    
  }


`;