import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import { supabase } from '../supabaseClient';

// Form field configuration
const formFields = [
  { name: 'name', type: 'text', placeholder: 'Name', required: true },
  { name: 'email', type: 'email', placeholder: 'Email', required: true },
  { name: 'phone', type: 'tel', placeholder: 'Phone Number', required: false },
];

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  comment: '',
};

// Form Input Component
const FormInput = ({ field, value, onChange }) => (
  <input
    type={field.type}
    name={field.name}
    placeholder={field.placeholder}
    value={value}
    onChange={onChange}
    required={field.required}
    className="w-full p-4 text-base bg-transparent text-white placeholder-gray-400 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300 hover:border-gray-300"
  />
);

const ContactMe = () => {
  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(initialFormState);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.from('contacts').insert([form]);
      
      if (error) throw error;
      
      toast.success('Message sent successfully!');
      resetForm();
    } catch (error) {
      console.error('Contact form submission error:', error.message);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <div className="flex flex-col items-center justify-center gap-10 px-4 w-full">
        <Header />
        <ContactForm 
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

const Header = () => (
  <div className="text-center">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#54ebc3] to-green-600 bg-clip-text text-transparent mb-4">
      Get In Touch
    </h1>
    <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed py-8">
      I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      <span className="text-green-400 font-medium block">
        Let's create something amazing together!
      </span>
    </p>
  </div>
);

const ContactForm = ({ form, handleChange, handleSubmit }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="border border-black rounded-2xl shadow-lg transition-colors duration-300 w-[400px] relative"
  >
    <form onSubmit={handleSubmit} className="space-y-8">
      {formFields.map(field => (
        <FormInput
          key={field.name}
          field={field}
          value={form[field.name]}
          onChange={handleChange}
        />
      ))}
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
);

export default ContactMe;
