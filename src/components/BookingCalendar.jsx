import React, { useState, useMemo, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import { format, startOfToday } from 'date-fns';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Globe, Clock, Check, ChevronDown } from 'lucide-react';
import 'react-day-picker/dist/style.css';
import './BookingCalendar.css';

const SuccessAnimation = () => (
   <motion.div 
     initial={{ scale: 0.8, opacity: 0 }}
     animate={{ scale: 1, opacity: 1 }}
     transition={{ duration: 0.5, ease: "easeOut" }}
     className="flex flex-col items-center justify-center h-full"
   >
      <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6 relative z-10"
          >
              <Check className="w-12 h-12 text-black" strokeWidth={3} />
          </motion.div>
          {/* Glow Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.5, scale: 1.5 }}
            transition={{ delay: 0.4, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-white blur-xl rounded-full z-0"
          />
      </div>
      
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-3xl font-medium text-white mb-2"
      >
        Booking Confirmed
      </motion.h3>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-white/60 text-center max-w-xs"
      >
        We've sent the calendar invitation to your email.
      </motion.p>
   </motion.div>
);

const BookingCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(startOfToday());
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [bookingStage, setBookingStage] = useState('date'); // 'date' | 'form' | 'success'
    const [currentTimezone, setCurrentTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [isTimezoneOpen, setIsTimezoneOpen] = useState(false);

    // Common Timezones
    const timezones = [
        "Asia/Kolkata",
        "America/New_York", 
        "America/Los_Angeles",
        "Europe/London",
        "Asia/Dubai",
        "Asia/Singapore",
        "Australia/Sydney",
        "UTC"
    ];

    // Generate Slots (Mock Logic - would typically use date-fns-tz to offset actual hours)
    const timeSlots = useMemo(() => {
        if (!selectedDate) return [];
        const slots = [];
        // Generating generic slots for UI demo
        const startHour = 9;
        const endHour = 18; // 6 PM
        for (let hour = startHour; hour < endHour; hour++) {
             const suffix = hour >= 12 ? 'PM' : 'AM';
             const displayHour = hour > 12 ? hour - 12 : hour;
             slots.push({ time: `${hour}:00`, label: `${displayHour}:00 ${suffix}` });
             slots.push({ time: `${hour}:30`, label: `${displayHour}:30 ${suffix}` });
        }
        return slots;
    }, [selectedDate, currentTimezone]);

    const handleDateSelect = (date) => {
        if (date) {
            setSelectedDate(date);
            setSelectedSlot(null); 
        }
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        setBookingStage('success');
    };

    return (
        <div className="w-full h-full glass-card p-0 flex flex-col md:flex-row min-h-[600px]">
            {/* Left Panel: Context */}
            <div className="p-8 md:w-1/3 bg-white/5 border-r border-white/10 flex flex-col justify-between">
                <div>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-3">Discovery Call</h3>
                    <h2 className="text-2xl font-medium text-white mb-6">System Integration</h2>
                    
                    <div className="space-y-4">
                        <div className="flex items-center text-white/70">
                            <Clock className="w-4 h-4 mr-3" />
                            <span className="text-sm">30 Minutes</span>
                        </div>
                        
                        {/* Timezone Selector */}
                        <div className="relative">
                            <button 
                                onClick={() => setIsTimezoneOpen(!isTimezoneOpen)}
                                className="flex items-center text-white/70 hover:text-white transition-colors text-sm w-full text-left"
                            >
                                <Globe className="w-4 h-4 mr-3" />
                                <span className="flex-1 truncate">{currentTimezone}</span>
                                <ChevronDown className={`w-3 h-3 ml-2 transition-transform ${isTimezoneOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {isTimezoneOpen && (
                                <div className="absolute top-8 left-0 w-full bg-[#1a1a1a] border border-white/20 rounded-md shadow-2xl z-50 max-h-48 overflow-y-auto custom-scrollbar">
                                    {timezones.map(tz => (
                                        <button
                                            key={tz}
                                            onClick={() => { setCurrentTimezone(tz); setIsTimezoneOpen(false); }}
                                            className="w-full text-left px-3 py-2 text-xs text-white/70 hover:bg-white/10 hover:text-white"
                                        >
                                            {tz}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {selectedDate && (
                    <div className="mt-8 pt-6 border-t border-white/10 opacity-70">
                         <div className="text-xs font-mono uppercase text-white/50 mb-1">Selected Time</div>
                         <div className="text-base font-medium text-white">{format(selectedDate, 'EEEE, MMM do')}</div>
                         {selectedSlot ? (
                             <div className="text-xl text-white font-mono mt-1">{selectedSlot.label}</div>
                         ) : (
                             <div className="text-sm text-white/40 mt-1">Select a time -&gt;</div>
                         )}
                    </div>
                )}
            </div>

            {/* Right Panel: Interactive Area */}
            <div className="p-8 md:flex-1 relative bg-black/20 overflow-visible">
                <AnimatePresence mode="wait">
                    {bookingStage === 'date' ? (
                        <motion.div 
                            key="calendar"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col h-full"
                        >
                            <h3 className="text-lg font-medium text-white mb-6">Select Date & Time</h3>
                            
                            <div className="flex flex-col md:flex-row gap-8 h-full">
                                <div className="calendar-wrapper overflow-visible">
                                    <DayPicker
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={handleDateSelect}
                                        disabled={{ before: startOfToday() }}
                                        modifiersClassNames={{
                                            selected: 'bg-white text-black font-medium rounded-full',
                                            today: 'text-white font-bold border-b-2 border-white'
                                        }}
                                        styles={{
                                            head_cell: { width: '40px', color: '#666' },
                                            cell: { width: '40px' },
                                            day: { margin: 'auto' }
                                        }}
                                        components={{
                                            IconLeft: () => <ChevronLeft className="w-4 h-4 text-white" />,
                                            IconRight: () => <ChevronRight className="w-4 h-4 text-white" />
                                        }}
                                    />
                                </div>

                                <div className="flex-1 border-l border-white/10 pl-8 h-full flex flex-col">
                                    <h4 className="text-xs text-white/50 mb-4 font-mono uppercase">Available Slots ({currentTimezone.split('/')[1]})</h4>
                                    <div className="grid grid-cols-1 gap-2 overflow-y-auto custom-scrollbar flex-1 max-h-[300px] pr-2">
                                        {timeSlots.map((slot, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setSelectedSlot(slot)}
                                                className={`w-full text-left px-4 py-3 rounded-sm border text-sm transition-all duration-200 ${
                                                    selectedSlot === slot 
                                                    ? 'bg-white text-black border-white font-medium' 
                                                    : 'bg-white/5 border-transparent text-white hover:bg-white/10'
                                                }`}
                                            >
                                                {slot.label}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-white/10">
                                        <Button 
                                            disabled={!selectedSlot}
                                            onClick={() => setBookingStage('form')}
                                            className="w-full bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Next: Enter Details
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : bookingStage === 'form' ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="h-full flex flex-col max-w-md mx-auto justify-center"
                        >
                            <button onClick={() => setBookingStage('date')} className="absolute top-8 left-8 text-white/50 hover:text-white flex items-center text-sm">
                                <ChevronLeft className="w-4 h-4 mr-1" /> Back
                            </button>

                            <div className="mb-8">
                                <h3 className="text-2xl font-medium text-white mb-2">Finalize Booking</h3>
                                <p className="text-white/50 text-sm">
                                    {format(selectedDate, 'MMMM do')} at {selectedSlot?.label}
                                </p>
                            </div>

                            <form onSubmit={handleBookingSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-mono uppercase text-white/40 mb-2">Full Name</label>
                                    <input required type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm focus:outline-none focus:border-white/40 text-white transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono uppercase text-white/40 mb-2">Work Email</label>
                                    <input required type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm focus:outline-none focus:border-white/40 text-white transition-colors" placeholder="john@company.com" />
                                </div>
                                <Button className="w-full bg-white hover:bg-gray-200 text-black font-medium h-12 mt-4 text-base">
                                    Book Call
                                </Button>
                            </form>
                        </motion.div>
                    ) : (
                        <SuccessAnimation />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default BookingCalendar;
