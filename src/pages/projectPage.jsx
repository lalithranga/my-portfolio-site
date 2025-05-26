import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Project() {
  const cards = [
    {
      id: 1,
      title: 'Chatbot for Customer Support',
      desc: 'Used for customer support and engagement.',
      image: '/chatbot.jpeg',
      link: 'https://github.com/lalithranga/ChatbotAPI-M04',
    },
    {
      id: 2,
      title: 'Audio Renting E Commerce Website',
      desc: 'This is an e-commerce website for renting audio equipment.',
      image: '/Audio.webp',
      link: 'https://github.com/lalithranga/Audio_E_Commece_Web',
    },
    {
      id: 3,
      title: 'MongoDB Project CRUD CLI',
      desc: 'Mongo DB crud operations and CLI commands. Used for data storage and retrieval.',
      image: '/mongo.png',
      link: 'https://github.com/lalithranga/Mongo_DB_CLI_And_CRUD',
    },
    {
      id: 4,
      title: 'Vehicle Recognition System',
      desc: 'Used Azure Cognitive Services for vehicle recognition.',
      image: 'Vehicle.jpeg',
      link: 'https://github.com/lalithranga/Azure-AI-Vehicle-Prediction-Backend',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center  px-4 ">
      <h1 className="text-3xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#54ebc3] to-green-600 mb-10">
        My Projects
      </h1>
      <p className="text-base lg:text-lg text-center text-gray-300 max-w-3xl mb-16">
        Here are some of the projects I have worked on. Click on the project title to view the code.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {cards.map((card, index) => {
          const direction = index % 2 === 0 ? -100 : 100;

          return (
            <motion.div
              key={card.id}
              initial={{ x: direction, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              className="relative group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:ring-4 hover:ring-green-600 transition-all duration-300"
            >
              <img
                src={card.image}
                alt={`${card.title} Image`}
                className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 text-center">
                <p className="text-white text-sm font-medium">{card.desc}</p>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white mb-2">{card.title}</h2>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 underline hover:text-green-500 transition-colors"
                >
                  View Code
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
