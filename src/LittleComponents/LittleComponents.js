import React from 'react'
import './lc.css'

export const Btn = ({text}) => {
    return <button className="btn">{text}</button>
}

export const Heading = ({text}) => {
    return <h2 className="heading">{text}</h2>
}
export const Logo = ({onPageChange}) => {
    return (
        <div className="logo" onClick={()=> onPageChange('home')}>
            <img src={require('./logo/logo2.png')} />
        </div>
    )
}

export const PageHeaderr = ({title}) => {
    return (
        <header>
            <h1 className="heading-main">{title}</h1>
        </header>
    )
}

export const About = () => {
    return (
        <div className="details">
            <div className="text">
                <p>Lore Lorem ipsum dolor sit amet consectetur adipisicing elit.o 
                Expedita, impedit voluptatibus, optio aliquam cumque exercitationem volupta
                 quos iusto ea numquam porro? Vitae dolore eveniet animi quos saepe
                  mollitia cumque.</p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Excepturi ratione porro unde architecto, minima cupiditate aliquam magnam
                 voluptates. Debitis quasi quas nostrum vitae inventore
                  architecto pariatur ex enim repellat aut.
                </p>
                <Btn text={'DOWNLOAD CV'} />
            </div>
            <div className="abilities">
                <div className="block">
                    <div className="title">UI&UX DESIGN</div>
                    <div className="bar">
                        <div className="grade" style={{width: '85%'}}>
                            <div className="percent">85%</div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="title">WEB DESIGN</div>
                    <div className="bar">
                        <div className="grade" style={{width: '90%'}}>
                            <div className="percent">90%</div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="title">APP DESIGN</div>
                    <div className="bar">
                        <div className="grade" style={{width: '75%'}}>
                            <div className="percent">75%</div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="title">SKETCH DESIGN</div>
                    <div className="bar">
                        <div className="grade" style={{width: '68%'}}>
                            <div className="percent">68%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const PageHeader = () => {
    return (
        <div className="p-header">
            <div className="cont">
                <div className="top">
                    <img src={require('./logo/logo2.png')} />
                </div>
            </div>
        </div>
    )
}


const scroll = () => {
    window.scroll(0, -1000)
}

export const ScrollUp = () => {
    return (
        <div className="scroller" onClick={scroll}> >> </div>
    )
}
export const Brand = () => {
    return (
        <div className="brand">
            <div className="b">
                <img src={require('./brand/b1.png')}/>
            </div>
            <div className="b">
                <img src={require('./brand/b2.png')}/>
            </div>
            <div className="b">
                <img src={require('./brand/b3.png')}/>
            </div>
            <div className="b">
                <img src={require('./brand/b4.png')}/>
            </div>
            <div className="b">
                <img src={require('./brand/b5.png')}/>
            </div>
        </div>
    )
}

export const Person1 = () => {
    return (
        <div className="person">
            <div className="img">
                <img alt="" src={require('./testmonial/t1.png')} />
            </div>
            <p className="complement">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque officiis repellendus voluptas exercitationem numquam 
                modi? Quisquam aliquid consequatur ipsa adipisci.
            </p>
            <div className="name">
                JOHN DOE
            </div>
            <div className="job">
                BUssiness man
            </div>
        </div>
    )
}
export const Person2 = () => {
    return (
        <div className="person">
            <div className="img">
                <img alt="" src={require('./testmonial/t2.png')} />
            </div>
            <p className="complement">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque officiis repellendus voluptas exercitationem numquam 
                modi? Quisquam aliquid consequatur ipsa adipisci.
            </p>
            <div className="name">
                Daniel Wilson
            </div>
            <div className="job">
                Developer
            </div>
        </div>
    )
}
export const Person3 = () => {
    return (
        <div className="person">
            <div className="img">
                <img alt="" src={require('./testmonial/t3.jpeg')} />
            </div>
            <p className="complement">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque officiis repellendus voluptas exercitationem numquam 
                modi? Quisquam aliquid consequatur ipsa adipisci.
            </p>
            <div className="name">
                Samir Khan
            </div>
            <div className="job">
                Art work
            </div>
        </div>
    )
}
