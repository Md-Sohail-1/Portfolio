import {useState, useEffect } from 'react';
import { handleUserContactDetailForm } from '../../service/apis.js';

const Contact = () => {
  
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmited, setFormSubmited] = useState('');
  const [confirmMsg, setConfirmMsg] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({...inputData, [name]: value})
  }
  
  const submitContactForm = async (e) => {
    e.preventDefault();
    const {name, email, message} = inputData;
   
    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("message", message);
    
    const response = await handleUserContactDetailForm(data);
    
    alert(JSON.stringify(response))
    
    if(!response.message){
      if(response.status < 300){
        setInputData({...inputData, name: '', email: '', message: ''});
        setFormSubmited(true)
        setConfirmMsg('Thanks! Your message has been sent.');
        setTimeout(()=>{
          setFormSubmited('')
        },4000);
        return
      };
      setInputData({...inputData, name: '', email: '', message: ''});
      setFormSubmited(false)
      setConfirmMsg('Something Went wrong');
      setTimeout(()=>{
        setFormSubmited('');
      }, 4000)
      return 
    }
    setInputData({...inputData, name: '', email: '', message: ''});
    setFormSubmited(false);
    setConfirmMsg('Sorry, Server is Down, try later :)');
    setTimeout(()=>{
      setFormSubmited('');
    }, 4000)
    
  }
  
  
  useEffect(()=>{
    if(formSubmited === true || formSubmited === false) {
      setTimeout(()=>{
        setFormSubmited('')
      },2000)
    };
  }, [formSubmited])
  
  return (
    <section id="contact" className="pb-16 pt-6 px-6 bg-slate-700">
      <div className="max-w-4xl mx-auto text-center sm:px-6 md:px-12">
        <h2 className="pageHeading text-3xl font-bold text-gray-100 mb-4">Get in Touch</h2>
        <p className="pageText text-gray-300 mb-8 text-lg">
          Have a project in mind, a question, or just want to connect? Drop me a message!
        </p>
        {
        // Confirmation Message 
        }
        <div id="confirmation" className={`${formSubmited ? 'text-green-600' : 'text-red-600'} ${formSubmited === '' && 'hidden'} font-medium mb-6`}>{confirmMsg}</div>

        <form id="contactForm" onSubmit={submitContactForm} className="max-w-xl mx-auto space-y-3 sm:px-6 md:px-12">
          <div>
            <input type="text" placeholder="Your Name" required  onChange={handleInputChange} value={inputData.name} name='name' className="skill-card w-full px-4 py-3 bg-slate-300 text-slate-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-600"/>
          </div>
          <div>
            <input type="email" placeholder="Your Email" required  onChange={handleInputChange} value={inputData.email} name='email' className="skill-card w-full px-4 py-3 bg-slate-300 text-slate-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-600"/>
          </div>
          <div>
            <textarea placeholder="Your Message" rows="5" required onChange={handleInputChange} value={inputData.message} name='message' className="skill-card w-full px-4 py-3 bg-slate-300 text-slate-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-600"></textarea>
          </div>
          <button type="submit" className="page-btn w-full bg-blue-600 text-slate-200 py-3 rounded-lg hover:bg-indigo-700 transition">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact