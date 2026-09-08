'use client';
import { useEffect, useRef } from 'react';

export default function HeroParticles() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d'), dpr = Math.min(devicePixelRatio || 1, 2);
    let w, h, pts, raf;
    const resize = () => {
      w = c.width = c.offsetWidth * dpr; h = c.height = c.offsetHeight * dpr;
      pts = Array.from({ length: 55 }, () => ({ x: Math.random()*w, y: Math.random()*h, vx: (Math.random()-.5)*.35*dpr, vy: (Math.random()-.5)*.35*dpr }));
    };
    resize(); addEventListener('resize', resize);
    const L = 140 * dpr;
    const tick = () => {
      ctx.clearRect(0,0,w,h);
      for (const p of pts) { p.x += p.vx; p.y += p.vy; if (p.x<0||p.x>w) p.vx*=-1; if (p.y<0||p.y>h) p.vy*=-1; }
      ctx.lineWidth = dpr;
      for (let i=0;i<pts.length;i++) for (let j=i+1;j<pts.length;j++) {
        const d = Math.hypot(pts[i].x-pts[j].x, pts[i].y-pts[j].y);
        if (d < L) { ctx.strokeStyle = `rgba(0,229,255,${(1-d/L)*.16})`; ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke(); }
      }
      ctx.fillStyle = 'rgba(0,229,255,.55)';
      pts.forEach(p => { ctx.beginPath(); ctx.arc(p.x,p.y,1.6*dpr,0,7); ctx.fill(); });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />;
}
