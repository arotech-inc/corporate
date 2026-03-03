"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 60 },
          color: { value: "#6366f1" },
          links: {
            enable: true,
            color: "#6366f1",
            opacity: 0.2,
          },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}