import React from "react";
import { motion } from "framer-motion";
import Footer from "../footer/footer";
import SEO from "../SEO";

const AideSoutien = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <section className="relative bg-white dark:bg-black min-h-screen py-12 px-6">
        {/* OPTIMISATION SEO */}
      <SEO 
      title="Aides de soutien | ONG SEED" 
      description="L'ONG SEED soutien les enfants en difficultés motrice, mentale ou de croissance." 
      keywords="Soutenir, Aider, Valoriser, Protéger, Soutien moral" 
      />
      {/* OPTIMISATION SEO */}
      {/* Gradient en arrière-plan couvrant tout l'écran */}
      <div
          className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-transparent to-red-950 opacity-25 dark:opacity-75"
          aria-hidden="true"></div>

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Titre avec animation */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeIn}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-teal-600 dark:text-blue-600 mb-12 uppercase"
        >
          Aides de soutien
        </motion.h2>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default AideSoutien;
