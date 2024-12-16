import seedrandom from "seedrandom";
import { motion } from "framer-motion";

function generateRandomRotation(seed: string) {
  const rng = seedrandom(seed + "f");
  return rng() * 60 - 30;
}

function generateRandomScale(seed: string) {
  const rng = seedrandom(seed + "s");
  return rng() * 0.5 + 0.4;
}

export function LogoItem({ src, alt }: { src: string; alt: string }) {
  const rotation = generateRandomRotation(src);
  return (
    <motion.div
      className={`flex items-center justify-center`}
      initial={{
        rotate: rotation,
        scale: generateRandomScale(src),
        zIndex: 10,
        y: 50,
      }}
      whileHover={{ rotate: 0, scale: 1.2, zIndex: 14 }}
      whileInView={{
        rotate: generateRandomRotation(src),
        y: 0,
        scale: 1,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-40 h-40 drop-shadow-lg cursor-pointer"
      />
    </motion.div>
  );
}
