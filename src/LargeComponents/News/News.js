import React from 'react'
import './news.css'
import {Heading} from '../../LittleComponents/LittleComponents'

const NewsLetter = () => {
    return (
        <div className="news">
            <Heading text={'SUBSCRIBE NEWS LETTER'} />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque officiis repellendus voluptas exercitationem numquam 
                modi.
            </p>
            <form>
                <input placeholder="Your email address..."/>
                <button>
                    <i className="fa fa-paper-plane"></i>
                </button>
            </form>
        </div>
    )
}
export default NewsLetter