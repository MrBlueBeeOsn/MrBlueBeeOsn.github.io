// src/components/BeeSwarm.jsx
import { useEffect } from 'react';
import { startBeeFlying } from '../utils/beeMotion';

export default function BeeSwarm() {
  useEffect(() => {
    startBeeFlying(); // gọi hiệu ứng sau khi render
  }, []);

  return (
    <div className="swarm">
      <div className="bee" />
      <div className="bee" />
      <div className="bee" />
    </div>
  );
}
