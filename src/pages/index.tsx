import DefaultLayout from "@/layouts/default";
import { LogoGallery } from "@/components/logo-gallery";
import { IntroTittle } from "@/components/Intro-tittle";
import { CardsGallery } from "@/components/cards-gallery";
export default function IndexPage() {
  const titleClass = "font-bold text-6xl  md:text-8xl lg:text-9xl z-30";

  const projectsData = {
    isLoading: false,
    value: [
      {
        title: "TeethLab",
        description: "Dental Laboratory website to store and calculate data",
        preview: "https://teeth-lab.vercel.app/",
        source: "https",
        imageSrc: "teeth-lab.png",
      },
      {
        title: "TeethLab",
        description: "Dental Laboratory website to store and calculate data",
        preview: "https://teeth-lab.vercel.app/",
        source: "https",
        imageSrc: "teeth-lab.png",
      },
      {
        title: "TeethLab",
        description: "Dental Laboratory website to store and calculate data",
        preview: null,
        source: "https",
        imageSrc: "teeth-lab.png",
      },
      {
        title: "TeethLab",
        description: "Dental Laboratory website to store and calculate data",
        preview: "https://teeth-lab.vercel.app/",
        source: "https",
        imageSrc: "teeth-lab.png",
      },
    ],
  };

  const skillsData = {
    isLoading: false,
    value: [
      {
        imageSrc: "react.png",
        title: "React",
      },
      {
        imageSrc: "tailwind.png",
        title: "Tailwind CSS",
      },
      {
        imageSrc: "motion.png",
        title: "Framer Motion",
      },
      {
        imageSrc: "vite.png",
        title: "Vite",
      },
    ],
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col justify-center gap-32 py-8 md:py-10 h-screen items-center">
        <IntroTittle className={titleClass} />
      </section>
      <section className="flex flex-col items-center  gap-4 py-8 md:py-10 min-h-screen">
        <p className={"m-32 " + titleClass}>Skills</p>
        <LogoGallery data={skillsData} />
      </section>
      <section className="flex flex-col items-center gap-4 py-8 md:py-10 min-h-screen overflow-hidden pb-10">
        <p className={"mb-16 " + titleClass}>Projects</p>
        <CardsGallery data={projectsData} />
      </section>
    </DefaultLayout>
  );
}
