import { Badge } from "@/app/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Github } from "lucide-react"

interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    githubUrl: string
}

export function ProjectCard({ title, description, technologies, githubUrl }: ProjectCardProps) {
    return (
        <Card className="overflow-hidden flex flex-col">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardDescription className="mb-4">{description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:underline"
                >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                </a>
            </CardFooter>
        </Card>
    )
}
