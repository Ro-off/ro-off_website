import { CardItem } from "@/components/card-item";

export function CardsGallery() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5 mt-11 w-4/5">
      <CardItem
        title="TeethLab"
        description="Dental Laboratory website to store and calculate data"
        CardProps={{ isPressable: true }}
        className="w-[48rem] h-[30rem]"
      />
      <CardItem
        title="TeethLab"
        description="Dental Laboratory website to store and calculate data"
        CardProps={{ isPressable: true }}
        className="w-[48rem] h-[30rem]"
      />
      <CardItem
        title="TeethLab"
        description="Dental Laboratory website to store and calculate data"
        CardProps={{ isPressable: true }}
        className="w-[48rem] h-[30rem]"
      />
      <CardItem
        title="TeethLab"
        description="Dental Laboratory website to store and calculate data"
        CardProps={{ isPressable: true }}
        className="w-[48rem] h-[30rem]"
      />
    </div>
  );
}
