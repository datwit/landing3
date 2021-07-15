import {Button} from 'styles/global'
import Link from 'next/link';


const CTA = ({buttonName, children,hhref}) => {

      return (
        <div className="flex justify-center my-6 select-none">
            <Link href={hhref}>
              <Button>{buttonName}
              {children}
              </Button>
            </Link>
        </div>
      )


}
export default CTA