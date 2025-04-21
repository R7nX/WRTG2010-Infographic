import React, { FC, ReactNode } from 'react';

interface TextSectionProps {
  title: string;
  children: ReactNode;
}

const TextSection: FC<TextSectionProps> = ({ title, children }) => (
  <section className="section px-8 py-12 max-w-3xl mx-auto">
    <h2 className="chart-title">{title}</h2>
    <div className="space-y-4 text-lg leading-relaxed text-gray-700">
      {children}
    </div>
  </section>
);

export default TextSection;
