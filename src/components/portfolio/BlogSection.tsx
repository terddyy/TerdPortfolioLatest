import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FullScreenModal } from "@/components/ui/FullScreenModal";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    title: "The Rise of AI Agent Coding: Building Autonomous Developers",
    date: "August 20, 2025",
    readTime: "4 min read",
    excerpt: "AI agents are no longer just research toys—they’re evolving into autonomous coding assistants that can write, test, and deploy software with minimal human input. This post explores how AI agents are changing the way we build applications.",
    fullContent: `
      <p>This is the full content of the blog post. It will contain much more detailed information about the rise of AI agent coding and how it's changing software development.</p>
      <p>Here, you can expand on the concepts introduced in the excerpt, provide examples, discuss implications, and offer insights into the future of autonomous development.</p>
      <h3>The Evolution of AI in Coding</h3>
      <p>AI has been assisting developers for a while, from intelligent code completion to automated testing. However, the emergence of AI agents signifies a new era—one where AI can autonomously write, test, and even deploy code with minimal human intervention.</p>
      <h4>Key Characteristics of AI Agents</h4>
      <ul>
        <li><b>Autonomy:</b> Ability to operate independently without constant human oversight.</li>
        <li><b>Goal-Oriented:</b> Designed to achieve specific objectives, such as building a feature or fixing a bug.</li>
        <li><b>Learning and Adaptation:</b> Can learn from their experiences and adapt their strategies to improve performance.</li>
        <li><b>Tool Use:</b> Capable of utilizing various tools, including IDEs, version control systems, and deployment pipelines.</li>
      </ul>
      <h3>Impact on Software Development</h3>
      <p>The rise of AI agents will fundamentally transform the software development lifecycle:</p>
      <ul>
        <li><b>Increased Efficiency:</b> Automating repetitive tasks allows human developers to focus on higher-level design and complex problem-solving.</li>
        <li><b>Faster Iteration:</b> Agents can rapidly prototype and iterate on solutions, accelerating the development process.</li>
        <li><b>Improved Quality:</b> AI agents can identify and fix bugs more effectively, leading to more robust and secure software.</li>
        <li><b>Accessibility:</b> Lowering the barrier to entry for individuals with limited coding experience by enabling them to describe their requirements in natural language.</li>
      </ul>
      <h3>Challenges and Future Outlook</h3>
      <p>While the potential benefits are immense, challenges remain, including ensuring the reliability and ethical implications of autonomous code generation. The future of software development will likely involve a collaborative ecosystem where human developers and AI agents work hand-in-hand to build more complex and innovative applications.</p>
    `,
    slug: "the-rise-of-ai-agent-coding"
  }
];

export const BlogSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  const handlePostClick = (post) => {
    setSelectedPost(post);
    navigate(`/blog/${post.slug}`);
  };

  return (
    <>
      <Card className="shadow-sm min-h-[22rem]">
        <CardHeader className="py-4 px-5">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-foreground">Recent Blog Posts</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary/80 text-xs flex items-center gap-1"
              onClick={() => setOpen(true)}
            >
              View All
              <ExternalLink className="w-3 h-3" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-5 pb-5">
          {blogPosts.map((post, index) => (
            <article key={index} className="space-y-3">
              <h3
                className="font-medium text-foreground hover:text-primary cursor-pointer transition-colors line-clamp-2"
                onClick={() => handlePostClick(post)}
              >
                {post.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1 flex-shrink-0">
                  <Calendar className="w-3 h-3 flex-shrink-0" />
                  {post.date}
                </span>
                <span className="flex-shrink-0">{post.readTime}</span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs whitespace-nowrap">
                  Artificial Intelligence
                </Badge>
                <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs whitespace-nowrap">
                  Programming
                </Badge>
                <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs whitespace-nowrap">
                  Agentic
                </Badge>
              </div>
            </article>
          ))}
        </CardContent>
      </Card>
      <FullScreenModal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-xl font-bold mb-4">All Blog Posts</h2>
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="space-y-3 cursor-pointer hover:bg-muted rounded p-3 transition-colors"
              onClick={() => handlePostClick(post)}
            >
              <h3 className="font-medium text-foreground hover:text-primary cursor-pointer transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1 flex-shrink-0">
                  <Calendar className="w-3 h-3 flex-shrink-0" />
                  {post.date}
                </span>
                <span className="flex-shrink-0">{post.readTime}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs whitespace-nowrap">
                  Startup Culture
                </Badge>
                <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs whitespace-nowrap">
                  Programming
                </Badge>
                <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs whitespace-nowrap">
                  Web Development
                </Badge>
              </div>
            </article>
          ))}
        </div>
      </FullScreenModal>
      {/* This modal will no longer be used for displaying full post content */}
      <FullScreenModal open={!!selectedPost} onClose={() => setSelectedPost(null)}>
        {/* Content will be handled by the new BlogPost page */}
        <div></div>
      </FullScreenModal>
    </>
  );
};