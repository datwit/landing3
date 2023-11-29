import React from 'react'
import {FiAlertCircle } from 'react-icons/fi'

const AlertMessage = ({text,style}) => {
    return (
        <p className={style}><FiAlertCircle className="text-lg text-secondary2 mr-2"/>{text}</p>
    )
}

export {AlertMessage}
