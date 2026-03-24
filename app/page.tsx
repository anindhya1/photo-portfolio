import fs from 'fs';
import path from 'path';
import RevealImage from './components/RevealImage';

const hindiCaptions: Record<string, string> = {
  'AGRA': 'आगरा',
  'NIAGARA': 'नियाग्रा',
  'MANCHESTER': 'मैनचेस्टर',
  'NEW YORK': 'न्यू यॉर्क',
  'LETCHWORTH': 'लेचवर्थ',
  'SAN FRANCISCO': 'सैन फ्रांसिस्को',
};

export default function Home() {
  const imagesDir = path.join(process.cwd(), 'public/images');
  const images = fs.readdirSync(imagesDir)
    .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
    .sort();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '16vh'}}>
      <h1 style={{ padding: '10vh', marginRight: '27%'}}>photo<br/>portfolio.</h1>
      {images.map((filename) => {
        const caption = filename.replace(/\.[^.]+$/, '').replace(/^\d+_/, '');
        return (
          <RevealImage
            key={filename}
            src={`/images/${filename}`}
            alt={filename}
            caption={caption}
            captionHindi={hindiCaptions[caption.toUpperCase()]}
          />
        );
      })}
    </div>
  );
}
