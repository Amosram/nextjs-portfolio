'use client';

import { useState, useCallback, useTransition } from 'react';
import { motion } from 'framer-motion';
import Title from './Title';
import Link from 'next/link';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
}

const TechNewsFeature: React.FC = () => {
  const [query, setQuery] = useState('');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const fetchTechNews = useCallback(() => {
    if (!query.trim()) {
      setError('Please enter a query.');
      return;
    }

    startTransition(async () => {
      setError(null);

      try {
        const response = await fetch('/api/tech-blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: `latest tech ${query}` }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch news.');
        }

        const data = await response.json();
        setNews(data.results || []);
      } catch (err) {
        setError('An error occurred while fetching news.');
        console.error(err);
      }
    });
  }, [query]);

  return (
    <section className=" min-h-screen bg-black-100 w-full px-4 lg:px-16 xl:px-32  mx-auto p-6">

        <div className='min-h-screen border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.40)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] rounded-xl p-6'>
            <div className="flex flex-col items-center mb-8">
                <Title text="Stay Updated" coverText="BLOGS" />
                <p className="text-center text-base text-neutral-400">
                    Get the latest tech news and insights with my AI-powered search.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-2 mb-4 lg:relative">
                
                <textarea
                rows={4}
                maxLength={200}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about the latest tech news..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500/80 border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group resize-none"
                ></textarea>
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={fetchTechNews}
                disabled={isPending}
                className="px-4 py-2 rounded-lg disabled:opacity-50 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-white border border-white dark:border-white text-black rounded-lg font-semibold transform transition duration-400 cursor-pointer lg:absolute lg:right-2 lg:top-1/2 lg:transform lg:-translate-y-1/2"
                >
                {isPending ? 'Loading...' : 'Search'}
                </motion.button>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="space-y-4">
                {news.length === 0 && !isPending && !error && (
                <p className="text-neutral-400">No results yet. Please, try searching</p>
                )}
                {news.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-lg font-semibold">
                        <Link href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {item.title}
                        </Link>
                        </h3>
                        <p className="text-neutral-600">{item.description}</p>
                        <p className="text-sm text-neutral-500">
                        Source: {item.source} | Published: {new Date(item.publishedAt).toLocaleDateString()}
                        </p>
                    </motion.div>
                ))}
            </div>

        </div>
          
    </section>
  );
};

export default TechNewsFeature;