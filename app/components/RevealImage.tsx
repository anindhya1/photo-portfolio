'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: '100' });
const poppins = Poppins({ subsets: ['latin', 'devanagari'], weight: '100' });

export default function RevealImage({ src, alt, caption, captionHindi }: { src: string; alt: string; caption?: string; captionHindi?: string }) {
  const ref = useRef(null);

  const { scrollYProgress: entryProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: ref,
    offset: ['center center', 'end start'],
  });

  const clipPath = useTransform(
    entryProgress,
    [0, 1],
    ['inset(0% 50% 0% 50%)', 'inset(0% 0% 0% 0%)']
  );

  const scale = useTransform(exitProgress, [0, 1], [1, 1.3]);
  const textY = useTransform(exitProgress, [0, 0.25], ['100%', '0%']);

  return (
    <motion.div ref={ref} style={{ clipPath, width: '100%', marginBottom: '200px', overflow: 'hidden', position: 'relative' }}>
      <motion.div style={{ scale }}>
        <Image
          src={src}
          alt={alt}
          width={800}
          height={500}
          style={{ width: '100%', height: 'auto', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', display: 'block' }}
        />
      </motion.div>
      {caption && (
        <motion.div
          style={{
            y: textY,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '40px 32px 24px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
            color: '#fff',
            fontSize: '12rem',
            fontWeight: 100,
            fontFamily: poppins.style.fontFamily,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {captionHindi && <span style={{ textAlign: 'right' }}>{captionHindi}</span>}
          <span>{caption}</span>
        </motion.div>
      )}
    </motion.div>
  );
}
