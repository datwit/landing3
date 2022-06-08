export function ValidateMessage(text) {
    const stringformat = /^[A-Za-zñáéíóú,.;?!]+(\s+[A-Za-zñáéíóú,.;?!]+)*$/ 
    if(text != ""){
        if(text.match(stringformat)){
           return false                                           
        }
        else{        
            return true             
        }
    }
    else{
       return true         
    }           
}
export function ValidateName(text){
    const stringformat = /^[A-Za-zñáéíóú ]+(\s+[A-Za-zñáéíóú]+)*$/ 
    if(text != ""){
        if(text.match(stringformat)){
            return false                                            
        }
        else{        
            return true             
        }
    }
    else{
        return true            
    }  
} 
export function ValidateEmail(email) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email != ""){
        if(email.match(mailformat)){
            return false                                          
        }
        else{        
            return true           
        }
    }
    else{
        return true           
    }        
}