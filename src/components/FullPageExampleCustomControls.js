import React from 'react'
import CustomControls from './CustomControls'
import { FullPage, Slide } from 'react-full-page';


const  FullPageExampleCustomControls = () => {
    const baseStyle = {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    };
    return (
      <FullPage controls={CustomControls}>
        <Slide
          style={{
            ...baseStyle,
            background: '#2ECC40',
          }}
        >
          <h1>Custom Controls</h1>
        </Slide>
        <Slide
          style={{
            ...baseStyle,
            background: '#0074D9',
          }}
        >
          <h1>2</h1>
        </Slide>
        <Slide
          style={{
            ...baseStyle,
            background: '#00c4ff',
          }}
        >
          <h1>3</h1>
        </Slide>
        <Slide
          style={{
            ...baseStyle,
            background: '#d52685',
          }}
        >
          <h1>4</h1>
        </Slide>
      </FullPage>
    );
  }

  export default  FullPageExampleCustomControls
  