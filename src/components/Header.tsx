import React from 'react';

const Header = () => {
  return (
    <header className="border-b border-border-color">
      <div className="container mx-auto flex justify-between items-center p-6">
        <a href="#" className="text-xl font-semibold text-text-primary no-underline">
          Deepthought Labs
        </a>
        <a href="#contact" className="bg-accent-blue text-white font-semibold py-3 px-6 rounded-lg no-underline transition-colors duration-200 hover:bg-blue-500">
          Join Waitlist
        </a>
      </div>
    </header>
  );
};

export default Header;
