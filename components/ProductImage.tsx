'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProductImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  // Maintain backward compatibility: when the image fails, hide it
  // (matching the original behavior of e.currentTarget.style.display = 'none')
  if (hasError) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}
