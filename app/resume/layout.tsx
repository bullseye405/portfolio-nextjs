import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Samir Prajapati',
  description: 'Personal Website',
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
