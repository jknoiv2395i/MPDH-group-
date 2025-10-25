import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '@/data/blogPosts';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/use-seo';

const BlogIndex = () => {
  useSEO({ title: 'MPHD Group Blog - Nagpur Real Estate Insights', description: 'Latest articles and guides on Nagpur real estate, property buying tips, market trends and locality guides.' });

  return (
    <div className="min-h-screen bg-white">
      <FigmaNavBar />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-instrument mb-6">MPHD Group Blog</h1>
        <p className="text-lg text-gray-700 mb-8">Insights, guides and market updates for Nagpur real estate.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map(post => (
            <article key={post.slug} className="p-4 border rounded-lg">
              <h2 className="text-xl font-semibold mb-2"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p className="text-sm text-gray-600 mb-3">{post.description}</p>
              <Link to={`/blog/${post.slug}`} className="text-blue-600">Read more →</Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;
