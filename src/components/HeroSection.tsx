import React from 'react';
import { FC } from 'react';
import heroImg from '../assets/heroSection.jpeg';

const HeroSection: FC = () => (
  <section className="section bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-20 px-8 text-center">
    <img
    src={heroImg}
    alt="Server racks glowing in data center"
    style={{ width: '100%', borderRadius: '0.5rem', marginBottom: '1.5rem' }}
    />
    <h1 className="text-4xl font-extrabold mb-4">AI’s Hidden Costs of Efficiency</h1>
    <p className="text-lg max-w-2xl mx-auto">
      Discover the ethical, environmental, and social toll behind every algorithm.
    </p>
  </section>
);

export default HeroSection;
