import Link from 'next/link';
import HeroParticles from '@/components/HeroParticles';
import ServicesCarousel from '@/components/ServicesCarousel';
import ContactSection from '@/components/ContactSection';
import Reveal from '@/components/Reveal';
import { CASES } from '@/lib/site';

const PAINS = [
  'Your website gets traffic but no sales.',
  'Your operations run on spreadsheets and duct tape.',
  "You know AI could help but don't know where to start.",
  'Your last dev team built it and disappeared.',
];
const STEPS = [
  { n: '01', title: 'Diagnose', desc: "We dig into your numbers, funnel, and systems to find what's actually broken." },
  { n: '02', title: 'Design the Solution', desc: 'You get a clear plan with scope, cost, and expected outcome — before we build.' },
  { n: '03', title: 'Build with the Right Tech', desc: 'We build only what solves the problem, with tech chosen for the job.' },
  { n: '04', title: 'Measure & Grow', desc: 'We track results against the goal and keep improving what works.' },
];
const WHY = [
  { title: 'Senior, engineering-led team', desc: 'You talk to the people doing the work — no layers, no hand-offs.' },
  { title: 'All disciplines under one roof', desc: 'Strategy, AI, engineering, design, and marketing on one team.' },
  { title: 'US & EU timezone coverage', desc: 'Overlap with your working hours, wherever you are.' },
  { title: 'We diagnose before we build', desc: "You'll never pay for software that solves the wrong problem." },
];
const card = { padding: '26px 24px', borderRadius: 14, background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)', backdropFilter: 'blur(8px)' };
const h2 = { margin: '0 0 12px', fontWeight: 700, fontSize: 'clamp(28px,4vw,42px)', letterSpacing: '-.02em', color: '#fff' };

export default function Home() {
  return (
    <main>
      <header style={{ position: 'relative', padding: 'clamp(90px,14vh,160px) clamp(20px,5vw,64px) clamp(80px,12vh,140px)', textAlign: 'center' }}>
        <HeroParticles />
        <div style={{ position: 'relative', maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26 }}>
          <div style={{ padding: '7px 16px', borderRadius: 999, border: '1px solid rgba(0,229,255,.3)', background: 'rgba(0,229,255,.06)', fontSize: 13, fontWeight: 500, color: '#7df3ff', letterSpacing: '.04em' }}>SOLUTIONS AGENCY · AI · ENGINEERING · DESIGN · MARKETING</div>
          <h1 style={{ margin: 0, fontWeight: 700, fontSize: 'clamp(38px,6.4vw,72px)', lineHeight: 1.06, letterSpacing: '-.025em', color: '#fff' }}>Stuck? We find the problem.<br />Then we <span style={{ color: '#00e5ff', textShadow: '0 0 32px rgba(0,229,255,.45)' }}>build the fix.</span></h1>
          <p style={{ margin: 0, maxWidth: 620, fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.6, color: '#a7adb6' }}>Team OmniAI is a cross-functional team solving business growth problems with AI, engineering, design, and marketing.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginTop: 8 }}>
            <Link href="/contact" style={{ padding: '15px 30px', borderRadius: 10, background: '#00e5ff', color: '#06171a', fontWeight: 600, fontSize: 16, boxShadow: '0 0 30px rgba(0,229,255,.4)' }}>Get a Free Problem Audit</Link>
            <Link href="/work" style={{ padding: '15px 30px', borderRadius: 10, border: '1px solid rgba(255,255,255,.18)', color: '#e8eaed', fontWeight: 600, fontSize: 16 }}>See Our Work</Link>
          </div>
        </div>
      </header>

      <section id="problems" style={{ padding: 'clamp(64px,10vh,110px) clamp(20px,5vw,64px)', maxWidth: 1160, margin: '0 auto' }}>
        <h2 style={h2}>Sound familiar?</h2>
        <p style={{ margin: '0 0 40px', color: '#a7adb6', fontSize: 17, maxWidth: 560 }}>Most growth problems aren&apos;t mysteries. They&apos;re just hard to see from the inside.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
          {PAINS.map((p, i) => <Reveal key={p} delay={i*80}><div style={{ ...card, height: '100%' }}><p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: '#dfe2e6', fontWeight: 500 }}>{p}</p></div></Reveal>)}
        </div>
      </section>

      <section id="process" style={{ padding: 'clamp(64px,10vh,110px) clamp(20px,5vw,64px)', background: 'linear-gradient(180deg,transparent,rgba(0,229,255,.025),transparent)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={h2}>We focus on the process.</h2>
          <p style={{ margin: '0 0 48px', color: '#a7adb6', fontSize: 17, maxWidth: 560 }}>No guesswork. Every engagement follows the same path from problem to proof.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 21, left: '8%', right: '8%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(0,229,255,.45),rgba(0,229,255,.45),transparent)' }} />
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i*80}>
                <div style={{ position: 'relative', padding: '0 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#0d0d0f', border: '1px solid rgba(0,229,255,.5)', boxShadow: '0 0 16px rgba(0,229,255,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-grotesk)', fontWeight: 700, color: '#00e5ff', fontSize: 15 }}>{s.n}</div>
                  <h3 style={{ margin: 0, fontWeight: 600, fontSize: 18, color: '#fff' }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: '#a7adb6' }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServicesCarousel />

      <section id="work" style={{ padding: 'clamp(64px,10vh,110px) clamp(20px,5vw,64px)', background: 'linear-gradient(180deg,transparent,rgba(0,229,255,.025),transparent)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={h2}>Problems we&apos;ve solved.</h2>
          <p style={{ margin: '0 0 40px', color: '#a7adb6', fontSize: 17, maxWidth: 560 }}>A few examples of what happens when you diagnose before you build.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 20 }}>
            {CASES.slice(0, 3).map(c => (
              <Link key={c.slug} href={`/work/${c.slug}`} style={{ display: 'flex', flexDirection: 'column', borderRadius: 16, background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)', overflow: 'hidden', color: 'inherit' }}>
                <div style={{ aspectRatio: '16 / 10', background: 'linear-gradient(160deg,rgba(0,229,255,.06),rgba(255,255,255,.02))' }}>
                  <img src={c.cover} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '22px 24px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                    <span style={{ padding: '4px 11px', borderRadius: 999, border: '1px solid rgba(255,255,255,.14)', fontSize: 11, letterSpacing: '.08em', fontWeight: 600, color: '#9aa0a8' }}>{c.industry}</span>
                    <span style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 19, color: '#00e5ff' }}>{c.metric}</span>
                  </div>
                  <h3 style={{ margin: 0, fontWeight: 700, fontSize: 19, color: '#fff' }}>{c.title}</h3>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: '#a7adb6' }}>{c.problem}</p>
                  <span style={{ marginTop: 4, fontSize: 13, fontWeight: 600, color: '#6ee7f5' }}>View case study →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <Link href="/work" style={{ padding: '12px 26px', borderRadius: 10, border: '1px solid rgba(0,229,255,.45)', color: '#00e5ff', fontWeight: 600, fontSize: 14.5, background: 'rgba(0,229,255,.05)' }}>See all case studies →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(64px,10vh,110px) clamp(20px,5vw,64px)', maxWidth: 1160, margin: '0 auto' }}>
        <h2 style={{ ...h2, marginBottom: 40 }}>Why teams pick us.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 28 }}>
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i*80}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingLeft: 18, borderLeft: '2px solid rgba(0,229,255,.45)' }}>
                <h3 style={{ margin: 0, fontWeight: 600, fontSize: 17, color: '#fff' }}>{w.title}</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: '#a7adb6' }}>{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" style={{ background: 'radial-gradient(ellipse 70% 90% at 50% 100%, rgba(0,229,255,.06), transparent)' }}>
        <ContactSection />
      </section>
    </main>
  );
}
