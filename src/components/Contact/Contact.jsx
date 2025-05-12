
import React, {useRef, useState} from 'react'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();
  const [isSent , setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_ydhzdq8",//emailjs service id
      "template_7n3j2ng",//emailjs template id
      form.current,
    "a8tTPhRxlPv-Wwa9c",//emaijs public key
    )
    .then(
      () => {
        setIsSent(true);
        form.current.reset();//reset form fileds after sending
        toast.error("message send successfully", {
          position: "top-right",
          autoClose : 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover : true,
          draggable: true,
          theme: dark,

        });
      },
      (error) => {
        toast.error("error sending message.",error)
        toast.error("failed to send message. please try again", {
          position: "top-right",
          autoClose : 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover : true,
          draggable: true,
          theme: dark,

        });
      }
    )
  }
  return (
     <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7pw] lg:px-[20vw]"
    >
    
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Reach out for any opporutnities or Question
        </p>
      </div>

      {/*contact form*/}
      <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
        <h1 className='text-xl font-semibold text-white text-center'>
          Connect With Me
        </h1>

        <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'>
          <input type="email" name='user_email' placeholder='Your Email' required
          className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' 
          />

           <input type="text" name='user_name' placeholder='Your Name' required
          className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' 
          />

          <input type="text" name='user_subject' placeholder='Subject' required
          className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' 
          />

          <textarea name='message' placeholder='Message' rows="4"
          className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          >
          </textarea>

          {/*send button*/}
          <button 
          type="submit"
          className='w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition'
          >
            Send
            </button>
          </form>

      </div>

      </section>
  )
}

export default Contact ; 