import DefaultLayout from "@/layouts/default";
import { CardsGallery } from "@/components/cards-gallery";
import { LogoGallery } from "@/components/logo-gallery";

const titleClass = "font-bold text-6xl  md:text-8xl lg:text-9xl";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col justify-center gap-32 py-8 md:py-10 h-screen items-center">
        <div className="block text-center justify-center text-nowrap w-full md:w-3/4">
          <div className={"flex justify-center"}>
            <span className={titleClass}>Hi there&nbsp;</span>
          </div>
          <div className={"flex justify-start"}>
            <span className={titleClass}>I am&nbsp;</span>
            <span className={titleClass + " text-blue-500 drop-shadow-glow"}>
              Roman&nbsp;
            </span>
          </div>
          <div className={"flex justify-end"}>
            <span className={titleClass + ""}>a Front End&nbsp;</span>
          </div>
          <div className={"flex justify-center"}>
            <span className={titleClass}>Developer&nbsp;</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center  gap-4 py-8 md:py-10 min-h-screen">
        <p className={"m-32 " + titleClass}>Skills</p>
        <LogoGallery />
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-screen">
        <p className={"m-32 " + titleClass}>Projects</p>
        <CardsGallery />
      </section>
    </DefaultLayout>
  );
}
