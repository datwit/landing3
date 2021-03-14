import React from 'react'
import CustomControls from '../../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Tech from '../../components/Tech'
import Benefits from '../../components/Benefits'

const Team = () => {
    return (
        <FullPage controls={CustomControls}>
        <Slide>
          <Section>
            <Tech /> 
          </Section>        
        </Slide>
        <Slide>
          <Section>
            <Benefits />
          </Section>        
        </Slide>

        </FullPage>

    )
}

export default Team
