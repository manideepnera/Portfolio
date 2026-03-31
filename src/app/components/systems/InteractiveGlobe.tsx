'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let rotation = 0;

    const drawGlobe = () => {
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 300);
      gradient.addColorStop(0, '#8ECAE6');
      gradient.addColorStop(0.5, '#FFB703');
      gradient.addColorStop(1, '#0a0a0a');
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 0.1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;

      // Draw outer circle (globe border)
      ctx.strokeStyle = '#8ECAE6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
      ctx.stroke();

      // Draw rotating rings
      ctx.strokeStyle = '#FFB703';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;

      // Ring 1 - use absolute values to prevent negative radius
      ctx.beginPath();
      const radius1X = Math.abs(150 * Math.cos(rotation)) || 10;
      const radius1Y = Math.abs(60 * Math.sin(rotation)) || 10;
      ctx.ellipse(centerX, centerY, radius1X, radius1Y, rotation, 0, Math.PI * 2);
      ctx.stroke();

      // Ring 2 - use absolute values to prevent negative radius
      ctx.beginPath();
      const radius2X = Math.abs(150 * Math.sin(rotation * 0.7)) || 10;
      const radius2Y = Math.abs(80 * Math.cos(rotation * 0.5)) || 10;
      ctx.ellipse(centerX, centerY, radius2X, radius2Y, rotation * 0.5, 0, Math.PI * 2);
      ctx.stroke();

      ctx.globalAlpha = 1;

      // Draw center nodes (glowing points)
      const nodes = [
        { x: centerX, y: centerY, size: 12, color: '#8ECAE6', label: 'Vision' },
        {
          x: centerX + Math.cos(rotation) * 120,
          y: centerY + Math.sin(rotation) * 120,
          size: 8,
          color: '#FFB703',
          label: 'CtoC',
        },
        {
          x: centerX + Math.cos(rotation + Math.PI / 2) * 120,
          y: centerY + Math.sin(rotation + Math.PI / 2) * 120,
          size: 8,
          color: '#FB8500',
          label: 'USE',
        },
        {
          x: centerX + Math.cos(rotation + Math.PI) * 100,
          y: centerY + Math.sin(rotation + Math.PI) * 100,
          size: 6,
          color: '#8ECAE6',
          label: 'Corex',
        },
      ];

      nodes.forEach((node) => {
        // Draw glow
        const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 3);
        glowGradient.addColorStop(0, node.color);
        glowGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGradient;
        ctx.globalAlpha = 0.4;
        ctx.fillRect(node.x - node.size * 3, node.y - node.size * 3, node.size * 6, node.size * 6);

        // Draw node
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connecting lines
      ctx.strokeStyle = '#8ECAE6';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.2;
      nodes.forEach((node, i) => {
        if (i > 0) {
          ctx.beginPath();
          ctx.moveTo(nodes[0].x, nodes[0].y);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        }
      });

      rotation += 0.005;
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      drawGlobe();
      requestAnimationFrame(animate);
    };

    // Set canvas size
    canvas.width = 600;
    canvas.height = 600;

    animate();
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full max-w-2xl h-auto"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="text-center space-y-2">
          <div className="text-sm text-white/40">Vision in Motion</div>
          <div className="text-xs text-white/30">An interconnected ecosystem of ideas</div>
        </div>
      </motion.div>
    </div>
  );
}
