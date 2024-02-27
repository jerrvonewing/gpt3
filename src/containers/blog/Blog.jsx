import React from 'react'

import { Article } from '../../components';
import {blogs} from './imports';
import './Blog.css';


const Blog = () => {

  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
        <div className='gpt3__blog-container'>
          <div className='gpt3__blog-container_groupA'>
              <Article imgUrl={blogs[0].imgUrl} date={blogs[0].date} title={blogs[0].title}/>
          </div>
          <div className='gpt3__blog-container_groupB'>
            {blogs.slice(1).map((blog, index) => (
                <Article key={index} imgUrl={blog.imgUrl} date={blog.date} title={blog.title}/>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog