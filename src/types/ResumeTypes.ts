type Links = {
    [key: string]: string
}

interface WorkExperience {
    name: string,
    role: string,
    time: string
}

interface Project {
    name: string,
    description: string,
    time: string,
    links: Links
}

interface ResumeConfig {
    headline: string,
    work: WorkExperience[],
    projects: Project[],
    links: Links
}

export type { Links, WorkExperience, Project, ResumeConfig }