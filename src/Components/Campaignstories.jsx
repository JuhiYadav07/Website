import React from 'react';
import './Campaignstories.css';

const Campaignstories = () => {
  return (
    <div className='Campaign-container'>

      <div className='Campaignsection-heading'>
      <span className='dot'></span>
      <span className='line'></span>
      <h2>C A M P A I G N&nbsp;&nbsp;  S T O R I E S</h2>
      <span className='line'></span>
      <span className='dot'></span>
      </div>

      <div className='campaign-content'>

        <div>
        <p>What is Lorem ipsum?</p>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>

        <img className='campaign-content-img' src= "https://plus.unsplash.com/premium_photo-1731914220405-b643bb0f4cf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxRWlUxeFBxYlZZTXx8ZW58MHx8fHx8" alt= "room"></img>
      </div>


    </div>
  )
}

export default Campaignstories;