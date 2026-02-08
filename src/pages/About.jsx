import React from 'react';
import LightRays from '../components/LightRays';
import { motion } from 'framer-motion';
import { fadeUp, container } from '../lib/motion';

const About = () => {
  return (
    <div className="flex-1 min-h-screen bg-black relative selection:bg-white/20">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.5}
          lightSpread={0.3}
          rayLength={2}
          followMouse={true}
          mouseInfluence={0.05}
          className="opacity-20"
        />
      </div>

      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={container}
            className="mb-32"
        >
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-medium tracking-tight text-white mb-8 leading-[0.9]">
                About <br/>
                <span className="text-white/50">ClickFieldAI</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed font-light">
                We're a team of innovators dedicated to revolutionizing smart textile technology for industries worldwide.
            </motion.p>
        </motion.div>

        {/* Mission Section */}
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-16"
        >
            <div>
                <motion.h2 variants={fadeUp} className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4">Our Mission</motion.h2>
                <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-medium text-white leading-tight">
                    Transforming ordinary textiles into intelligent, data-driven solutions.
                </motion.h3>
            </div>
            <motion.div variants={fadeUp} className="space-y-6 text-lg text-white/50 leading-relaxed">
                <p>
                    At ClickFieldAI Technologies, we're on a mission to improve safety, performance, and quality of life across industries.
                </p>
                <p>
                    We believe that by embedding intelligence into everyday fabrics, we can create a more connected, responsive, and safer world.
                </p>
            </motion.div>
        </motion.section>

        {/* Values Grid */}
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="mb-32"
        >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-12">
                 <div className="h-[1px] bg-white/10 flex-1"></div>
                 <span className="font-mono text-xs text-white/30">OUR VALUES</span>
                 <div className="h-[1px] bg-white text-white flex-1"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "Innovation", desc: "We push boundaries to create solutions that weren't possible before." },
                    { title: "Quality", desc: "We're committed to excellence in every sensor, algorithm, and solution we deliver." },
                    { title: "Collaboration", desc: "We work closely with our clients to ensure their unique needs are met." },
                    { title: "Impact", desc: "We measure success by the tangible differences our technology makes in the real world." }
                ].map((value, i) => (
                    <motion.div 
                        key={i} 
                        variants={fadeUp}
                        className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                        <h4 className="text-xl font-medium text-white mb-4">{value.title}</h4>
                        <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                            {value.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>

        {/* Our Story */}
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="max-w-4xl mx-auto text-center"
        >
             <motion.h2 variants={fadeUp} className="text-4xl font-medium text-white mb-12">Our Story</motion.h2>
             <div className="space-y-8 text-lg md:text-xl text-white/60 leading-relaxed font-light">
                 <motion.p variants={fadeUp}>
                    We started with the ambition to make an inherently scattered and complex development area modular, smart and available to analog brands. After successfully raising millions of dollars for development, we spent the first two years in full code mode.
                 </motion.p>
                 <motion.p variants={fadeUp}>
                    The goal was to turn all the scattered hardware and building blocks into simple modules to be assembled like Lego. During this time we took in a range of customers for whom we built prototypes - a way for us to make sure what we built had bearing in real world use cases.
                 </motion.p>
                 <motion.p variants={fadeUp}>
                    In 2023 we felt we had reached a technology level allowing us to start working on enterprise level. Since then, we have focused on textile integrations because of the enormous potential smart textiles have across multiple industries from healthcare to public safety.
                 </motion.p>
             </div>
        </motion.section>

      </div>
    </div>
  );
};

export default About;
