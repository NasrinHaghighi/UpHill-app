import React,{useEffect,useState} from 'react';
//import Header from './Header/Header';

import {MainContainer, InnerContainer, Main} from './styles';




const Layout =({children}) =>{ 
    
   

    return(
        <>
        <MainContainer>
      <InnerContainer>
 
             {/* <Header />  */}
        <Main>{children}</Main>
    
      </InnerContainer>
      </MainContainer>
        </>
    )
}

export default Layout;