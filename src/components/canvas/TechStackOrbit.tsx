import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { TECH_ORBIT_ITEMS } from '../../data/portfolioData';
import { LocalizedTechItem } from '../../data/translations';
import {
  ShieldAlert,
  Database,
  Globe,
  Box as ContainerIcon,
  Code2,
  Zap,
  Cpu,
  CheckCircle2,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';

interface TechStackOrbitProps {
  rotationProgress: number; // 0 to 1 scrubbed by GSAP
  items?: LocalizedTechItem[];
  invariantsLabel?: string;
  onSelectCard?: (item: LocalizedTechItem) => void;
}

const ICON_MAP: Record<string, LucideIcon> = {
  ShieldAlert,
  Database,
  Globe,
  Container: ContainerIcon,
  Code2,
  Zap,
  Cpu,
  CheckCircle2,
};

function OrbitRings() {
  return (
    <group>
      {/* Top Orbit Ring */}
      <mesh position={[0, 2.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[5.2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.3} />
      </mesh>
      {/* Bottom Orbit Ring */}
      <mesh position={[0, -2.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[5.2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
      </mesh>
      {/* Center floating core glow */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

function OrbitCardItem({
  item,
  index,
  total,
  cylinderRotation,
  invariantsLabel = 'Performance Invariants',
  onSelect,
}: {
  item: LocalizedTechItem;
  index: number;
  total: number;
  cylinderRotation: number;
  invariantsLabel?: string;
  onSelect?: (item: LocalizedTechItem) => void;
}) {
  const cardAngle = (index / total) * Math.PI * 2;
  const radius = 5.0;

  // Calculate position on the cylinder
  const x = Math.sin(cardAngle) * radius;
  const z = Math.cos(cardAngle) * radius;

  // Calculate current facing angle relative to camera
  const currentAngle = (cardAngle + cylinderRotation) % (Math.PI * 2);
  const normalizedAngle = (currentAngle + Math.PI * 2) % (Math.PI * 2);
  // Is this card facing the front (towards camera at +Z)?
  const isFacingFront = normalizedAngle < Math.PI * 0.45 || normalizedAngle > Math.PI * 1.55;
  const isDominantFront = normalizedAngle < Math.PI * 0.25 || normalizedAngle > Math.PI * 1.75;

  const IconComponent = ICON_MAP[item.icon] || Code2;

  return (
    <group position={[x, 0, z]} rotation={[0, cardAngle, 0]}>
      {/* 3D Glass Slab Mesh */}
      <mesh>
        <planeGeometry args={[2.5, 3.4]} />
        <meshStandardMaterial
          color="#06060c"
          roughness={0.15}
          metalness={0.85}
          transparent
          opacity={isFacingFront ? 0.92 : 0.45}
        />
      </mesh>

      {/* Soft rounded edge line */}
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(2.5, 3.4)]} />
        <lineBasicMaterial
          color={isDominantFront ? item.color : '#334155'}
          transparent
          opacity={isDominantFront ? 0.8 : 0.25}
          linewidth={1.2}
        />
      </lineSegments>

      {/* HTML Content Overlay inside 3D space with rounded typography */}
      <Html
        transform
        distanceFactor={3.2}
        position={[0, 0, 0.02]}
        className="pointer-events-auto select-none font-sans"
      >
        <div
          onClick={() => onSelect?.(item)}
          className={`w-[295px] h-[395px] p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 cursor-pointer text-left ${
            isDominantFront
              ? 'bg-neutral-950/85 backdrop-blur-2xl border border-white/20 shadow-[0_16px_50px_rgba(0,0,0,0.85)]'
              : 'bg-neutral-950/60 backdrop-blur-xl border border-white/10 opacity-75 hover:opacity-100'
          }`}
          style={{
            boxShadow: isDominantFront ? `0 0 35px ${item.accentGlow}` : undefined,
          }}
        >
          {/* Top Row: Category & Number */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span
                className="px-3 py-1 rounded-full text-xs font-sans font-medium border"
                style={{
                  color: item.color,
                  borderColor: `${item.color}40`,
                  backgroundColor: `${item.color}15`,
                }}
              >
                {item.category}
              </span>
              <div className="flex items-center gap-1.5 text-neutral-400 group-hover:text-white transition-colors">
                <span className="text-xs font-sans font-medium text-neutral-400">0{index + 1}</span>
                <ArrowUpRight size={14} />
              </div>
            </div>

            {/* Icon & Title */}
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center border shadow-sm"
                style={{
                  backgroundColor: `${item.color}15`,
                  borderColor: `${item.color}35`,
                  color: item.color,
                }}
              >
                <IconComponent size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white font-sans">
                  {item.name}
                </h3>
                <p className="text-xs font-sans font-normal text-neutral-400">
                  {item.tagline}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs font-sans text-neutral-300/90 leading-relaxed mt-3 line-clamp-3">
              {item.description}
            </p>
          </div>

          {/* Bottom Specs List */}
          <div className="border-t border-white/10 pt-3.5">
            <div className="text-xs font-sans font-medium text-neutral-400 mb-2.5">
              {invariantsLabel}
            </div>
            <div className="space-y-1.5">
              {item.specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex items-center gap-2 text-xs font-sans font-medium text-neutral-200">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="truncate">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
}

function CylinderCarousel({
  rotationProgress,
  items,
  invariantsLabel,
  onSelectCard,
}: {
  rotationProgress: number;
  items: LocalizedTechItem[];
  invariantsLabel?: string;
  onSelectCard?: (item: LocalizedTechItem) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const total = items.length;

  // Smooth lerp of rotation
  useFrame(() => {
    if (!groupRef.current) return;
    const targetY = -rotationProgress * Math.PI * 2;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.08);
  });

  const currentRotation = groupRef.current ? groupRef.current.rotation.y : -rotationProgress * Math.PI * 2;

  return (
    <group ref={groupRef}>
      <OrbitRings />
      {items.map((item, index) => (
        <OrbitCardItem
          key={item.id}
          item={item}
          index={index}
          total={total}
          cylinderRotation={currentRotation}
          invariantsLabel={invariantsLabel}
          onSelect={onSelectCard}
        />
      ))}
    </group>
  );
}

export const TechStackOrbit: React.FC<TechStackOrbitProps> = ({
  rotationProgress,
  items = TECH_ORBIT_ITEMS as LocalizedTechItem[],
  invariantsLabel,
  onSelectCard,
}) => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0.2, 8.8], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[0, 4, 6]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[0, -4, 6]} intensity={1.2} color="#f97316" />
        <CylinderCarousel
          rotationProgress={rotationProgress}
          items={items}
          invariantsLabel={invariantsLabel}
          onSelectCard={onSelectCard}
        />
      </Canvas>
    </div>
  );
};
