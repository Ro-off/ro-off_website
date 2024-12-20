import { Image } from "@nextui-org/image";
import { clsx } from "clsx";

export function ProjectsGallery() {
  return (
    <>
      <div
        className={clsx(
          "bottom-20",
          "top-0",
          "left-10",
          "relative",
          "float-left"
        )}
      >
        <Image
          src="teeth-lab.png"
          alt="placeholder"
          height={500}
          isBlurred
          className={clsx("object-cover", "bottom-0", "left-0")}
        />
        <div
          className={clsx(
            "absolute",
            "-bottom-16",
            "-top-16",
            "-right-16",
            "left-0",
            "z-20",
            "bg-gradient-to-l",
            "from-black from-25%",
            "to-transparent to-100%",
            "z-20"
          )}
        />
      </div>
    </>
  );
}
