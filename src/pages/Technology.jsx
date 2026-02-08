import React from 'react';

import { motion } from 'framer-motion';
import { fadeUp, container } from '../lib/motion';

const Technology = () => {
  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={container}
        >
            <motion.h1 variants={fadeUp} className="text-5xl md:text-[64px] font-medium mb-8 tracking-tight">Technology</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/65 mb-12 max-w-3xl leading-relaxed">
              We combine materials science with signal processing to construct textile sensors for data-critical environments.
            </motion.p>
            
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="glass-card h-96 rounded-2xl flex items-center justify-center">
                    <span className="text-white/45 font-mono text-sm">fig. 01 — Sensor Architecture</span>
                </div>
                <div className="space-y-8">
                    <h2 className="text-3xl font-medium">Integrated Sensing</h2>
                    <p className="text-white/65 text-lg leading-relaxed">
                        Sensors are integrated at the yarn level, eliminating bulky attachments. This architecture allows for continuous monitoring of strain, pressure, and motion without ergonomic compromise.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Washable and Durable",
                            "High Sensitivity Signal",
                            "Low Power Consumption"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center space-x-3 text-white/85">
                                <span className="h-1.5 w-1.5 bg-white rounded-full"/>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
