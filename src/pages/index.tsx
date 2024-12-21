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

  // const projectsData = {
  //   isLoading: false,
  //   value: [
  //     {
  //       title: "TeethLab",
  //       description: "Dental Laboratory website to store and calculate data",
  //       previewSrc: "https://teeth-lab.vercel.app/",
  //       sourceSrc: "https",
  //       imageSrc: "teeth-lab.png",
  //       id: "1",
  //       techList: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
  //     },
  //     {
  //       title: "TeethLab",
  //       description: "Dental Laboratory website to store and calculate data",
  //       previewSrc: "https://teeth-lab.vercel.app/",
  //       sourceSrc: "https",
  //       imageSrc: "teeth-lab.png",
  //       id: "2",
  //       techList: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
  //     },
  //     {
  //       title: "TeethLab",
  //       description: "Dental Laboratory website to store and calculate data",
  //       previewSrc: null,
  //       sourceSrc: "https",
  //       imageSrc: "teeth-lab.png",
  //       id: "3",
  //       techList: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
  //     },
  //     {
  //       title: "TeethLab",
  //       description: "Dental Laboratory website to store and calculate data",
  //       previewSrc: "https://teeth-lab.vercel.app/",
  //       sourceSrc: "https",
  //       imageSrc: "teeth-lab.png",
  //       id: "4",
  //       techList: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
  //     },
  //   ],
  // };

  // const skillsData = {
  //   isLoading: false,
  //   value: [
  //     {
  //       imageSrc: "react.png",
  //       title: "React",
  //     },
  //     {
  //       imageSrc: "tailwind.png",
  //       title: "Tailwind CSS",
  //     },
  //     {
  //       imageSrc: "motion.png",
  //       title: "Framer Motion",
  //     },
  //     {
  //       imageSrc: "vite.png",
  //       title: "Vite",
  //     },
  //   ],
  // };

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
