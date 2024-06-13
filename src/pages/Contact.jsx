import { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Fox from '../models/Fox'

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

  //Animation for Fox 3D Model
  const [currentAnimation, setCurrentAnimation] = useState('Fox_Idle')


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setCurrentAnimation('Fox_Walk_InPlace')
  }


  const handleFocus = () => setCurrentAnimation('Fox_Idle')

  const handleBlur = () => setCurrentAnimation('Fox_Idle')

  const handleInvalid = () => setCurrentAnimation('Fox_Sit_No')

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('Fox_Run_InPlace')

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

      //Timeout to fox stop from running
      setTimeout(() => {
        setCurrentAnimation('Fox_Idle')
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      }, [3000])
    }).catch((error) => {
      setCurrentAnimation('Fox_Sit_No')
      setIsLoading(false)
      console.log(error)
      //TODO: Show error message
    })
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <h3 className='font-semibold'>What does the fox say ... 🎶</h3>

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
              onInvalid={handleInvalid}
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
              onInvalid={handleInvalid}
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
              onInvalid={handleInvalid}
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

      {/* Fox */}
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas camera={{ position: [0, 0, 5], fov:75, near:0.1, far:1000 }}>
          {/* Add lighting */}
          <directionalLight intensity={1.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.75} />

          {/* Add model */}
          <Suspense fallback={<Loader />}>
            <Fox 
              position={[0.5, -2.5, 0]}
              rotation={[12.6, -0.7, 0]}
              scale={[0.25, 0.25, 0.25]}
              currentAnimation={currentAnimation}
              speed={0.75}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact