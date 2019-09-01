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


////// HEADER ANIMATION //////////
// export let ani = 'DESIGNER'
// setInterval(() => {
//     setTimeout(()=>{
//         ani = 'D_'
//         document.querySelector('.ani').textContent=ani
//         setTimeout(()=>{
//             ani = 'DE_'
//             document.querySelector('.ani').textContent=ani
//             setTimeout(()=>{
//                 ani = 'DEV_'
//                 document.querySelector('.ani').textContent=ani
//                 setTimeout(()=>{
//                     ani = 'DEVE_'
//                     document.querySelector('.ani').textContent=ani
//                     setTimeout(()=>{
//                         ani = 'DEVEL_'
//                         document.querySelector('.ani').textContent=ani
//                         setTimeout(()=>{
//                             ani = 'DEVELO_'
//                             document.querySelector('.ani').textContent=ani
//                             setTimeout(()=>{
//                                 ani = 'DEVELOP_'
//                                 document.querySelector('.ani').textContent=ani
//                                 setTimeout(()=>{
//                                     ani = 'DEVELOPE_'
//                                     document.querySelector('.ani').textContent=ani
//                                     setTimeout(()=>{
//                                         ani = 'DEVELOPER_'
//                                         document.querySelector('.ani').textContent=ani
//                                         ////// OTHER 
//                                         setTimeout(()=>{
//                                             ani = 'D_'
//                                             document.querySelector('.ani').textContent=ani
//                                             setTimeout(()=>{
//                                                 ani = 'DE_'
//                                                 document.querySelector('.ani').textContent=ani
//                                                 setTimeout(()=>{
//                                                     ani = 'DES_'
//                                                     document.querySelector('.ani').textContent=ani
//                                                     setTimeout(()=>{
//                                                         ani = 'DESI_'
//                                                         document.querySelector('.ani').textContent=ani
//                                                         setTimeout(()=>{
//                                                             ani = 'DESIG_'
//                                                             document.querySelector('.ani').textContent=ani
//                                                             setTimeout(()=>{
//                                                                 ani = 'DESIGN_'
//                                                                 document.querySelector('.ani').textContent=ani
//                                                                 setTimeout(()=>{
//                                                                     ani = 'DESIGNE_'
//                                                                     document.querySelector('.ani').textContent=ani
//                                                                     setTimeout(()=>{
//                                                                         ani = 'DESIGNER_'
//                                                                         document.querySelector('.ani').textContent=ani
//                                                                     },300)
//                                                                 },300)
//                                                             },300)
//                                                         },300)
//                                                     },300)
//                                                 },300)
//                                             },300)
//                                         },1000)
//                                     },300)
//                                 },300)
//                             },300)
//                         },300)
//                     },300)
//                 },300)
//             },300)
//         },300)
//     },300)
// }, 7000);