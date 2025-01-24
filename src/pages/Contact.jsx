import {motion} from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';



const variants = {
  hidden: {opacity: 0, y: 100},
  reveal: {opacity: 1, y: 0},
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!formData) {
      setError("All fields are required")
    }
    emailjs.send(
       import.meta.env.VITE_REACT_APP_SERVICE_ID,
       import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_REACT_APP_USER_ID
      )
 
    .then((result) => {
      setSuccess('Message sent successfully!');
      setError('');
      setFormData({ name: '', email: '',subject: '', message: '' });
      console.log("Email Sent")

    })
    .catch((error) => {
      setError('Failed to send message. Please try again.');
      setSuccess('');
      console.log("Failed:", error.text)
    });
    
  }

  return (
    <section id='contact'>
    <motion.div 
      initial="hidden"
      whileInView="reveal"
      viewport={{once: true}}
      variants={variants}
      transition={{duration: 0.5, ease: "easeIn"}} 
      className='text-center justify-items-center items-center my-32'>
      <div>
      <h2 className='h2-text'>Contact Me</h2>
      <p className='font-poppins font-light text-lg mb-6'>Let's connect and create something extraordinary together.</p>
      </div>


      <form onSubmit={handleSubmit} className='flex flex-col px-4 w-[100%] lg:w-[40%]'>
        <label className='text-start font-poppins font-light text-sm mb-1'>Your Name</label>
        <input 
          value={formData.name}
          type='text'
          name='name'
          onChange={handleChange}
          className='input-text' />
        
        <label className='text-start font-poppins font-light text-sm mt-6 mb-1'>Your Email</label>
        <input 
          value={formData.email}
          type='email'
          name='email'
          onChange={handleChange}
          className='input-text' />

        <label className='text-start font-poppins font-light text-sm mt-6 mb-1'>Subject</label>
        <input 
          value={formData.subject}
          type='text'
          name='subject'
          onChange={handleChange}
          className='input-text' />

        <label className='text-start font-poppins font-light text-sm mt-6 mb-1'>Your message</label>
        <textarea 
          value={formData.message}
          type= "text"
          name='message'
          onChange={handleChange}
          className='input-text text-white' rows={6} />
        {success && <p className='text-green-500 text-xs text-start mt-2'>{success}</p>}
        {error && <p className='text-red-500 text-xs text-start mt-2'>{error}</p>}
        <button className='py-2.5 px-5 w-fit place-self-center bg-primary rounded-lg mt-10 hover:bg-secondary'>Send message</button>
      </form>
      </motion.div>
      </section>
  )
}

export default Contact