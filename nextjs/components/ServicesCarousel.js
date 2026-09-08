'use client';
import { useEffect, useRef, useState } from 'react';
import { SERVICES } from '@/lib/site';

const TINTS = ['linear-gradient(165deg,#0b1a1c,#0d1315)','linear-gradient(165deg,#0e1022,#0d0e15)','linear-gradient(165deg,#12151b,#0d0e11)','linear-gradient(165deg,#0a1420,#0c0f15)','linear-gradient(165deg,#150f1e,#0f0d14)'];
const GLOWS = [
  'radial-gradient(ellipse 70% 100% at 28% 35%, rgba(0,229,255,.24), transparent 68%), #081114',
  'radial-gradient(ellipse 65% 95% at 70% 30%, rgba(0,229,255,.20), transparent 68%), #0a0d18',
  'radial-gradient(ellipse 75% 100% at 50% 20%, rgba(0,229,255,.18), transparent 66%), #0c0f13',
  'radial-gradient(ellipse 70% 95% at 25% 70%, rgba(0,229,255,.22), transparent 68%), #081019',
  'radial-gradient(ellipse 70% 95% at 72% 65%, rgba(0,229,255,.18), transparent 68%), #100c16',
];

export default function ServicesCarousel() {
  const [mode, setMode] = useState('grid');
  const secRef = useRef(null), trackRef = useRef(null);

  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = matchMedia('(pointer: coarse)').matches;
    setMode(reduced ? 'grid' : coarse ? 'snap' : 'pin');
  }, []);

  useEffect(() => {
    if (mode !== 'pin') return;
    const sec = secRef.current, track = trackRef.current;
    if (!sec || !track) return;
    let extra = 0, target = 0, current = 0, raf;
    const measure = () => { extra = Math.max(0, track.scrollWidth - innerWidth + 24); sec.style.height = (innerHeight + extra) + 'px'; };
    const onScroll = () => { const top = sec.getBoundingClientRect().top + scrollY; target = extra ? Math.min(1, Math.max(0, (scrollY - top) / extra)) : 0; };
    const onResize = () => { measure(); onScroll(); };
    measure(); onScroll();
    addEventListener('resize', onResize);
    addEventListener('scroll', onScroll, { passive: true });
    const loop = () => { current += (target - current) * .12; track.style.transform = `translate3d(${-current * extra}px,0,0)`; raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', onResize); removeEventListener('scroll', onScroll); sec.style.height = ''; };
  }, [mode]);

  const viewport = mode === 'pin' ? { position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' } : {};
  const trackStyle = mode === 'pin'
    ? { display: 'flex', alignItems: 'center', gap: 40, width: 'max-content', padding: '0 clamp(20px,5vw,64px)', willChange: 'transform' }
    : mode === 'snap'
      ? { display: 'flex', gap: 18, overflowX: 'auto', scrollSnapType: 'x mandatory', padding: '24px 20px 34px' }
      : { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, maxWidth: 1160, margin: '0 auto', padding: 'clamp(64px,10vh,110px) clamp(20px,5vw,64px)' };
  const intro = mode === 'pin' ? { flex: '0 0 auto', width: 'min(440px, 62vw)' } : mode === 'snap' ? { flex: '0 0 auto', width: '74vw', maxWidth: 400, scrollSnapAlign: 'start' } : { gridColumn: '1 / -1', maxWidth: 620 };
  const cardBase = mode === 'pin' ? { width: '68vw', maxWidth: 980, height: '78vh', maxHeight: 680, flex: '0 0 auto' } : mode === 'snap' ? { width: '85vw', maxWidth: 480, minHeight: 480, flex: '0 0 auto', scrollSnapAlign: 'center' } : { minHeight: 440 };

  return (
    <section id="services" ref={secRef} style={{ position: 'relative' }}>
      <div style={viewport}>
        <div ref={trackRef} style={trackStyle}>
          <div style={intro}>
            <h2 style={{ margin: '0 0 14px', fontWeight: 700, fontSize: 'clamp(30px,4.4vw,52px)', letterSpacing: '-.02em', color: '#fff' }}>What we do.</h2>
            <p style={{ margin: 0, color: '#a7adb6', fontSize: 'clamp(15.5px,1.6vw,18px)', lineHeight: 1.65 }}>Every service exists to solve a problem — the tech is just how we get there.</p>
            <p style={{ margin: '26px 0 0', fontSize: 13, letterSpacing: '.1em', fontWeight: 600, color: '#6ee7f5' }}>KEEP SCROLLING →</p>
          </div>
          {SERVICES.map((s, i) => (
            <div key={s.n} style={{ ...cardBase, position: 'relative', borderRadius: 32, border: '1px solid rgba(255,255,255,.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 18, padding: 'clamp(22px,3vw,44px)', background: TINTS[i] }}>
              <div style={{ position: 'relative', borderRadius: 999, overflow: 'hidden', flexShrink: 0, alignSelf: mode === 'pin' ? 'flex-end' : 'stretch', width: mode === 'pin' ? '65%' : '100%', height: mode === 'pin' ? '40%' : 150, border: '1px solid rgba(0,229,255,.14)', background: GLOWS[i] }}>
                {s.media && <video src={s.media} autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
              </div>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 14, flex: 1, justifyContent: 'flex-end' }}>
                <h3 style={{ margin: 0, fontWeight: 700, fontSize: 'clamp(24px,2.8vw,40px)', letterSpacing: '-.02em', color: '#fff', maxWidth: 640 }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 'clamp(14.5px,1.4vw,17px)', lineHeight: 1.6, color: '#b9bec6', maxWidth: 560 }}>{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
                  {s.chips.map(c => <span key={c} style={{ padding: '6px 14px', borderRadius: 999, border: '1px solid rgba(0,229,255,.25)', background: 'rgba(0,229,255,.05)', fontSize: 12.5, fontWeight: 500, color: '#7df3ff' }}>{c}</span>)}
                </div>
              </div>
              <div style={{ position: 'absolute', right: 20, bottom: -30, fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 'clamp(130px,16vw,230px)', lineHeight: 1, color: 'rgba(0,229,255,.05)', pointerEvents: 'none' }}>{s.n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
