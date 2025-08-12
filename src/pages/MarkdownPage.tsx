import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'react-router-dom';

const MarkdownPage: React.FC = () => {
  const { filename } = useParams<{ filename: string }>();
  const [markdown, setMarkdown] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        console.log(`Attempting to fetch: /resources/${filename}.md`);
        const response = await fetch(`/resources/${filename}.md`);
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Failed to fetch ${filename}.md: ${response.statusText}`, errorText);
          throw new Error(`Failed to fetch ${filename}.md: ${response.statusText}. Details: ${errorText}`);
        }
        const text = await response.text();
        console.log("Markdown fetched successfully:", text.substring(0, 200) + "..."); // Log first 200 chars
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
      <main className="flex-grow container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 prose prose-lg dark:prose-invert">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ node, ...props }) => {
              let imgSrc = props.src;
              // Check if the image source is a Next.js optimized image URL
              if (imgSrc && imgSrc.startsWith('/_next/image?url=')) {
                try {
                  const urlParams = new URLSearchParams(imgSrc.split('?')[1]);
                  const decodedUrl = urlParams.get('url');
                  if (decodedUrl) {
                    imgSrc = decodeURIComponent(decodedUrl);
                  }
                } catch (e) {
                  console.error("Error parsing Next.js image URL:", e);
                }
              }
              return (
                <img
                  src={imgSrc}
                  alt={props.alt}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              );
            },
            a: ({ node, ...props }) => {
              const isExternal = props.href && (props.href.startsWith('http://') || props.href.startsWith('https://'));
              return (
                <a
                  {...props}
                  {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="text-blue-600 hover:underline"
                />
              );
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </main>
      <Footer />
    </div>
  );
};

export default MarkdownPage;