import {Button} from '../../styles/global'
import Link from 'next/link';


const CTA = ({buttonName, children,hhref}) => { 
     
      return (
        <div className="justify-center my-8 select-none flex">
            <Link href={hhref}>
              <Button>{buttonName}            
              {children}
              </Button>
            </Link>
        </div>    
      )    
    

}
export default CTA