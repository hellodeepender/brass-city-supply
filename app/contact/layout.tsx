import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Quote | Brass City Supply',
  description: 'Get a wholesale quote for brass, copper, steel or aluminum products. Fast response, flexible MOQs, worldwide shipping from Moradabad, India.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
