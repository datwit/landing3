import { BulletText, BulletTextSpan} from './style';

const BulletsContent = ({title}) => {
    return (
        <BulletText>
            <BulletTextSpan>
            <svg className="h-8 w-8 text-secondary2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="20 6 9 17 4 12" /></svg>
            </BulletTextSpan>{title}
        </BulletText>
    )
}

export {BulletsContent}
