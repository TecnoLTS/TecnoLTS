'use client';

export default function PortafolioContent() {
  return (
    <iframe
      src="/api/portafolio/content"
      sandbox="allow-scripts allow-same-origin"
      className="fixed inset-0 h-full w-full border-0"
      title="TecnoLTS Portafolio"
    />
  );
}
