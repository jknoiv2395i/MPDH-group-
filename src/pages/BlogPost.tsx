import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '@/data/blogPosts';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/use-seo';
import { SEO_CONFIG } from '@/lib/seo-constants';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <FigmaNavBar />
        <main className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Post Not Found</h1>
          <p className="mt-4">The requested blog post could not be found.</p>
          <Link to="/blog" className="text-blue-600 mt-4 inline-block">Back to blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const canonicalUrl = `${window.location.origin}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "headline": post.title,
    "description": post.description,
    "image": SEO_CONFIG.defaultImage,
    "author": {
      "@type": "Organization",
      "name": SEO_CONFIG.company.name
    },
    "publisher": {
      "@type": "Organization",
      "name": SEO_CONFIG.company.name,
      "logo": {
        "@type": "ImageObject",
        "url": SEO_CONFIG.defaultImage
      }
    },
    "datePublished": new Date().toISOString(),
    "articleBody": post.excerpt
  };

  useSEO({ title: post.title, description: post.description, canonicalUrl, structuredData: articleSchema });

  return (
    <div className="min-h-screen bg-white">
      <FigmaNavBar />
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-instrument mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-6">{post.excerpt}</p>
        <article className="prose max-w-none">
          <p>{post.excerpt} Full draft available in the content package.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
