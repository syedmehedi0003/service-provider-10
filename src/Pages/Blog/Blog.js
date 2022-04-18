import React from 'react';
import './Blog.css'
import Myimg from '../../images/Myimg/myimg1.jpg';

const Blog = () => {
    return (
        <div className='text-center'>
            <img src={Myimg} alt="" />
            <h4>Syed Mehedi Hasan</h4>
            <p></p>
        </div>
    );
};

export default Blog;