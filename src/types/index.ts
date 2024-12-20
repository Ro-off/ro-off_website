import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type SkillRecord = {
  isLoading: boolean;
  value: {
    imageSrc: string;
    title: string;
  }[];
};

export type ProjectRecord = {
  isLoading: boolean;
  value: {
    title: string;
    description: string;
    preview: string | null;
    source: string;
    imageSrc: string;
  }[];
};
