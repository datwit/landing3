import React from 'react'
import Link from 'next/link' 
import { Button } from '../../styles/global'
import { FiCheckCircle } from "react-icons/fi"

const SelectionButton = ({hhref}) => {
    return (
        <Link href={hhref}>
            <Button>Confirm your choice
                <FiCheckCircle className="h-6 w-6 text-white ml-2" />            
            </Button>
        </Link>
    )
}

export {SelectionButton}
