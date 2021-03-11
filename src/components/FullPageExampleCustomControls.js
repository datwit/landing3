import React from 'react'
import CustomControls from './CustomControls'
import { FullPage, Slide } from 'react-full-page';
import Section from './Section';


const  FullPageExampleCustomControls = () => {
    const baseStyle = {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    };
    return (
      <FullPage controls={CustomControls}>
        <Slide>
         <Section  name = "Section 1"/>        
        </Slide>
        <Slide>
        <Section  name = "Section 2"/> 
        </Slide>
        <Slide>
        <Section  name = "Section 3"/> 
        </Slide>        
      </FullPage>
    );
  }

  export default  FullPageExampleCustomControls
  