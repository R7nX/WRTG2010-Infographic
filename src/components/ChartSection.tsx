import { FC, ReactNode } from 'react';
import React from 'react';

interface ChartSectionProps {
  title: string;
  children: ReactNode;
}

const ChartSection: FC<ChartSectionProps> = ({ title, children }) => (
  <section className="section chart-section">
  <h2>{title}</h2>
  {children}
</section>
);

export default ChartSection;
