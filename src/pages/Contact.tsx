import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(/public/hero-image.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">We'd love to hear from you!</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-4">
              Whether you have a question about our features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="space-y-4 text-lg text-gray-700">
              <p><strong>Email:</strong> <a href="mailto:info@fiesonai.com" className="text-blue-600 hover:underline">info@fiesonai.com</a></p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 AI Street, Innovation City, CA 90210</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-lg" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-lg" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-lg" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md text-lg font-semibold hover:bg-primary-dark smooth-transition transition-all duration-300 hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Book a Demo</h2>
          <p className="text-xl mb-8 text-gray-600">
            See Fieson AI in action and discover how it can transform your business.
          </p>
          <a href="https://cal.com/bart-rosier/session-bart" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 smooth-transition">
            Schedule a Demo
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
