import { LogoItem } from "./logo-item";
import { Spinner } from "@nextui-org/spinner";

export function LogoGallery({
  data,
}: {
  data: { value: any[]; isLoading: boolean };
}) {
  return data.isLoading ? (
    <Spinner size="lg" />
  ) : (
    <div className="flex flex-wrap justify-center gap-14 mt-11">
      {data.value.map((item) => (
        <LogoItem src={item.src} alt={item.title} tooltipContent={item.title} />
      ))}
    </div>
  );
}
