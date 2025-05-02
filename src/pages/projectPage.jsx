import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Project() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'Card 1',
      desc: 'This is the first card.',
      image: '/chatbot.jpeg',
    },
    {
      id: 2,
      title: 'Card 2',
      desc: 'This is the second card.',
      image: '/Audio.webp',
    },
    {
      id: 3,
      title: 'Card 3',
      desc: 'This is the third card.',
      image: '/mongo.png',
    },
    {
      id: 4,
      title: 'Card 4',
      desc: 'This is the fourth card.',
      image: 'Vehicle.jpeg',
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4 items-center justify-center py-[30px] my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {cards.map((card, index) => {
          const direction = index % 2 === 0 ? -100 : 100;

          return (
            <motion.div
              key={card.id}
              onClick={() => setActiveCard(card.id)
                
              }
              initial={{ x: direction, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              exit={{ x: direction, opacity: 0 }}
              className={`bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
                activeCard === card.id ? 'ring-4 ring-blue-400 opacity-30' : ''
              } md:bg-opacity-50 md:translate-x-0`}
            >
              <img
                src={card.image}
                alt={`${card.title} Image`}
                className="w-full h-[200px] object-cover rounded-t-2xl transition-transform duration-300 transform hover:scale-105"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
