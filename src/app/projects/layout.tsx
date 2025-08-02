import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects - Rudaiba",
  description: "Explore Rudaiba's innovative projects including TKS work on direct air capture, data center cooling, and solar efficiency research",
  icons: {
    icon: '/images/png-png-urbanbrush-1733.jpg',
    shortcut: '/images/png-png-urbanbrush-1733.jpg',
    apple: '/images/png-png-urbanbrush-1733.jpg',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}