import React, { FC } from 'react';

interface FooterCTAProps {
  ctaText: string;
  onClick: () => void;
}

const FooterCTA: FC<FooterCTAProps> = ({ ctaText, onClick }) => (
  <footer className="section text-center py-12">  
    <button onClick={onClick} className="btn-accent">
      {ctaText}
    </button>
  </footer>
);

export default FooterCTA;