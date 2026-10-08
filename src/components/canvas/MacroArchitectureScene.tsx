import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

interface MacroArchitectureSceneProps {
  scrollProgress: number; // 0 (extreme macro zoom on chip) to 1 (full blueprint wide view)
}

function SiliconChip() {
  const chipRef = useRef<THREE.Group>(null);
  const coreLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (coreLightRef.current) {
      // Subtle heartbeat pulse on core chip logic
      const pulse = 1.2 + Math.sin(state.clock.elapsedTime * 3) * 0.4;
      coreLightRef.current.intensity = pulse;
    }
    if (chipRef.current) {
      // Gentle micro-float
      chipRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.03;
    }
  });

  return (
    <group ref={chipRef} position={[0, 0, 0]}>
      {/* Substrate Green/Dark PCB Base */}
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[4.2, 0.1, 4.2]} />
        <meshStandardMaterial color="#050a08" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Main Heat Spreader (Titanium / Dark Obsidian) */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[3.2, 0.25, 3.2]} />
        <meshStandardMaterial
          color="#121217"
          roughness={0.12}
          metalness={0.92}
        />
      </mesh>

      {/* Chamfered Metallic Edge Bevel */}
      <lineSegments position={[0, 0.18, 0]}>
        <edgesGeometry args={[new THREE.BoxGeometry(3.22, 0.02, 3.22)]} />
        <lineBasicMaterial color="#38bdf8" transparent opacity={0.8} />
      </lineSegments>

      {/* Core Logic Die (Center Mirror Silicon) */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[1.6, 0.08, 1.6]} />
        <meshStandardMaterial
          color="#030712"
          roughness={0.05}
          metalness={0.98}
        />
      </mesh>

      {/* Core Logic Pulse Light */}
      <pointLight
        ref={coreLightRef}
        position={[0, 0.6, 0]}
        color="#38bdf8"
        intensity={1.5}
        distance={4}
      />

      {/* Gold Bond Contacts (Pins around die) */}
      <GoldPins />

      {/* Glowing Bus Traces on Substrate */}
      <CircuitTraces />
    </group>
  );
}

function GoldPins() {
  const pinPositions = useMemo(() => {
    const list: [number, number, number][] = [];
    const span = 1.0;
    const step = 0.2;
    for (let x = -span; x <= span; x += step) {
      list.push([x, 0.19, -0.9]);
      list.push([x, 0.19, 0.9]);
    }
    for (let z = -span; z <= span; z += step) {
      list.push([-0.9, 0.19, z]);
      list.push([0.9, 0.19, z]);
    }
    return list;
  }, []);

  return (
    <group>
      {pinPositions.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <boxGeometry args={[0.07, 0.04, 0.07]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function CircuitTraces() {
  const lines = useMemo(() => {
    const lineList: THREE.Vector3[][] = [];
    // 4 major high-speed data buses extending out to peripheral nodes
    // North (Edge)
    lineList.push([
      new THREE.Vector3(0, -0.08, -1.6),
      new THREE.Vector3(0, -0.08, -3.8),
    ]);
    lineList.push([
      new THREE.Vector3(0.5, -0.08, -1.6),
      new THREE.Vector3(0.5, -0.08, -3.2),
      new THREE.Vector3(1.5, -0.08, -3.2),
      new THREE.Vector3(1.5, -0.08, -3.8),
    ]);
    // South (Axum API)
    lineList.push([
      new THREE.Vector3(0, -0.08, 1.6),
      new THREE.Vector3(0, -0.08, 3.8),
    ]);
    lineList.push([
      new THREE.Vector3(-0.6, -0.08, 1.6),
      new THREE.Vector3(-0.6, -0.08, 2.8),
      new THREE.Vector3(-1.8, -0.08, 2.8),
      new THREE.Vector3(-1.8, -0.08, 3.8),
    ]);
    // East (Nginx Gateway)
    lineList.push([
      new THREE.Vector3(1.6, -0.08, 0),
      new THREE.Vector3(3.8, -0.08, 0),
    ]);
    // West (Postgres Persistence)
    lineList.push([
      new THREE.Vector3(-1.6, -0.08, 0),
      new THREE.Vector3(-3.8, -0.08, 0),
    ]);

    return lineList;
  }, []);

  return (
    <group>
      {lines.map((pts, idx) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(pts);
        return (
          <primitive key={idx} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({
            color: idx % 2 === 0 ? '#38bdf8' : '#f97316',
            transparent: true,
            opacity: 0.7,
            linewidth: 2,
          }))} />
        );
      })}
    </group>
  );
}

function PeripheralNode({
  position,
  label,
  color,
  sublabel,
}: {
  position: [number, number, number];
  label: string;
  color: string;
  sublabel: string;
}) {
  return (
    <group position={position}>
      {/* Node base slab */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[1.6, 0.15, 1.2]} />
        <meshStandardMaterial color="#0c0e14" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Edge border */}
      <lineSegments position={[0, 0, 0]}>
        <edgesGeometry args={[new THREE.BoxGeometry(1.6, 0.16, 1.2)]} />
        <lineBasicMaterial color={color} transparent opacity={0.65} />
      </lineSegments>
      {/* Node status led */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <pointLight position={[0, 0.3, 0]} color={color} intensity={0.6} distance={2.5} />

      {/* Floating 3D Micro Label - Apple Rounded */}
      <Html position={[0, 0.45, 0]} center distanceFactor={14}>
        <div className="px-3 py-1.5 rounded-xl bg-neutral-950/90 border border-white/20 text-center pointer-events-none backdrop-blur-xl shadow-glass font-sans">
          <div className="text-[11px] font-sans font-semibold text-white tracking-normal whitespace-nowrap">
            {label}
          </div>
          <div className="text-[9px] font-sans text-neutral-400 whitespace-nowrap font-normal">
            {sublabel}
          </div>
        </div>
      </Html>
    </group>
  );
}

function CameraRig({ scrollProgress }: { scrollProgress: number }) {
  // Ultra-smooth lerping between Macro zoom and Wide Architecture view
  useFrame(({ camera }) => {
    // Macro Zoom: Camera starts at z=2.2, y=0.5, looking right at the core die
    // Wide Blueprint: Camera moves back to z=8.2, y=4.5, tilting down
    const p = Math.max(0, Math.min(1, scrollProgress));

    const targetZ = THREE.MathUtils.lerp(2.2, 8.5, p);
    const targetY = THREE.MathUtils.lerp(0.5, 4.5, p);
    const targetX = THREE.MathUtils.lerp(0, 0.2, p);

    const targetRotX = THREE.MathUtils.lerp(-0.15, -0.55, p);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.08);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.08);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08);

    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, targetRotX, 0.08);
  });

  return null;
}

export const MacroArchitectureScene: React.FC<MacroArchitectureSceneProps & {
  nodeLabels?: { edge: string; gateway: string; services: string; persistence: string };
}> = ({
  scrollProgress,
  nodeLabels,
}) => {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0.5, 2.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        {/* Apple key light studio */}
        <spotLight
          position={[4, 8, 5]}
          intensity={2.2}
          angle={0.6}
          penumbra={0.8}
          color="#ffffff"
        />
        {/* Rim backlight */}
        <pointLight position={[-5, 3, -4]} intensity={1.8} color="#38bdf8" />
        <pointLight position={[5, -2, 4]} intensity={1.2} color="#f97316" />

        <CameraRig scrollProgress={scrollProgress} />

        <SiliconChip />

        {/* 4 Peripheral Architecture Nodes */}
        {/* North: Cloudflare Ingress */}
        <PeripheralNode
          position={[0, 0, -4.2]}
          label={nodeLabels?.edge || "EDGE INGRESS"}
          sublabel="Cloudflare Tunnel"
          color="#10b981"
        />
        {/* East: Nginx Origin TLS */}
        <PeripheralNode
          position={[4.2, 0, 0]}
          label={nodeLabels?.gateway || "ORIGIN GATEWAY"}
          sublabel="Nginx Proxy"
          color="#38bdf8"
        />
        {/* South: Axum Core Engine */}
        <PeripheralNode
          position={[0, 0, 4.2]}
          label={nodeLabels?.services || "CORE AXUM"}
          sublabel="Tokio Runtime"
          color="#f97316"
        />
        {/* West: PostgreSQL 18 & Redis */}
        <PeripheralNode
          position={[-4.2, 0, 0]}
          label={nodeLabels?.persistence || "PERSISTENCE"}
          sublabel="PostgreSQL 18"
          color="#8b5cf6"
        />
      </Canvas>
    </div>
  );
};
