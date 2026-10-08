import React, { useRef, useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
  spotlightColor?: string;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  enableTilt = false,
  spotlightColor = 'rgba(255, 255, 255, 0.08)',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6; // tilt up to 6 deg
      const rotateY = ((x - centerX) / centerX) * 6;
      setTilt({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: enableTilt
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.01 : 1}, ${isHovered ? 1.01 : 1}, 1)`
          : undefined,
        transition: isHovered
          ? 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease'
          : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease',
      }}
      className={`relative overflow-hidden rounded-2xl md:rounded-3xl bg-neutral-950/40 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-white/[0.18] group transition-all duration-300 ${className}`}
    >
      {/* Specular Inner Rim Highlight (Apple Bevel) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/15 via-transparent to-transparent" />

      {/* Dynamic Cursor Spotlight Reflection */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-[inherit]"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
