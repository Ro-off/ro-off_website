import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ChipList } from "@/components/chip-list";
import { ProjectsGallery } from "@/components/projects-gallery";
import { LogoGallery } from "@/components/logo-gallery";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-screen">
        <div className="inline-block text-center justify-center">
          <span className={title()}>Roman&nbsp;</span>
          <span className={title()}>Sklyarov &nbsp;</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>Web Developer</div>
          <br />
          <ChipList
            data={[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "TypeScript",
              "TailwindCSS",
            ]}
          />
          <br />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-screen">
        <p className={`${title({ color: "blue" })} m-3`}>Skills</p>
        <LogoGallery />
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-screen">
        <p className={`${title({ color: "blue" })} m-3`}>Projects</p>
        <ProjectsGallery />
      </section>
    </DefaultLayout>
  );
}
