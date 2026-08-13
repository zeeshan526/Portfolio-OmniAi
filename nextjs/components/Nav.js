'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV } from '@/lib/site';

export default function Nav() {
  const path = usePathname();
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '14px clamp(20px, 5vw, 64px)', background: 'rgba(13,13,15,.72)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'block', width: 40, height: 40, overflow: 'hidden', position: 'relative' }}>
          <img src="/logo.png" alt="OmniAI" style={{ position: 'absolute', width: '240%', height: '240%', left: '-6%', top: '-70%', mixBlendMode: 'screen' }} />
        </span>
        <span style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 19, color: '#fff', letterSpacing: '-.01em' }}>Omni<span style={{ color: '#00e5ff' }}>AI</span></span>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px, 2.5vw, 28px)', fontSize: 14, fontWeight: 500 }}>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} style={{ color: path === n.href ? '#fff' : '#b9bec6' }}>{n.label}</Link>
        ))}
        <Link href="/contact" style={{ padding: '9px 18px', borderRadius: 8, background: '#00e5ff', color: '#06171a', fontWeight: 600, boxShadow: '0 0 18px rgba(0,229,255,.35)' }}>Free Audit</Link>
      </div>
    </nav>
  );
}
