import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Project() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'Chatbot  for Customer Support',
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
      title: 'MongoDB Project',
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
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {cards.map((card, index) => {
          const direction = index % 2 === 0 ? -100 : 100;

          return (
            <motion.div
  key={card.id}
  onClick={() => setActiveCard(card.id)}
  initial={{ x: direction, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.9, delay: index * 0.1 }}
  exit={{ x: direction, opacity: 0 }}
  className={`flex flex-col bg-gray-900 rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 
    hover:ring-4 hover:ring-green-600 hover:opacity-30 
    md:bg-opacity-50 md:translate-x-0`}
>
  <img
    src={card.image}
    alt={`${card.title} Image`}
    className="w-full h-[230px] object-cover rounded-t-2xl transition-transform duration-300 transform hover:scale-105 my-3"
  />
  
  {/* Spacer to push bottom content down */}
  <div className="flex-grow" />

  {/* Content fixed at bottom */}
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2 text-white">{card.title}</h2>
    <p className="text-gray-300 mb-4">{card.desc}</p>
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
