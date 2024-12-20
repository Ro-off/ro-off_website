import { CardItem } from "@/components/card-item";

export function CardsGallery({ data }: { data: { value: any[] } }) {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-11">
      {data.value.map((item) => (
        <CardItem
          key={item.title}
          title={item.title}
          description={item.description}
          CardProps={item.CardProps}
          hoverContent="View Project"
          className="max-w-full"
        />
      ))}
    </div>
  );
}
