import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderOpen, ExternalLink, ArrowLeft, ChevronRight } from "lucide-react";
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
		description: "Community platform for OLOPSC students",
		url: "https://olopscommunity.vercel.app",
	},

	{
		title: "CertiFree",
		description: "Industry-Aligned Certification Programs for Filipino Upskillings",
		url: "https://e-konsulta.vercel.app/",
	},

	
];

const ProjectCard = ({ project, className }: { project: typeof projects[0], className?: string }) => {
	const cardVariants = {
		hover: { 
			scale: 1.02,
			transition: { duration: 0.2, ease: "easeOut" as const }
		},
		tap: { 
			scale: 0.98,
			transition: { duration: 0.1 }
		}
	};

	return (
		<motion.div
			variants={cardVariants}
			whileHover="hover"
			whileTap="tap"
		>
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
		</motion.div>
	);
};

export const ProjectsSection = () => {
	const [open, setOpen] = useState(false);

	const buttonVariants = {
		hover: { 
			scale: 1.05,
			transition: { duration: 0.2, ease: "easeOut" as const }
		},
		tap: { 
			scale: 0.95,
			transition: { duration: 0.1 }
		}
	};

	return (
		<>
			<Card className="shadow-sm w-full">
				<CardHeader className="py-4 px-5">
					<CardTitle className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<FolderOpen className="w-4 h-4 text-primary" />
							<span className="text-foreground">Recent Projects</span>
						</div>
						<motion.div
							variants={buttonVariants}
							whileHover="hover"
							whileTap="tap"
						>
							<Button
								variant="ghost"
								size="sm"
								className="text-primary hover:text-primary/80 text-xs flex items-center gap-1"
								onClick={() => setOpen(true)}
							>
								View All
								<ChevronRight className="w-3 h-3" />
							</Button>
						</motion.div>
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
				<div className="min-h-screen bg-background p-6 md:p-8 font-inter">
					{/* Header */}
					<div className="flex items-center justify-between mb-8">
						<div className="flex items-center gap-4">
							<motion.div
								variants={buttonVariants}
								whileHover="hover"
								whileTap="tap"
							>
								<Button
									variant="ghost"
									size="sm"
									className="text-foreground hover:text-primary"
									onClick={() => setOpen(false)}
								>
									<ArrowLeft className="w-4 h-4 mr-2" />
									Back to Home
								</Button>
							</motion.div>
						</div>
						<h1 className="text-2xl md:text-3xl font-bold text-foreground">All Projects</h1>
					</div>

					{/* Content */}
					<div className="max-w-6xl mx-auto">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
							{projects.map((project, index) => (
								<ProjectCard 
									key={index} 
									project={project}
								/>
							))}
						</div>
					</div>
				</div>
			</FullScreenModal>
		</>
	);
};