import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type SkillRecord = {
  isLoading: boolean;
  value: {
    id: string;
    imageSrc: string;
    title: string;
  }[];
};

export type ProjectRecord = {
  isLoading: boolean;
  value: {
    id: string;
    title: string;
    description: string;
    previewSrc: string | null;
    sourceSrc: string;
    imageSrc: string;
  }[];
};
