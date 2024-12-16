import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardProps,
} from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { image } from "@nextui-org/theme";
import { ChipList } from "./chip-list";
import { motion } from "framer-motion";
import { useState } from "react";

export function ProjectCard({
  title,
  description,
  CardProps,
  orientation = "horizontal",
}: {
  title: string;
  description: string;
  CardProps?: CardProps;
  orientation?: "horizontal" | "vertical";
}) {
  const orientations = {
    vertical: { card: "w-60 h-96" },
    horizontal: { card: "w-96 h-60" },
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`${orientations[orientation].card} bg-transparent`}
      {...CardProps}
    >
      <motion.div
        className="w-full h-full absolute z-12 overflow-hidden rounded-large"
        initial={{ scale: 1, filter: "blur(0px)" }}
        animate={
          isHovered
            ? { scale: 1.85, filter: "blur(5px) brightness(0.5)" }
            : { scale: 1, filter: "blur(0px) brightness(1)" }
        }
      >
        <Image
          removeWrapper
          alt={title + " " + image}
          className="z-0 w-full h-full object-cover filter brightness-50"
          src="teeth-lab.png"
          //width="100%"
          //height={300}
          //isZoomed
          // isBlurred
        />
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h2 className="text-white font-medium text-3xl">{title}</h2>
          <p className="text-tiny text-white/60 uppercase font-bold text-left">
            {description}
          </p>
        </CardHeader>
        <CardFooter className="justify-between overflow-hidden py-1 absolute rounded-large bottom-1 w-[calc(100%_-_8px)] ml-1 z-10">
          <ChipList
            data={["React", "TypeScript", "Tailwind CSS"]}
            ChipProps={{ variant: "faded" }}
          />
        </CardFooter>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="w-full h-full absolute z-13 "
      >
        <CardBody className="absolute z-13 justify-center items-center w-full h-full cursor-pointer">
          <p className="text-white font-bold text-2xl text-center">
            Click to view
          </p>
        </CardBody>
      </motion.div>
    </Card>
  );
}
