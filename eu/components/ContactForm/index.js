
import {SectionSubheader, ContentWrapper, Button} from 'styles/global'
import {ConnectionWarning, Counter, MapWrapper, FormBlock, FormIntro, InputWrapper, FInput, TInput, FormLabels, ExplanationForm} from './style'
import { FiSend, FiAlertTriangle} from 'react-icons/fi'
import {useState, useEffect} from 'react'
import {Loading} from './Loading'
import axios from 'axios'
import {AlertMessage} from './AlertMessage'
import data from './messages.json'
import { ValidateMessage, ValidateName, ValidateEmail } from './Validations'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const SUFFIX = process.env.NEXT_PUBLIC_FORM_SUFFIX

const ContacthtmlForm = ({classes}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [count, setCount] = useState(0)   
    const [alertMessage, setAlertMessage] = useState('')
    const [conStatus, setConStatus] = useState(false)
    // const [validate, setValidate] = useState(false)
    const [formValues,setFormValues] = useState({
        name: '',
        email: '',
        message: '',
        [`${SUFFIX}email`]:"",
        [`${SUFFIX}name`]:"", 
        [`${SUFFIX}message`]:"",
        fax: false,
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
        
        //counter
        name===`${SUFFIX}message` ? setCount(value.length) : null 

        //validations
        if (name===`${SUFFIX}name`) {            
            if (ValidateName(value)=== false) { 
                if (formValues[`${SUFFIX}email`] === "" || ValidateEmail(formValues[`${SUFFIX}email`]) === false){ 
                    setShowMessage(false) 
                }
                else {
                    setAlertMessage(2)                                      
                    setShowMessage(true)
                }
            } else {                                     
                setAlertMessage(3)                                   
                setShowMessage(true) 
            }
        } 
        else if (name===`${SUFFIX}email` ) {            
            if (ValidateEmail(value)=== false) {    
                if (formValues[`${SUFFIX}name`] == "" || ValidateName(formValues[`${SUFFIX}name`]) === false){ 
                    setShowMessage(false) 
                }
                else {
                    setAlertMessage(3)                                      
                    setShowMessage(true)
                }
            } else {                                    
                setAlertMessage(2)                                      
                setShowMessage(true) 
            }
        }
    }    

    const handleSubmit = (event) =>{
        if(formValues[`${SUFFIX}name`] !='' & formValues[`${SUFFIX}email`] !='' & formValues[`${SUFFIX}message`] !=''){
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
                        message: '',
                        [`${SUFFIX}email`]:"",
                        [`${SUFFIX}name`]:"", 
                        [`${SUFFIX}message`]:"", 
                        fax: false
                    })                                  
                    setCount(0)                    
                    switch (response.status) {
                        case 201:
                            setAlertMessage(0)                                      
                            setShowMessage(true)
                            break;                        
                        //bad request     
                        default:
                            setAlertMessage(4)                                      
                            setShowMessage(true)
                            break;
                    }                            
                } catch (e) {                                             
                    setIsLoading(false), 
                    console.log(e);
                    setAlertMessage(5)                                      
                    setShowMessage(true)       
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
            <ContentWrapper>
                <div className='w-full md:w-1/2'>
                    <a href='https://www.google.com/maps/place/Street+Jorge+Gil+105,+Panama+City,+Panama' target="_blank" rel="noopener noreferrer">
                        <img 
                            src="/images/map.jpg"
                            alt="Picture of the address"
                            />
                    </a>
                </div>
                <FormBlock>   
                    <FormIntro>We welcome your questions & ideas. Fill out the form and we'll be in touch as soon as possible!</FormIntro>              
                    {
                        conStatus
                        ? 
                        <>
                            <InputWrapper>
                                <FormLabels>Name</FormLabels>
                                <FInput
                                    id="name"
                                    type="text"
                                    name={`name`}
                                    maxLength="80"
                                    minLength="3"
                                    placeholder="Your name..."
                                    value={formValues.name}
                                    onChange={handleChange}
                                    className="absolute"
                                    style={{left:"3000px"}}
                                    autoComplete="off"
                                    tabIndex="-1"
                                />
                                <FInput
                                    id={`${SUFFIX}name`}
                                    type="text"
                                    name={`${SUFFIX}name`}
                                    maxLength="80"
                                    minLength="3"
                                    placeholder="Your name..."
                                    value={formValues[`${SUFFIX}name`]}
                                    onChange={handleChange}
                                    error={showMessage && alertMessage == 3}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <FormLabels>Email</FormLabels>
                                <FInput
                                    id={`email`}
                                    type="email"
                                    name={`email`}
                                    maxLength="50"
                                    minLength="5"
                                    placeholder="Enter a valid email address"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    error={showMessage}
                                    className="absolute"
                                    style={{left:"3000px"}}
                                    autoComplete="off"
                                    tabIndex="-1"
                                />
                                <FInput
                                    id={`${SUFFIX}email`}
                                    type="email"
                                    name={`${SUFFIX}email`}
                                    maxLength="50"
                                    minLength="5"
                                    placeholder="Enter a valid email address"
                                    value={formValues[`${SUFFIX}email`]}
                                    onChange={handleChange}
                                    error={showMessage && alertMessage == 2}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <FormLabels>Message</FormLabels>
                                <TInput
                                    id={`message`}
                                    name={`message`}
                                    type="text"
                                    maxLength="500"
                                    minLength="10"                            
                                    placeholder="I'm interested in..."
                                    value={formValues.message}
                                    onChange={handleChange}
                                    error={showMessage}
                                    className="absolute"
                                    style={{left:"3000px"}}
                                    autoComplete="off"
                                    tabIndex="-1"
                                ></TInput>
                                <TInput
                                    id={`${SUFFIX}message`}
                                    name={`${SUFFIX}message`}
                                    type="text"
                                    maxLength="500"
                                    minLength="10"                            
                                    placeholder="I'm interested in..."
                                    value={formValues[`${SUFFIX}message`]}
                                    onChange={handleChange}
                                    error={showMessage && alertMessage == 1 && formValues[`${SUFFIX}message`] == ""}
                                ></TInput>
                                <Counter>{count}/500</Counter>
                            </InputWrapper>
                            <input 
                                type="checkbox" 
                                name="contact_me_by_fax_only"
                                className="absolute -top-full" 
                                autoComplete="off"
                                tabIndex="-1"
                                onChange={(event)=>setFormValues({...formValues,fax:event.target.checked})}
                                >
                            </input>
                            <div className="flex justify-center items-center">
                                <Button type="submit" onClick={(event)=>!showMessage && !formValues.fax && handleSubmit(event)} className={formValues[`${SUFFIX}name`].trim() === "" || formValues[`${SUFFIX}email`].trim() === "" || formValues[`${SUFFIX}message`].trim() === "" || showMessage ? 'submit-button' : ''}>Send
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
                            <div className="md:absolute md:transform md:-translate-y-2/4 md:top-2/4">
                                <FiAlertTriangle/>
                                <p>Our contact form is temporarily unavailable. Please, come back later.</p>
                            </div>
                           
                        </ConnectionWarning>  
                    }                                  
                </FormBlock>
            </ContentWrapper>
        </div>
    )
}

export {ContacthtmlForm}
