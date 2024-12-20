import { LogoItem } from "./logo-item";
import { Spinner } from "@nextui-org/spinner";
import { SkillRecord } from "@/types";

export function LogoGallery({ data }: { data: SkillRecord }) {
  return data.isLoading ? (
    <Spinner size="lg" />
  ) : (
    <div className="flex flex-wrap justify-center gap-14 mt-11">
      {data.value.map((item) => (
        <LogoItem
          src={item.imageSrc}
          alt={item.title}
          tooltipContent={item.title}
        />
      ))}
    </div>
  );
}
