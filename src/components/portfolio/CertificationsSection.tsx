import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink, ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FullScreenModal } from "@/components/ui/FullScreenModal";

export const certifications = [
	{
		title: "Google Advanced Data Analytics Professional",
		issuer: "Google",
		credentialLink: "https://example.com/credential1",
	},
	{
		title: "ORACLE OCI Certified Generative AI Professional",
		issuer: "Oracle",
		credentialLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=746746AD1885803C38E980131667A083AD187AEC68B32DD11AC1417C12BF6EE5",
	},
	{
		title: "Aviatrix Certified EngineerMulticloud Network Associate",
		issuer: "Aviatrix",
		credentialLink: "https://www.credly.com/badges/88ac7909-7180-4251-bb26-2167ae83e60b/public_url",
	},
	{
		title: "Software Engineering",
		issuer: "TestDome",
		credentialLink: "https://www.testdome.com/certificates/19ec3d640c1e45adac1fe91e0d4fbc5b",
	},
	{
		title: "Building AI Solutions Using Advanced Algorithms and Open Source Frameworks",
		issuer: "TestDome",
		credentialLink: "https://www.testdome.com/certificates/19ec3d640c1e45adac1fe91e0d4fbc5b",
	},
];

export const CertificationCard = ({ cert, className }: { cert: typeof certifications[0], className?: string }) => {
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
				href={cert.credentialLink}
				target="_blank"
				rel="noopener noreferrer"
				className={cn(
					"block space-y-1 p-3 rounded-lg bg-accent hover:bg-accent/90 transition-colors w-full",
					className
				)}
			>
				<h3 className="font-medium text-foreground text-sm line-clamp-2">
					{cert.title}
				</h3>
				<p className="text-xs text-muted-foreground">{cert.issuer}</p>
			</a>
		</motion.div>
	);
};

export const CertificationsSection = () => {
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
							<Award className="w-4 h-4 text-primary" />
							<span className="text-foreground">Recent Certifications</span>
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
					<div className="flex flex-col space-y-2">
						{certifications.slice(0, 4).map((cert, index) => (
							<CertificationCard key={index} cert={cert} />
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
						<h1 className="text-2xl md:text-3xl font-bold text-foreground">All Certifications</h1>
					</div>

					{/* Content */}
					<div className="max-w-4xl mx-auto">
						<div className="flex flex-col space-y-3">
							{certifications.map((cert, index) => (
								<CertificationCard 
									key={index} 
									cert={cert}
								/>
							))}
						</div>
					</div>
				</div>
			</FullScreenModal>
		</>
	);
};