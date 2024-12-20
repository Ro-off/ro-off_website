import { LogoItem } from "./logo-item";

export function LogoGallery({ data }: { data: { value: any[] } }) {
  return (
    <div className="flex flex-wrap justify-center gap-14 mt-11">
      {data.value.map((item) => (
        <LogoItem
          src={item.src}
          // CardProps={item.CardProps}
          alt={item.title}
          tooltipContent={item.title}
        />
      ))}
    </div>
  );
}
