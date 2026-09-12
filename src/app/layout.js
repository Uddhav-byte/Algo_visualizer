import './globals.css';

export const metadata = {
  title: 'Advanced DSA Canvas',
  description: 'Interactive structural visualizations for dynamic programming, sliding windows, and complex graph traversals.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}