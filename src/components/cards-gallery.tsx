import { CardItem } from "@/components/card-item";
import { PreviewIcon } from "@/icons/preview-icon";
import { CodeIcon } from "@/icons/code-icon";

export function CardsGallery({ data }: { data: { value: any[] } }) {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-11">
      {data.value.map((item) => (
        <CardItem
          key={item.title}
          title={item.title}
          description={item.description}
          CardProps={item.CardProps}
          hoverContent={
            item.preview ? (
              <>
                <PreviewIcon />
                <span>View in preview</span>
              </>
            ) : (
              <>
                <CodeIcon />
                <span>Open source code</span>
              </>
            )
          }
          className="max-w-full"
        />
      ))}
    </div>
  );
}
