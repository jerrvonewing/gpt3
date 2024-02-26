import React from 'react'

import possibilityImage from '../../assets/possibility.png'
import './Possibility.css';

const Possibility = () => {
  const contentSubHeader = 'Request Early Access to Get Started'
  const contentHeader = 'The possibilities are beyond your imagination'
  const contentParagraph = 'Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.'
  const contentEndingText = 'Request Early Access to Get Started'

  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>{contentSubHeader}</h4>
        <h1 className='gradient__text'>{contentHeader}</h1>
        <p>{contentParagraph}</p>
        <h4>{contentEndingText}</h4>
      </div>
    </div>
  )
}

export default Possibility