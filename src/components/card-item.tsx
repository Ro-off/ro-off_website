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
import { clsx } from "clsx";

export function CardItem({
  title,
  description,
  CardProps,
  className,
  src,
  hoverContent,
}: {
  title: string;
  description: string;
  CardProps?: CardProps;
  className?: string;
  src: string;
  hoverContent?: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // const sizes = {
  //   sm: "w-72 h-48",
  //   md: "w-96 h-60",
  //   lg: "w-[32rem] h-[20rem]",
  //   xl: "w-[48rem] h-[30rem]",
  // };

  return (
    <motion.div
      initial={{
        y: 50,
        scale: 0.8,
      }}
      whileInView={{
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      //todo: fix breakpoints
      className={clsx(
        "relative",
        className,
        "max-w-full",
        "w-72 h-48",
        "md:w-96 md:h-60",
        "lg:w-[32rem] lg:h-[20rem]"
      )}
    >
      <Card
        className={`bg-transparent drop-shadow-2xl h-full w-full`}
        {...CardProps}
        shadow="none"
      >
        <motion.div
          className="w-full h-full absolute z-12 overflow-hidden rounded-large "
          initial={{ scale: 1, filter: "blur(0px)" }}
          animate={
            isHovered
              ? { scale: 1.85, filter: "blur(5px) brightness(0.5)" }
              : { scale: 1, filter: "blur(0px) brightness(1)" }
          }
        >
          <Image
            // removeWrapper
            alt={title + " " + image}
            className="z-0 w-full h-full object-cover filter brightness-50 shadow-lg"
            src={src}
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
              ChipProps={{ variant: "faded", size: "md" }}
            />
          </CardFooter>
        </motion.div>
        {Boolean(hoverContent) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="w-full h-full absolute z-13 "
          >
            <CardBody
              className={clsx(
                "absolute",
                "z-13",
                "justify-center",
                "items-center",
                "w-full",
                "h-full",
                "cursor-pointer",
                "flex",
                "text-white",
                "font-bold",
                "text-2xl",
                "text-center",
                "flex-row",
                "gap-1"
              )}
            >
              {hoverContent}
            </CardBody>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}
