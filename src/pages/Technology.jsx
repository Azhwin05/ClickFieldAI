import React from 'react';
import LightRays from '../components/LightRays';
import { motion } from 'framer-motion';
import { fadeUp, container } from '../lib/motion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Terminal, Cpu, Coffee } from 'lucide-react';

const Technology = () => {
  return (
    <div className="flex-1 min-h-screen bg-black relative selection:bg-blue-500/30 overflow-hidden flex items-center justify-center">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="center"
          raysColor="#4f46e5" 
          raysSpeed={0.2}
          lightSpread={0.6}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.1}
          className="opacity-30"
        />
      </div>

      <div className="relative z-10 px-4 text-center max-w-4xl mx-auto">
        
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={container}
            className="space-y-12"
        >
            <div className="flex justify-center gap-6 text-white/20 mb-8">
                <motion.div variants={fadeUp}><Terminal className="w-12 h-12" strokeWidth={1} /></motion.div>
                <motion.div variants={fadeUp} transition={{delay: 0.1}}><Cpu className="w-12 h-12" strokeWidth={1} /></motion.div>
                <motion.div variants={fadeUp} transition={{delay: 0.2}}><Coffee className="w-12 h-12" strokeWidth={1} /></motion.div>
            </div>

            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-medium tracking-tight text-white leading-[0.9]">
                Technology <br/>
                <span className="text-white/40">Unloading...</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="space-y-4 max-w-2xl mx-auto">
                <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                    Our AI is currently rewriting its own code to be 10x more efficient. 
                </p>
                <p className="text-lg text-white/40 font-mono">
                    (It also insisted on a coffee break. We're negotiating.)
                </p>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-8">
                <div className="bg-white/5 border border-white/10 rounded-full px-6 py-3 inline-flex items-center gap-3 text-sm text-white/60 font-mono">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Compiling future standards... 98%
                </div>
            </motion.div>

            <motion.div variants={fadeUp}>
                <Button variant="outline" className="mt-8 border-white/20 hover:bg-white/10 text-white font-mono uppercase tracking-widest" asChild>
                    <Link to="/">Return to Base</Link>
                </Button>
            </motion.div>

        </motion.div>

      </div>
    </div>
  );
};

export default Technology;
