import {useState} from 'react'

const AccordionItem = ({ question, answer}) => {

    const [opened, setOpened]=useState(false)
    
    return (
        <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { setOpened( !opened ) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
            <h3 {...{ className: 'accordion-item__title' }}>
            {question}
            </h3>          
            <svg {...{ className: 'accordion-item__icon' }}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>         
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {answer}
              </p>
            </div>
          </div>
      </div>
    )
}

export default AccordionItem
