import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface MarkdownPageProps {
  filename: string;
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({ filename }) => {
  const [markdown, setMarkdown] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/${filename}.md`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${filename}.md: ${response.statusText}`);
        }
        const text = await response.text();
        setMarkdown(text);
      } catch (err: any) {
        console.error('Error fetching markdown:', err);
        setError(err.message);
      }
    };

    if (filename) {
      fetchMarkdown();
    }
  }, [filename]);

  if (error) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Error Loading Content</h1>
          <p className="text-lg text-muted-foreground">{error}</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 prose dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </main>
      <Footer />
    </div>
  );
};

export default MarkdownPage;