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

    

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border border-black rounded-2xl shadow-lg transition-colors duration-300 w-[400px] relative"
      >
        <h2 className="text-2xl lg:text-2xl font-semibold mb-10 text-white w-fit px-4 py-1 rounded-md mx-auto">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 lg:text-[15px] bg-transparent text-white placeholder-gray-300 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 lg:text-[15px] bg-transparent text-white placeholder-gray-300 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 lg:text-[15px] bg-transparent text-white placeholder-gray-300 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="comment"
            placeholder="Message"
            value={form.comment}
            onChange={handleChange}
            className="w-full p-3 lg:text-[15px] h-[150px] bg-transparent text-white placeholder-gray-300 border border-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-[120px] lg:text-[15px] bg-green-600 lg:w-[150px] text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition duration-300 items-start absolute flex justify-center mx-auto"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default ContactMe;
