import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryProps {
  images: string[];
  altPrefix: string;
}

export function Gallery({ images, altPrefix }: GalleryProps) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActive((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActive((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <>
      {/* Main image */}
      <div
        className="relative border border-border overflow-hidden cursor-pointer group"
        onClick={() => setLightbox(true)}
      >
        <img
          src={images[active]}
          alt={`${altPrefix} — photo ${active + 1}`}
          className="w-full h-[340px] sm:h-[440px] lg:h-[520px] object-cover"
        />
        <div className="absolute bottom-3 right-3 bg-ink/80 text-paper px-3 py-1.5 font-mono text-xs">
          {active + 1} / {images.length}
        </div>
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-xs uppercase tracking-widest text-paper bg-ink/70 px-3 py-2">
            Click to enlarge
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 mt-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`border overflow-hidden transition-all ${
              active === i
                ? 'border-ink ring-1 ring-ink'
                : 'border-border hover:border-border-dark opacity-60 hover:opacity-100'
            }`}
            aria-label={`View photo ${i + 1}`}
          >
            <img
              src={img}
              alt={`${altPrefix} — thumbnail ${i + 1}`}
              loading="lazy"
              className="w-full h-16 sm:h-20 object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-4 right-4 text-paper/70 hover:text-paper p-2"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(false);
            }}
            aria-label="Close"
          >
            <X size={24} strokeWidth={1.6} />
          </button>
          <button
            className="absolute left-4 text-paper/70 hover:text-paper p-2"
            onClick={prev}
            aria-label="Previous photo"
          >
            <ChevronLeft size={32} strokeWidth={1.4} />
          </button>
          <img
            src={images[active]}
            alt={`${altPrefix} — photo ${active + 1}`}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 text-paper/70 hover:text-paper p-2"
            onClick={next}
            aria-label="Next photo"
          >
            <ChevronRight size={32} strokeWidth={1.4} />
          </button>
        </div>
      )}
    </>
  );
}
