import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FullScreenModal } from "@/components/ui/FullScreenModal";

const blogPosts = [
  // {
  //   title: "Navigating the Startup Jungle: Building a Productive and Positive Culture",
  //   date: "July 3, 2024",
  //   readTime: "3 min read",
  //   excerpt: "This post explores the key elements of a successful startup culture, offering practical tips and examples for creating a productive and positive environment."
  // }
];

export const BlogSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
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
              <h3 className="font-medium text-foreground hover:text-primary cursor-pointer transition-colors line-clamp-2">
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
        </CardContent>
      </Card>
      <FullScreenModal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-xl font-bold mb-4">All Blog Posts</h2>
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="space-y-3 cursor-pointer hover:bg-muted rounded p-3 transition-colors"
              onClick={() => setSelectedPost(post)}
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
      <FullScreenModal open={!!selectedPost} onClose={() => setSelectedPost(null)}>
        {selectedPost && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-2">{selectedPost.title}</h2>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1 flex-shrink-0">
                <Calendar className="w-3 h-3 flex-shrink-0" />
                {selectedPost.date}
              </span>
              <span className="flex-shrink-0">{selectedPost.readTime}</span>
            </div>
            <p className="text-base text-foreground">
              {/* Replace this with the full blog content if available */}
              {selectedPost.excerpt}
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
          </div>
        )}
      </FullScreenModal>
    </>
  );
};