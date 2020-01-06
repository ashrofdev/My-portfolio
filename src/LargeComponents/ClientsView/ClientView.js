import React from 'react'
import './client.css'

const ClientView = ({person}) => {
   
    return (
        <div className="client">
            {person}
        </div>
    )
}
export default ClientView