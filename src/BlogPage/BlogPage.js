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
                </div>
            </div>
        </div>
    )
}
export default BlogPage