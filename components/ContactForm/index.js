import React from 'react'
import CTA from '../Home/CTA'
import {SectionSubheader, ContentWrapper} from '../../styles/global';
import {MapWrapper, FormBlock, FormIntro, InputWrapper, FInput, TInput, FormLabels, ExplanationForm} from './style';



const ContacthtmlForm = () => {    
    return (
        <div className="container px-5 mx-auto">            
            <SectionSubheader>Commitment and creativity mark our creations. By all means, stroll along...</SectionSubheader>
            <ContentWrapper>
                <MapWrapper>
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.912127445988!2d20.40630131515939!3d44.82335478399543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6579cfc71f57%3A0xb1db7bd4fc85870e!2sBulevar%20Zorana%20%C4%90in%C4%91i%C4%87a%20116%2C%20Beograd%2011070!5e0!3m2!1sen!2srs!4v1609605711401!5m2!1sen!2srs">
                    </iframe>
                </MapWrapper>
                <FormBlock>                                          
                    <FormIntro>Our doors are always open, so feel free to drop by and spot us in our natural habitat</FormIntro>
                    <InputWrapper>
                        <FormLabels>Name</FormLabels>
                        <FInput
                            id="name"
                            type="text"
                            name="name"                           
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <FormLabels>Email</FormLabels>
                        <FInput
                            id="email"
                            type="email"
                            name="email"                            
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <FormLabels>Message</FormLabels>
                        <TInput
                            id="message"
                            name="message"                            
                        ></TInput>
                    </InputWrapper>

                    <CTA buttonName={'Send'}/>
                    
                    <ExplanationForm>Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</ExplanationForm>                    
                </FormBlock>                
            </ContentWrapper>            
        </div>
    )
}

export default ContacthtmlForm