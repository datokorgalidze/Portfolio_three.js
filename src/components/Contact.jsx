import React,{useState, useRef} from 'react';
import { motion } from "framer-motion";
import { styles } from '../styles';
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { slideIn } from '../untils/motion';
import SectionWrapper from './hoc/SectionWrapper';

//template_5hk492c   service_vry1wdj
// public key  s7LHYQtNMYuUXJHcU

const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:"",
  })
const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)


    emailjs.send(
    'service_vry1wdj', 
    'template_5hk492c',
     {
      form_name:form.name,
      to_name: 'Dato',
      form_email:form.email,
      to_email:'d.korgalidze@gmail.com',
      form_message:form.message,
     },
     's7LHYQtNMYuUXJHcU' 
    
    )
    .then(() => {
      setLoading(false)
      alert('Thank you,I will get back as sonn as possible')

      setForm({
        name:"",
        email:"",
        message:"",
      })
    }),(error) => {
      setLoading(false)
      console.log(error)
      alert('Something went wrong')
    }
}

const handleChange =(e) =>{
  const { name, value } = e.target;

  setForm({
    ...form,
    [name]: value,
  });
}

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
       <motion.div
         variants={slideIn("left", "tween", 0.2, 1)}
         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
       > 
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

       <form
       className='mt-12 flex flex-col gap-8'
       ref = {formRef}
       onSubmit={handleSubmit}
       >
        <label className='flex flex-col'>
           <span className='text-white mb-4 font-medium'>
             Your Name
           </span>
           <input 
            type='text'
            name='name'
            onChange={handleChange}
            value={form.name}
            placeholder="What's your name?"
            className='bg-tertiary py-4 px-6
             placeholder:text-secondary text-white 
             rounded-lg outline-none border-none 
             font-medium'
           />
        </label>

        <label className='flex flex-col'>
           <span className='text-white mb-4 font-medium'>
             Your Email
           </span>
           <input 
            type='email'
            name='email'
            onChange={handleChange}
            value={form.email}
            placeholder="What's your name?"
            className='bg-tertiary py-4 px-6
             placeholder:text-secondary text-white 
             rounded-lg outline-none border-none 
             font-medium'
           />
        </label>

        <label className='flex flex-col'>
           <span className='text-white mb-4 font-medium'>
             Your Message
           </span>
           <textarea
            name='message'
            rows='7'
            onChange={handleChange}
            value={form.message}
            placeholder="What do you whant to say?"
            className='bg-tertiary py-4 px-6
             placeholder:text-secondary text-white 
             rounded-lg outline-none border-none 
             font-medium'
           />
        </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
             >
            {loading ? "Sending..." : "Send"}
          </button>
       </form>
       </motion.div>

       <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
       >
        <EarthCanvas/>
       </motion.div>
    </div>
  )
}

export default SectionWrapper (Contact, "contact")