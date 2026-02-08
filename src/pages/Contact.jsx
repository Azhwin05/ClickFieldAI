import React from 'react';
import { Button } from '../components/ui/button';
import BookingCalendar from '../components/BookingCalendar';

import { motion } from 'framer-motion';
import { fadeUp, container } from '../lib/motion';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Text Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="lg:col-span-4 flex flex-col justify-center space-y-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-medium mb-4 text-white tracking-tight">Let's build<br />something intelligent.</h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-sm">
              Schedule a discovery call to discuss your sophisticated AI requirements. Our engineers are ready to deploy.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Email</h3>
              <p className="text-white text-lg">Kishore@clickfieldai.com</p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Headquarters</h3>
              <p className="text-white text-lg">Chennai, India</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Booking Calendar */}
        <div className="lg:col-span-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="h-full"
            >
                <BookingCalendar />
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
