
import {SectionSubheader, ContentWrapper, Button} from 'styles/global'
import {ConnectionWarning, Counter, MapWrapper, FormBlock, FormIntro, InputWrapper, FInput, TInput, FormLabels, ExplanationForm} from './style'
import { FiSend, FiAlertTriangle} from 'react-icons/fi'
import {useState, useEffect} from 'react'
import {Loading} from './Loading'
import axios from 'axios'
import {AlertMessage} from './AlertMessage'
import data from './messajes.json'

const API_URL = process.env.NEXT_PUBLIC_API_URL


const ContacthtmlForm = ({classes}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [count, setCount] = useState(0)   
    const [alertMessage, setAlertMessage] = useState('')
    const [conStatus, setConStatus] = useState(false)
    const [formValues,setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    })
    
    //checking connection to the endpoint
    useEffect(() => {
        async function testConnection () {
            try {
                const response = await axios({
                    url: API_URL,
                    method: 'GET'                                    
                })                                          
                
                if(response.status===200){  
                    setConStatus(true)                    
                }                
                else{
                    setConStatus(false)
                } 
                console.log(conStatus)                            
            } catch (e) {
                console.log(e);
                setConStatus(false)        
            }
        }
        testConnection ()
    }, [])

    const handleChange = (event) => {
        const {name, value} = event.target 
        setFormValues({...formValues,[name]:value}) 
        
        name==="message" ? setCount(value.length) : null             
    }
    
    const handleSubmit = (event) =>{
        if(formValues.name !='' & formValues.email !='' & formValues.message !=''){
            event.preventDefault()
            setIsLoading(true)                      
            async function sendMessage (messageData) {
                try {
                    const response = await axios({
                        url: API_URL,
                        method: 'POST',
                        data: messageData,                    
                    })                                                                   
                    setIsLoading(false), 
                    setFormValues({
                        name: '',
                        email: '',
                        message: '' 
                    })                                  
                    // setCount(0) 
                    //space for handling responses                                  
                    if(response.status===201){  
                        setAlertMessage(0)                                      
                        setShowMessage(true)
                        setTimeout(()=>{
                            setShowMessage(false) 
                        }, 4000) 
                    }                             
                } catch (e) {
                    console.log(e);        
                }                
            }       
            sendMessage(formValues)
                 
            }
        else{
            setAlertMessage(1)                                      
            setShowMessage(true)
            setTimeout(()=>{
                setShowMessage(false) 
            }, 4000) 
        }                                  
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
                    {
                        conStatus
                        ? 
                        <>
                            <FormIntro>Our doors are always open, so feel free to drop by and spot us in our natural habitat.</FormIntro>
                            <InputWrapper>
                            <FormLabels>Name</FormLabels>
                            <FInput
                                id="name"
                                type="text"
                                name="name"
                                maxLength="50"
                                placeholder="Your name..."
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
                                    maxLength="50"
                                    placeholder="Enter a valid email address"
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <FormLabels>Message</FormLabels>
                                <TInput
                                    id="message"
                                    name="message"
                                    type="text"
                                    maxLength="200"                            
                                    placeholder="I'm interested in..."
                                    value={formValues.message}
                                    onChange={handleChange}
                                ></TInput>
                                <Counter>{count}/200</Counter>
                            </InputWrapper>
                            <div className="flex justify-center items-center">
                                <Button type="submit" onClick={handleSubmit} className={formValues.name.length==0 || formValues.email.length==0 || formValues.message.length==0 ? 'submit-button' : ''}>Send
                                <FiSend className="h-6 w-6 ml-2"/>
                                </Button>
                                {
                                    !isLoading
                                    ? ''                                                        
                                    : <Loading />                                               
                                }
                            </div>
                            {
                            showMessage
                            ? <AlertMessage text={data[alertMessage].text} style={data[alertMessage].style}/>                
                            : <ExplanationForm>Send us your message and our team will contact you as soon as possible</ExplanationForm>
                            }     
                        </>
                        :
                        <ConnectionWarning>
                            <FiAlertTriangle/>
                            <p>Our contact form is temporarily unavailable. We hope you can comeback later</p>
                        </ConnectionWarning>  
                    }                                  
                </FormBlock>
            </ContentWrapper>
        </div>
    )
}

export {ContacthtmlForm}
