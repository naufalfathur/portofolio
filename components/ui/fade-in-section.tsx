'use client'
import React, { useState, useEffect, useRef } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current!); // Use ! to assert non-null
    return () => observer.unobserve(domRef.current!);
  }, []);

  return (
    <div
      className={`fade-in-section w-full ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;