"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
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
