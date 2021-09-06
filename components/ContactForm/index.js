
import {SectionSubheader, ContentWrapper, Button} from 'styles/global'
import {MapWrapper, FormBlock, FormIntro, InputWrapper, FInput, TInput, FormLabels, ExplanationForm} from './style'
import { FiSend } from 'react-icons/fi'
import {useState} from 'react'

const ContacthtmlForm = ({classes}) => {
    const [formValues,setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target        

        setFormValues({...formValues,[name]:value})
    }

    return (
        <div className={classes}>
            <SectionSubheader>We're always in for great adventures. Tell us all about this exciting idea. Fill in the form below so we can reach you!</SectionSubheader>
            <ContentWrapper>
                <MapWrapper>
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.912127445988!2d20.40630131515939!3d44.82335478399543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6579cfc71f57%3A0xb1db7bd4fc85870e!2sBulevar%20Zorana%20%C4%90in%C4%91i%C4%87a%20116%2C%20Beograd%2011070!5e0!3m2!1sen!2srs!4v1609605711401!5m2!1sen!2srs">
                    </iframe>
                </MapWrapper>
                <FormBlock>
                    <FormIntro>Our doors are always open, so feel free to drop by and spot us in our natural habitat.</FormIntro>
                    <InputWrapper>
                        <FormLabels>Your name</FormLabels>
                        <FInput
                            id="name"
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <FormLabels>Email</FormLabels>
                        <FInput
                            id="email"
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <FormLabels>I'm interested in...</FormLabels>
                        <TInput
                            id="message"
                            name="message"
                            type="text"
                            value={formValues.message}
                            onChange={handleChange}
                        ></TInput>
                    </InputWrapper>
                    <div className="flex justify-center">
                        <Button>Send
                           <FiSend className="h-6 w-6 ml-2"/>
                        </Button>
                    </div>
                    <ExplanationForm>Send us your message and our team will contact you as soon as possible</ExplanationForm>
                </FormBlock>
            </ContentWrapper>
        </div>
    )
}

export {ContacthtmlForm}
