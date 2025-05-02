import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', form);
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-black rounded-2xl shadow-lg hover:border-blue-500 transition-colors duration-300 py-[100px]">
      <h2 className="text-2xl font-semibold mb-4 text-center text-white w-fit px-4 py-1 rounded-md mx-auto">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 bg-transparent text-white placeholder-gray-300 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 bg-transparent text-white placeholder-gray-300 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-3 bg-transparent text-white placeholder-gray-300 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="comment"
          placeholder="Comment"
          value={form.comment}
          onChange={handleChange}
          className="w-full p-3 h-24 bg-transparent text-white placeholder-gray-300 border border-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
