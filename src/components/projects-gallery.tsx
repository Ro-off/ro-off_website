import { ProjectCard } from "@/components/project-card";

export function ProjectsGallery() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-11">
      <ProjectCard
        title="TeethLab"
        description="Dental Laboratory website to store and calculate data"
        CardProps={{ isPressable: true }}
      />
      <ProjectCard
        title="TeethLab"
        description="Dental Laboratory website to store and calculate data"
        CardProps={{ isPressable: true }}
      />
      <ProjectCard
        title="TeethLab"
        description="Dental Laboratory website to store and calculate data"
        CardProps={{ isPressable: true }}
      />
      <ProjectCard
        title="TeethLab"
        description="Dental Laboratory website to store and calculate data"
        CardProps={{ isPressable: true }}
      />
    </div>
  );
}
