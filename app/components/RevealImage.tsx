'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function RevealImage({ src, alt }: { src: string; alt: string }) {
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

  return (
    <motion.div ref={ref} style={{ clipPath, width: '100%', marginBottom: '200px', overflow: 'hidden' }}>
      <motion.div style={{ scale }}>
        <Image
          src={src}
          alt={alt}
          width={800}
          height={500}
          style={{ width: '100%', height: 'auto', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
        />
      </motion.div>
    </motion.div>
  );
}
