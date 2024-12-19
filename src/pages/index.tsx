import DefaultLayout from "@/layouts/default";
import { LogoGallery } from "@/components/logo-gallery";
import { IntroTittle } from "@/components/Intro-tittle";

export default function IndexPage() {
  const titleClass = "font-bold text-6xl  md:text-8xl lg:text-9xl";

  return (
    <DefaultLayout>
      <section className="flex flex-col justify-center gap-32 py-8 md:py-10 h-screen items-center">
        <IntroTittle className={titleClass} />
      </section>
      <section className="flex flex-col items-center  gap-4 py-8 md:py-10 min-h-screen">
        <p className={"m-32 " + titleClass}>Skills</p>
        <LogoGallery />
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-screen">
        <p className={"m-32 " + titleClass}>Projects</p>
      </section>
    </DefaultLayout>
  );
}
