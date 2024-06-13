import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// Contact component
const Contact = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // State Loader
  const [isLoading, setIsLoading] = useState(false)


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleFocus = (e) => {
    e.target.placeholder = ''
  }

  const handleBlur = (e) => {
    e.target.placeholder = e.target.name
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Send form data to server or perform any other action
    //npm install @emailjs/browser  for sending emails

    emailjs.send(
      //Insert your emailjs creds
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        to_name: 'Eric',
        from_email: formData.email,
        to_email: 'ekirira22@gmail.com',
        message: formData.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false)
      //TODO: Show success message

      // TODO: Hide an alert

      //Clear Form
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    }).catch((error) => {
      setIsLoading(false)
      console.log(error)
      //TODO: Show error message
    })
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          {/* Name input */}
          <label className='text-black-500 font-semibold'>
            Name
            <input 
              type='text' 
              name='name' 
              placeholder='Enter your name' 
              className='input' 
              required 
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          {/* Email input */}
          <label className='text-black-500 font-semibold'>
            Email
            <input 
              type='email' 
              name='email' 
              placeholder='eric@gmail.com' 
              className='input' 
              required 
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          {/* Message input */}
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea 
              name='message' 
              rows={4}
              placeholder='Let me know how I can help you!' 
              className='textarea' 
              required 
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button 
            type='submit' 
            className='btn' 
            disabled={isLoading}
            onFocus={handleFocus} 
            onBlur={handleBlur}>
              {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact