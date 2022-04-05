import React from 'react';
import './Blog.css';

import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports.js'

const date = 'Sep 26, 2021';
const titleText = 'GPT3 and Open AI are the future. Let us explore how it is?'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening,</h1>
        <h1 className="gradient__text">We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__first">
          <Article url={blog01} date={date} title={titleText}/>
        </div>
        <div className="gpt3__blog-container__others">
          <Article url={blog02} date={date} title={titleText}/>
          <Article url={blog03} date={date} title={titleText}/>
          <Article url={blog04} date={date} title={titleText}/>
          <Article url={blog05} date={date} title={titleText}/>
        </div>
      </div>
    </div>
  )
}

export default Blog;
