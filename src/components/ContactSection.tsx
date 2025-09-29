import React from 'react';
import Link from 'next/link';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-6">Build Your Sovereign Intelligence.</h2>
        <p className="text-lg text-text-muted mb-8">
          Ready to move beyond generic tools and build a true digital partner?
          Join the waitlist to get early access, development updates, and to
          request a consultation.
        </p>
        <Link href="#" className="bg-accent-blue text-white py-3 px-6 rounded-lg font-semibold no-underline transition-colors hover:bg-accent-blue-hover">
          Join the Waitlist
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
