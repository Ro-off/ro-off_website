import { CardItem } from "@/components/card-item";

export function CardsGallery() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-11">
      <CardItem
        title="TeethLab"
        description="Dental Laboratory website to store and calculate data"
        CardProps={{ isPressable: true }}
      />
      <CardItem
        title="TeethLab"
        description="Dental Laboratory website to store and calculate data"
        CardProps={{ isPressable: true }}
      />
      <CardItem
        title="TeethLab"
        description="Dental Laboratory website to store and calculate data"
        CardProps={{ isPressable: true }}
      />
      <CardItem
        title="TeethLab"
        description="Dental Laboratory website to store and calculate data"
        CardProps={{ isPressable: true }}
      />
    </div>
  );
}
