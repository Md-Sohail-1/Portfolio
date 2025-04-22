const Contact = () => {
  return (
    <section id="contact" className="pb-16 pt-6 px-6 bg-slate-700">
      <div className="max-w-4xl mx-auto text-center sm:px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-100 mb-4">Get in Touch</h2>
        <p className="text-gray-300 mb-8 text-lg">
          Have a project in mind, a question, or just want to connect? Drop me a message!
        </p>

        {
        // Confirmation Message 
        }
        <div id="confirmation" className="hidden text-green-600 font-medium mb-6">Thanks! Your message has been sent.</div>

        <form id="contactForm" className="max-w-xl mx-auto space-y-3 sm:px-6 md:px-12">
          <div>
            <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 bg-slate-300 text-slate-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-600"/>
          </div>
          <div>
            <input type="email" placeholder="Your Email" required className="w-full px-4 py-3 bg-slate-300 text-slate-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-600"/>
          </div>
          <div>
            <textarea placeholder="Your Message" rows="5" required className="w-full px-4 py-3 bg-slate-300 text-slate-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-600"></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-slate-200 py-3 rounded-lg hover:bg-indigo-700 transition">Send Message</button>
        </form>
      </div>
    </section>
 
  )
}

export default Contact