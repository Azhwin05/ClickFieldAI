import React from 'react';
import LightRays from '../components/LightRays';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, container } from '../lib/motion';
import LogoLoop from '../components/LogoLoop';

const Home = () => {
  const partners = [
    { src: "/logos/company1.png", alt: "Partner 1" },
    { src: "/logos/company2.png", alt: "Partner 2" },
    { src: "/logos/company3.png", alt: "Partner 3" },
    { src: "/logos/company1.png", alt: "Partner 1" }, // Duplicate for loop length if needed
    { src: "/logos/company2.png", alt: "Partner 2" },
    { src: "/logos/company3.png", alt: "Partner 3" },
  ];

  return (
    <div className="flex-1 w-full overflow-x-hidden">
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
            className="opacity-40"
          />
        </div>
        
        {/* Asymmetric Hero: Left-Center Alignment */}
        <div className="relative z-20 flex h-full items-center px-4 md:px-12 pointer-events-none">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={container}
              className="text-left space-y-8 max-w-5xl pointer-events-auto"
            >
            {/* Staged Headline Reveal */}
            <motion.h1 className="text-6xl md:text-[80px] font-medium tracking-tight text-white leading-[0.95]">
                <div className="overflow-hidden"><motion.div variants={fadeUp}>We build AI systems</motion.div></div>
                <div className="overflow-hidden"><motion.div variants={fadeUp}>that operate quietly</motion.div></div>
                <div className="overflow-hidden"><motion.div variants={fadeUp} className="text-white/50">and scale reliably.</motion.div></div>
            </motion.h1>

            </motion.div>
        </div>
      </section>

      {/* Partners Section (Already good, just minimal spacing tweak) */}
      <section className="py-12 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-left text-xs text-white/30 mb-8 font-mono uppercase tracking-widest pl-1 border-l border-white/20">Trusted by industry leaders</p>
          <div>
            <LogoLoop 
              logos={partners} 
              speed={50} 
              logoHeight={40} 
              gap={60}
              pauseOnHover={true}
              fadeOut={false}
              className="logoloop-professional"
            />
          </div>
        </div>
      </section>

      {/* Impact: Silent Divider Section */}
      <section className="bg-black py-24 flex items-center justify-center">
        <div className="w-full max-w-7xl px-4 flex items-center gap-4">
             <div className="h-[1px] bg-white/10 flex-1"></div>
             <span className="font-mono text-xs text-white/20">01 / SYSTEM</span>
             <div className="h-[1px] bg-white/10 flex-1"></div>
        </div>
      </section>

      {/* Our Approach Section: Clean, Technical Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div 
              variants={fadeUp}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.06)', transition: { duration: 0.25 } }}
              className="glass-card p-10 group cursor-default h-full flex flex-col"
            >
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="mt-auto">
                 <h3 className="text-xl font-medium text-white mb-4">AI Strategy & Analysis</h3>
                 <p className="text-white/60 leading-relaxed text-sm">
                    Deep dive into your business processes to identify automation opportunities.
                 </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={fadeUp}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.06)', transition: { duration: 0.25 } }}
              className="glass-card p-10 group cursor-default h-full flex flex-col"
            >
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-medium text-white mb-4">Custom AI Development</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                    Build tailored automation solutions using cutting-edge AI technologies.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={fadeUp}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.06)', transition: { duration: 0.25 } }}
              className="glass-card p-10 group cursor-default h-full flex flex-col"
            >
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-medium text-white mb-4">Integration & Support</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                    Seamless deployment with ongoing optimization and support.
                </p>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </section>



      {/* Why ClickfieldAI Section */}
      <section className="py-32 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
            <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={container}
                className="mb-20 max-w-3xl mx-auto text-center"
            >
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
                    Why ClickfieldAI?
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
                    In an industry where complexity leads to failure, we bring simplicity and expertise to ensure your success.
                </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* 1. Built for Scale */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="group"
                >
                    <div className="h-[1px] w-full bg-white/20 mb-8 group-hover:bg-white transition-colors duration-500"></div>
                    <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4">Built for Scale</div>
                    <h3 className="text-2xl font-medium text-white mb-4">10x Operational Efficiency</h3>
                    <p className="text-white/60 leading-relaxed">
                        Our clients consistently report up to 10x improvements in process speed and team productivity — powered by custom AI workflows.
                    </p>
                </motion.div>

                {/* 2. Tangible Outcomes */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: 0.1 }}
                    className="group"
                >
                    <div className="h-[1px] w-full bg-white/20 mb-8 group-hover:bg-white transition-colors duration-500"></div>
                    <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4">Tangible Business Outcomes</div>
                    <h3 className="text-2xl font-medium text-white mb-4">Revenue, Retention, Results</h3>
                    <p className="text-white/60 leading-relaxed">
                        Whether it's cutting costs, scaling outreach, or reducing churn — our automations are designed to drive measurable business impact.
                    </p>
                </motion.div>

                {/* 3. Human + AI Synergy */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: 0.2 }}
                    className="group"
                >
                    <div className="h-[1px] w-full bg-white/20 mb-8 group-hover:bg-white transition-colors duration-500"></div>
                    <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4">Human + AI Synergy</div>
                    <h3 className="text-2xl font-medium text-white mb-4">Human-in-the-Loop Design</h3>
                    <p className="text-white/60 leading-relaxed">
                        We blend automation with expert oversight, ensuring your systems stay adaptive, accurate, and aligned with your goals.
                    </p>
                </motion.div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
