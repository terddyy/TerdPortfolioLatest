import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogPosts } from "@/components/portfolio/BlogSection"; // Assuming blogPosts is exported

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === slug);
    setPost(foundPost);
  }, [slug]);

  if (!post) {
    return <div className="container mx-auto p-8">Blog post not found.</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
        <span className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          {post.date}
        </span>
        <span>{post.readTime}</span>
      </div>
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.fullContent }}
      />
    </div>
  );
};

export default BlogPost; 