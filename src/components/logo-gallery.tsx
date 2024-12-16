import { LogoItem } from "./logo-item";

export function LogoGallery() {
  return (
    <div className="flex flex-wrap justify-center gap-14 mt-11">
      <LogoItem src="vite.png" alt="Logo 1" />
      <LogoItem src="react.png" alt="Logo 2" />
      <LogoItem src="tailwind.png" alt="Logo 3" />
      <LogoItem src="motion.png" alt="Logo 4" />
    </div>
  );
}
