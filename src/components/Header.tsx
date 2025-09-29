import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="py-6 border-b border-border-color">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-xl font-semibold text-text-primary no-underline">
          Deepthought Labs
        </Link>
        <Link href="#contact" className="bg-accent-blue text-white py-3 px-6 rounded-lg font-semibold no-underline transition-colors hover:bg-accent-blue-hover">
          Join Waitlist
        </Link>
      </div>
    </header>
  );
};

export default Header;
