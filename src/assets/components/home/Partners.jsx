import React, { useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Dialog } from "@headlessui/react";

const partenaires = [
  { name: "KOLUJ_DEV", image: "/images/Logo.jpeg", description: "KOLUJ_DEV est une agence innovante dans le domaine de la technologie, spécialisée dans le Développement des sites web de toutes catégories." },
  { name: "Soyez le prochain", image: "/images/google.png", description: "Devenez le prochain partenaire de l'ONG SEED et profitez d'une mise en lumière qui fera prospérer votre business." },
  { name: "Soyez le prochain", image: "/images/google.png", description: "Devenez le prochain partenaire de l'ONG SEED et profitez d'une mise en lumière qui fera prospérer votre business." },
  { name: "Soyez le prochain", image: "/images/google.png", description: "Devenez le prochain partenaire de l'ONG SEED et profitez d'une mise en lumière qui fera prospérer votre business." },
  { name: "Soyez le prochain", image: "/images/google.png", description: "Devenez le prochain partenaire de l'ONG SEED et profitez d'une mise en lumière qui fera prospérer votre business." },
];

const PartenaireScroller = () => {
  const [selectedPartenaire, setSelectedPartenaire] = useState(null);

  return (
    <section className="relative bg-white dark:bg-black min-h-60 py-12 px-6 flex flex-col items-center">
<div
          className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-transparent to-red-950 opacity-25 dark:opacity-75"
          aria-hidden="true"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-teal-600 dark:text-blue-600 mb-8 uppercase"
        >
          Nos partenaires
        </motion.h2>
      </div>
      
      <Marquee gradient={false} speed={50} className="w-full h-[200px] flex items-center overflow-hidden space-x-8 mt-10">
        {partenaires.map((partenaire, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform"
            onClick={() => setSelectedPartenaire(partenaire)}
          >
            <div className="bg-gray-900 dark:bg-white text-white dark:text-black p-4 rounded-full shadow-lg px-14 mx-5">
              <img src={partenaire.image} alt={partenaire.name} loading="lazy" className="w-20 h-20 object-contain rounded-2xl shadow-lg" />
            </div>
            <p className="mt-2 text-sm font-bold text-gray-700 dark:text-white">{partenaire.name}</p>
          </div>
        ))}
      </Marquee>

      {/* Modale */}
      {selectedPartenaire && (
        <Dialog open={true} onClose={() => setSelectedPartenaire(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm text-center">
            <div className="mb-4">
              <img src={selectedPartenaire.image} alt={selectedPartenaire.name} loading="lazy" className="w-20 h-20 mx-auto object-contain rounded-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{selectedPartenaire.name}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{selectedPartenaire.description}</p>
            <button
              onClick={() => setSelectedPartenaire(null)}
              className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Fermer
            </button>
          </div>
        </Dialog>
      )}
    </section>
  );
};

export default PartenaireScroller;
