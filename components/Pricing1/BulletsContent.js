import { BulletText, BulletTextSpan} from './style'
import { FiCheck } from "react-icons/fi"

const BulletsContent = ({title}) => {
    return (
        <BulletText>
            <BulletTextSpan>                
                <FiCheck className="h-6 w-6 text-secondary2" />
            </BulletTextSpan>{title}
        </BulletText>
    )
}

export {BulletsContent}
