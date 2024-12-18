import { LogoItem } from "./logo-item";

export function LogoGallery() {
  return (
    <div className="flex flex-wrap justify-center gap-14 mt-11">
      <LogoItem src="vite.png" alt="Logo 1" tooltipContent="Vite" />
      <LogoItem src="react.png" alt="Logo 2" tooltipContent="React" />
      <LogoItem src="tailwind.png" alt="Logo 3" tooltipContent="Tailwind CSS" />
      <LogoItem src="motion.png" alt="Logo 4" tooltipContent="Framer Motion" />
    </div>
  );
}
