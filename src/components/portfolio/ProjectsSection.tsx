import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FullScreenModal } from "@/components/ui/FullScreenModal";

const projects = [
	{
		title: "E-Konsulta",
		description: "Online doctor consultations for Filipinos using AI",
		url: "https://e-konsulta.vercel.app/",
	},
	{
		title: "OlopscCommunity Platform",
		description: "AI-powered wardrobe assistant",
		url: "https://olopscommunity.vercel.app",
	},

];

const ProjectCard = ({ project, className }: { project: typeof projects[0], className?: string }) => (
	<a
		href={project.url}
		target="_blank"
		rel="noopener noreferrer"
		className={cn(
			"block space-y-1 p-3 rounded-lg bg-accent hover:bg-accent/90 transition-colors w-full",
			className
		)}
	>
		<h3 className="font-medium text-foreground text-sm line-clamp-2">
			{project.title}
		</h3>
		<p className="text-xs text-muted-foreground">{project.description}</p>
	</a>
);

export const ProjectsSection = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Card className="shadow-sm w-full">
				<CardHeader className="py-4 px-5">
					<CardTitle className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<FolderOpen className="w-4 h-4 text-primary" />
							<span className="text-foreground">Recent Projects</span>
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
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
						{projects.slice(0, 4).map((project, index) => (
							<ProjectCard key={index} project={project} />
						))}
					</div>
				</CardContent>
			</Card>
			<FullScreenModal open={open} onClose={() => setOpen(false)}>
				<h2 className="text-xl font-bold mb-4">All Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
					{projects.map((project, index) => (
						<ProjectCard 
							key={index} 
							project={project} 
							className={cn({
								"opacity-75": index < 4
							})}
						/>
					))}
				</div>
			</FullScreenModal>
		</>
	);
};