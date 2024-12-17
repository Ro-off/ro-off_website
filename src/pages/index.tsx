import DefaultLayout from "@/layouts/default";
import { ProjectsGallery } from "@/components/projects-gallery";
import { LogoGallery } from "@/components/logo-gallery";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col justify-center gap-32 py-8 md:py-10 h-screen">
        <div className="block text- justify-center">
          <span className={" font-bold text-9xl text-right "}>
            Hi there&nbsp;
          </span>
          <br />
          <span className={" font-bold text-9xl"}>I am&nbsp;</span>
          <span className={" font-bold text-9xl text-blue-500"}>
            Roman&nbsp;
          </span>
          <br />
          <span className={" font-bold text-9xl"}>Front End&nbsp;</span>
          <br />
          <span className={" font-bold text-9xl"}>Developer&nbsp;</span>
        </div>
      </section>
      <section className="flex flex-col items-center  gap-4 py-8 md:py-10 min-h-screen">
        <p className={"m-32 font-bold text-9xl"}>Skills</p>
        <LogoGallery />
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-screen">
        <p className={"m-32 font-bold text-9xl"}>Projects</p>
        <ProjectsGallery />
      </section>
    </DefaultLayout>
  );
}
