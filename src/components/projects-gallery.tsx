import { CardItem } from "@/components/card-item";
import { PreviewIcon } from "@/icons/preview-icon";
import { CodeIcon } from "@/icons/code-icon";
import { Spinner } from "@nextui-org/spinner";
import { ProjectRecord } from "@/types";

export function CardsGallery({ data }: { data: ProjectRecord }) {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-11">
      {data.isLoading ? (
        <Spinner size="lg" />
      ) : (
        data.value.map((item) => (
          <CardItem
            key={item.title}
            title={item.title}
            description={item.description}
            CardProps={{ isPressable: true }}
            src={item.imageSrc}
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
        ))
      )}
    </div>
  );
}
