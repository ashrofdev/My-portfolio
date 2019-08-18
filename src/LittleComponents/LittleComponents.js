import React from 'react'
import './lc.css'

export const Btn = ({text}) => {
    return <button className="btn">{text}</button>
}

export const Heading = ({text}) => {
    return <h2 className="heading">{text}</h2>
}
export const Logo = () => {
    return (
        <div className="logo">
            <img src={require('./logo/logo2.png')} />
        </div>
    )
}

////// HWADER ANIMATION //////////
export let ani = 'DESIGNER'
setInterval(() => {
    setTimeout(()=>{
        ani = 'D_'
        document.querySelector('.ani').textContent=ani
        setTimeout(()=>{
            ani = 'DE_'
            document.querySelector('.ani').textContent=ani
            setTimeout(()=>{
                ani = 'DEV_'
                document.querySelector('.ani').textContent=ani
                setTimeout(()=>{
                    ani = 'DEVE_'
                    document.querySelector('.ani').textContent=ani
                    setTimeout(()=>{
                        ani = 'DEVEL_'
                        document.querySelector('.ani').textContent=ani
                        setTimeout(()=>{
                            ani = 'DEVELO_'
                            document.querySelector('.ani').textContent=ani
                            setTimeout(()=>{
                                ani = 'DEVELOP_'
                                document.querySelector('.ani').textContent=ani
                                setTimeout(()=>{
                                    ani = 'DEVELOPE_'
                                    document.querySelector('.ani').textContent=ani
                                    setTimeout(()=>{
                                        ani = 'DEVELOPER_'
                                        document.querySelector('.ani').textContent=ani
                                        ////// OTHER 
                                        setTimeout(()=>{
                                            ani = 'D_'
                                            document.querySelector('.ani').textContent=ani
                                            setTimeout(()=>{
                                                ani = 'DE_'
                                                document.querySelector('.ani').textContent=ani
                                                setTimeout(()=>{
                                                    ani = 'DES_'
                                                    document.querySelector('.ani').textContent=ani
                                                    setTimeout(()=>{
                                                        ani = 'DESI_'
                                                        document.querySelector('.ani').textContent=ani
                                                        setTimeout(()=>{
                                                            ani = 'DESIG_'
                                                            document.querySelector('.ani').textContent=ani
                                                            setTimeout(()=>{
                                                                ani = 'DESIGN_'
                                                                document.querySelector('.ani').textContent=ani
                                                                setTimeout(()=>{
                                                                    ani = 'DESIGNE_'
                                                                    document.querySelector('.ani').textContent=ani
                                                                    setTimeout(()=>{
                                                                        ani = 'DESIGNER_'
                                                                        document.querySelector('.ani').textContent=ani
                                                                    },300)
                                                                },300)
                                                            },300)
                                                        },300)
                                                    },300)
                                                },300)
                                            },300)
                                        },1000)
                                    },300)
                                },300)
                            },300)
                        },300)
                    },300)
                },300)
            },300)
        },300)
    },300)
}, 7000);