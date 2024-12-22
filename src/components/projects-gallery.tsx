import { CardItem } from "@/components/card-item";
import { PreviewIcon } from "@/icons/preview-icon";
import { CodeIcon } from "@/icons/code-icon";
import { Spinner } from "@nextui-org/spinner";
import { ProjectRecord } from "@/types";
import { useDisclosure } from "@nextui-org/modal";
import { PreviewModal } from "@/components/preview-modal";
import { useState } from "react";

export function ProjectsGallery({ data }: { data: ProjectRecord }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState<ProjectRecord["value"][0] | null>(
    null
  );

  function handleOpenModal(data: ProjectRecord["value"][0]) {
    setModalData(data);
    onOpen();
  }

  return (
    <>
      {modalData && (
        <PreviewModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          data={modalData}
        />
      )}

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {data.isLoading || !data ? (
          <Spinner size="lg" />
        ) : (
          data.value.map((item) => (
            <CardItem
              key={item.id}
              title={item.title}
              description={item.description}
              CardProps={{
                isPressable: true,
                onPress: () => handleOpenModal(item),
              }}
              src={item.imageSrc}
              hoverContent={
                <>
                  <PreviewIcon />
                  <span>View in preview</span>
                </>
              }
              chipList={item.techList}
              className="max-w-full"
            />
          ))
        )}
      </div>
    </>
  );
}
