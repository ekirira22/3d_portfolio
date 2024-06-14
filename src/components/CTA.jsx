import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Have a project in mind? <br className='sm:block hidden' /></p>
        Let's build something together! or hire me!
        <Link to='/contact' className='btn'>Contact</Link>
    </section>
  )
}

export default CTA