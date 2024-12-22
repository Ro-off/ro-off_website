import DefaultLayout from "@/layouts/default";
import { SkillsGallery } from "@/components/skills-gallery";
import { IntroTittle } from "@/components/Intro-tittle";
import { ProjectsGallery } from "@/components/projects-gallery";
import { SkillRecord, ProjectRecord } from "@/types";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export default function IndexPage({
  skillsData,
  projectsData,
}: {
  skillsData: SkillRecord;
  projectsData: ProjectRecord;
}) {
  const titleClass = "font-bold text-6xl  md:text-8xl lg:text-9xl z-30";

  return (
    <DefaultLayout>
      <section className="flex flex-col justify-center gap-32 py-8 md:py-10 h-screen items-center">
        <IntroTittle className={titleClass} />
      </section>
      <section className="flex flex-col items-center  gap-4 py-8 md:py-10 min-h-screen">
        <motion.p
          className={clsx("mt-20", "mb-12", titleClass)}
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.p>
        <SkillsGallery data={skillsData} />
      </section>
      <section className="flex flex-col items-center gap-4 py-8 md:py-10 min-h-screen overflow-hidden pb-10">
        <motion.p
          className={clsx("mt-20", "mb-12", titleClass)}
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.p>
        <ProjectsGallery data={projectsData} />
      </section>
    </DefaultLayout>
  );
}
