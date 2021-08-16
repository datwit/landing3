import { BulletText, BulletTextSpan} from './style'
import { FiCheck } from "react-icons/fi"

const BulletsContent = ({title}) => {
    return (
        <BulletText>
            <BulletTextSpan>                
                <FiCheck className="h-8 w-8 text-secondary2" />
            </BulletTextSpan>{title}
        </BulletText>
    )
}

export {BulletsContent}
