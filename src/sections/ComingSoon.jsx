

import React from 'react';
import { img1, cardImage1, topLogo } from '../assets/images'; // Replace with your actual image paths

const ComingSoon = () => {
  const cards = [
    {
      title: "TELEGRAM",
      text: "Join Now",
      link: "https://t.me/SWAKEsol",
      image: cardImage1,
      initialRotation: "rotate-[-4deg]",
    },
    {
      title: "X",
      text: "Join Now",
      link: "https://x.com/SWAKESol",
      image: img1,
      initialRotation: "rotate-[6deg]",
    },
  ];

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <img
        src={topLogo}
        alt="Centered Image"
        className="w-[200px] h-auto md:w-[150px] lg:w-[600px] mb-8"
      />

      <h1 className="text-green-800 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-6xl font-bold mb-32 font-comic">
        CA: 8HYSJNxLFaLqBvU1ntoWR2yDrJtAwbhvJJXYvDVipump
      </h1>

      <a
        href="https://pump.fun/8HYSJNxLFaLqBvU1ntoWR2yDrJtAwbhvJJXYvDVipump"
        className="bg-black border-4 border-black rounded-full px-10 py-4 text-white font-bold text-lg hover:bg-transparent hover:text-black transition-colors duration-300"
      >
        Buy Now
      </a>

      <div className="w-[500px] max-w-screen-lg mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {cards.map((card, index) => (
          <a
            href={card.link}
            key={index}
            className={`block bg-slate-400 border-[4px] bg-opacity-55 border-black rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:rotate-0 cursor-pointer text-center ${card.initialRotation}`}
          >
            <div className="flex justify-center">
              <img
                src={card.image}
                alt={card.title}
                className="w-[90px] max-w-xs py-6"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-comic text-xl font-bold mb-8 text-black">
                {card.title}
              </h3>
              <p className="font-comic text-sm mb-8 text-black">{card.text}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ComingSoon;
