"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "./ui/Card";
import { cardData } from "@/constants";

const Services: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleCardClick = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <div className="flex items-center justify-center">  
        <motion.div
          className="flex w-full bg-white items-center justify-center drop-shadow-[0_0px_15px_rgba(0,0,0,0.20)] text-5xl h-24 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "keyframes",
            duration: 0.5,
          }}>
          Services
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-center mt-20 mb-20" id="services">
        {cardData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            image={card.image}
            isOpen={selectedId === card.id}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
