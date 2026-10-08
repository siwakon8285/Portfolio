import React, { useRef, useState } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
  strength?: number; // 0 to 1
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  strength = 0.35,
  as = 'button',
  href,
  target,
  rel,
  onClick,
  ...rest
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const variantStyles = {
    primary:
      'bg-white text-black hover:bg-neutral-200 border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.25)] font-medium',
    secondary:
      'bg-white/[0.05] text-white hover:bg-white/[0.1] border-white/10 hover:border-white/25 shadow-glass backdrop-blur-xl',
    ghost:
      'bg-transparent text-neutral-300 hover:text-white border-transparent hover:border-white/10 hover:bg-white/[0.03]',
    glow:
      'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-200 border-cyan-500/30 hover:border-cyan-400/60 shadow-[0_0_30px_rgba(56,189,248,0.2)]',
  };

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
      className="inline-block"
    >
      <div
        className={`group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-sans tracking-tight transition-all duration-300 border ${variantStyles[variant]} ${className}`}
      >
        {/* Subtle shine gloss on top edge */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none rounded-t-full" />
        
        {/* Children content with slight counter-displacement */}
        <span
          className="relative z-10 flex items-center gap-2 pointer-events-none"
          style={{
            transform: `translate3d(${position.x * 0.2}px, ${position.y * 0.2}px, 0)`,
            transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          {children}
        </span>
      </div>
    </div>
  );

  if (as === 'a' && href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block focus:outline-none">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block focus:outline-none" {...rest}>
      {content}
    </button>
  );
};
