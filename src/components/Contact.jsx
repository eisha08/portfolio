import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import gif from '../assets/gif.gif'

export const Contact = ({theme}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kdol73s', 'template_u9nccdr', form.current, 'bj8FpBhCfIKssopiK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div id='form-page' className="form  min-h-screen flex items-center justify-center py-12">
  <div className={`w-full max-w-4xl mx-auto ${theme==='dark'? ' bg-gray-800':'bg-purple-300'} rounded-lg shadow-lg p-8`}>
    <div className={`font-bold text-4xl text-center py-8 font-opensans ${theme==='dark'?'text-pink-200':'text-purple-700'} `}>
      Let's Connect!!
    </div>
    <div className="flex flex-col lg:flex-row">
      <div className="form-left lg:w-1/2 flex items-center justify-center">
        <img className="contactgif max-w-xs" src={gif} alt="hi" />
      </div>
      <div className={`form-right lg:w-1/2  rounded-xl py-6 px-4 ${theme==='dark'?' bg-slate-900':'bg-purple-400'}`}>
        <div className="form-div flex flex-col py-4">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="input-container">
              <label className="text-white bg-transparent text-left block mb-2">Name</label>
              <input
                type="text"
                name="from_name"
                className={`w-full px-4 py-2 ${theme==='dark'? ' bg-gray-700':'bg-purple-300'}  shadow-lg p-8 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500`}
              />
            </div>
            <div className="input-container">
              <label className="text-white block mb-2 text-left ">Email</label>
              <input
                type="email"
                name="from_email"
                className={`w-full px-4 py-2 ${theme==='dark'? ' bg-gray-700':'bg-purple-300'}  shadow-lg p-8 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500`}
              />
            </div>
            <div className="input-container">
              <label className="text-white block mb-2 text-left text-lg">Message</label>
              <textarea
                name="message"
                className={`w-full px-4 py-2 ${theme==='dark'? ' bg-gray-700':'bg-purple-300'}  shadow-lg p-8 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500`}
              ></textarea>
            </div>
            <div className="text-center">
              <input
                className="form-butt  bg-pink-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg cursor-pointer transition duration-300"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


   
  );
};
export default Contact;