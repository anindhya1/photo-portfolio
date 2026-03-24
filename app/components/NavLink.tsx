'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.div style={{ position: 'relative', display: 'inline-block' }} initial="rest" whileHover="hover">
      <Link href={href} style={{ color: '#000000', textDecoration: 'none' }}>
        {children}
      </Link>
      <motion.span
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          backgroundColor: '#00bfff',
          transformOrigin: 'left',
        }}
      />
    </motion.div>
  );
}
