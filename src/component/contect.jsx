import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import { supabase } from '../supabaseClient'; // Adjust path as needed

const ContactMe = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('contacts').insert([form]);

    if (error) {
      console.error('Supabase insert error:', error.message);
      toast.error('Something went wrong. Try again.');
    } else {
      toast.success('Message sent successfully!');
      setForm({ name: '', email: '', phone: '', comment: '' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

 return (
  <>
    <Toaster position="top-right" reverseOrder={false} />

    <div className="flex flex-col items-center justify-center gap-10 px-4 w-full">
      {/* Section Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#54ebc3] to-green-600 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h1>
        
        <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed py-8">
          I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          <p className="text-green-400 font-medium text-center"> Let's create something amazing together!</p>
        </p>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border border-black rounded-2xl shadow-lg transition-colors duration-300 w-[400px] relative"
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 text-base bg-transparent text-white placeholder-gray-400 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300 hover:border-gray-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 text-base bg-transparent text-white placeholder-gray-400 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300 hover:border-gray-300"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-4 text-base bg-transparent text-white placeholder-gray-400 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300 hover:border-gray-300"
          />
          <textarea
            name="comment"
            placeholder="Message"
            value={form.comment}
            onChange={handleChange}
            className="w-full p-4 text-base bg-transparent text-white placeholder-gray-400 border border-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300 hover:border-gray-300 h-[150px]"
          />
          <button
            type="submit"
            className="w-[120px] text-[16px] lg:text-[15px] bg-green-600 lg:w-[150px] text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition duration-300 flex justify-center mx-auto"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  </>
);

};

export default ContactMe;
