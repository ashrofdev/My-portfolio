import React from 'react'
import './client.css'

const ClientView = () => {
    return (
        <div className="client">
            <div className="person">
                <div className="img">
                    <img alt=""src={require('./testmonial/t1.png')} />
                </div>
                <div className="complement">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque officiis repellendus voluptas exercitationem numquam 
                    modi? Quisquam aliquid consequatur ipsa adipisci.
                </div>
                <div className="name">
                    JOHN DOE
                </div>
                <div className="job">
                    BUssiness man
                </div>
            </div>
        </div>
    )
}
export default ClientView