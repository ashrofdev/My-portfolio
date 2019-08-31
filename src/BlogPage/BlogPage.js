import React from 'react'
import './blog.css'
import { PageHeaderr } from '../LittleComponents/LittleComponents';

const BlogPage = () => {
    return (
        <div className="blog page">
            <PageHeaderr title='MY BLOG'/>
            <div className="bcards">
                <div className="card">
                    <div className="bimg">
                        <img src={require('./blog/b1.jpg')}/>
                    </div>
                    <div className="text">
                        <div className="card-detail">
                            <p className="date">Aug 30, 2019</p>
                            <p className="author">By Ashraf</p>
                        </div>
                        <h3>5 Things you don't know about me</h3>
                        <p className="content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Blanditiis dolor placeat et quasi aperiam earum 
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default BlogPage