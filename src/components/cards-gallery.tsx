import { CardItem } from "@/components/card-item";

export function CardsGallery() {
  const data = {
    value: [
      {
        title: "TeethLab",
        description: "Dental Laboratory website to store and calculate data",
        CardProps: { isPressable: true },
      },
      {
        title: "TeethLab",
        description: "Dental Laboratory website to store and calculate data",
        CardProps: { isPressable: true },
      },
      {
        title: "TeethLab",
        description: "Dental Laboratory website to store and calculate data",
        CardProps: { isPressable: true },
      },
      {
        title: "TeethLab",
        description: "Dental Laboratory website to store and calculate data",
        CardProps: { isPressable: true },
      },
    ],
  };
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-11">
      {data.value.map((item) => (
        <CardItem
          key={item.title}
          title={item.title}
          description={item.description}
          CardProps={item.CardProps}
          size="lg"
        />
      ))}
    </div>
  );
}
