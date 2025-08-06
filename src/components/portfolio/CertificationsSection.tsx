import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
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

export const CertificationCard = ({ cert, className }: { cert: typeof certifications[0], className?: string }) => (
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
);

export const CertificationsSection = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Card className="shadow-sm w-full">
				<CardHeader className="py-4 px-5">
					<CardTitle className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Award className="w-4 h-4 text-primary" />
							<span className="text-foreground">Recent Certifications</span>
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
					<div className="flex flex-col space-y-2">
						{certifications.slice(0, 4).map((cert, index) => (
							<CertificationCard key={index} cert={cert} />
						))}
					</div>
				</CardContent>
			</Card>
			<FullScreenModal open={open} onClose={() => setOpen(false)}>
				<h2 className="text-xl font-bold mb-4">All Certifications</h2>
				<div className="flex flex-col space-y-2">
					{certifications.map((cert, index) => (
						<CertificationCard 
							key={index} 
							cert={cert} 
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