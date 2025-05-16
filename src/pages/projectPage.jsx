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
    <div className="flex flex-col gap-4 p-4 items-center justify-center py-[30px] my-[10px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {cards.map((card, index) => {
          const direction = index % 2 === 0 ? -100 : 100;

          return (
            <motion.div
              key={card.id}
              initial={{ x: direction, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              className="relative group flex flex-col bg-gray-900 rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:ring-4 hover:ring-green-600"
            >
              <img
                src={card.image}
                alt={`${card.title} Image`}
                className="w-full h-[230px] object-cover rounded-t-2xl transition-transform duration-300 transform group-hover:scale-105 my-3"
              />

              {/* Overlay on hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 text-center">
                <p className="text-white text-[15px] font-semibold">{card.desc}</p>
              </div>

              {/* Content section at bottom */}
              <div className="p-4 mt-auto z-10">
                <h2 className="text-sm lg:text-lg font-semibold mb-2 text-white">{card.title}</h2>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-green-200 underline hover:text-green-700 transition-colors"
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
