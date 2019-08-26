import React from 'react'


const onClick = () => {
    console.log(2414415)
    document.querySelector('.nav .list').classList.toggle("show")
    document.querySelector('.nav-btn').classList.toggle("n-btn")
}


const NavBar = ({onPageChange}) => {
    return (
        <div className="nav">
            <ul className="list">
                <li className="item"><button onClick={()=> onPageChange('home')} >HOME</button></li>
                <li className="item"><button onClick={()=> onPageChange('about')}>ABOUT</button></li>
                <li className="item"><button onClick={()=> onPageChange('blog')}>BLOG</button></li>
                <li className="item"><button onClick={()=> onPageChange('portfolio')}>PORTFOLIO</button></li>
                <li className="item"><button onClick={()=> onPageChange('services')}>SERVICES</button></li>
                <li className="item"><button onClick={()=> onPageChange('contact')}>CONTACT</button></li>
            </ul>
            <button onClick={onClick} className="nav-btn"></button>
        </div>
    )
}
export default NavBar