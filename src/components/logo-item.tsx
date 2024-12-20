import seedrandom from "seedrandom";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";
import { Tooltip } from "@nextui-org/tooltip";

// function generateRandomRotation(seed: string) {
//   const rng = seedrandom(seed + "f");
//   return rng() * 60 - 30;
// }

function generateRandomScale(seed: string) {
  const rng = seedrandom(seed + "s");
  return rng() * 0.5 + 0.4;
}

export function LogoItem({
  src,
  alt,
  tooltipContent,
}: {
  src: string;
  alt: string;
  tooltipContent?: string;
}) {
  //const rotation = generateRandomRotation(src);
  return (
    <motion.div
      className={`flex items-center justify-center`}
      initial={{
        //rotate: rotation,
        scale: generateRandomScale(src),
        zIndex: 10,
        y: 50,
      }}
      whileHover={{ rotate: 0, scale: 1.2, zIndex: 14 }}
      whileInView={{
        //rotate: generateRandomRotation(src),
        y: 0,
        scale: 1,
      }}
    >
      {tooltipContent ? (
        <Tooltip
          content={<p className="text-2xl">{tooltipContent}</p>}
          showArrow={true}
          offset={25}
          color="foreground"
          delay={500}
        >
          <Image
            src={src}
            alt={alt}
            className=" h-40 cursor-pointer"
            isBlurred
            // isZoomed
          />
        </Tooltip>
      ) : (
        <Image
          src={src}
          alt={alt}
          className=" h-40 cursor-pointer"
          isBlurred
          // isZoomed
        />
      )}
    </motion.div>
  );
}
