import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="/" className="text-2xl font-bold tracking-tighter text-white">
              ClickField<span className="text-white">AI</span>
            </a>
            <p className="mt-2 text-sm text-gray-400">
              AI Beneficiaries for B2B service led companies.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} ClickFieldAI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
