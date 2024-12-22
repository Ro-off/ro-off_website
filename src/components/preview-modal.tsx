import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { ProjectRecord } from "@/types";
import { Skeleton } from "@nextui-org/skeleton";
import { CodeIcon } from "@/icons/code-icon";
import { FullscreenIcon } from "@/icons/fullscreen";
import { clsx } from "clsx";

export function PreviewModal({
  isOpen,
  onOpenChange,
  data,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  data: ProjectRecord["value"][0];
}) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="5xl"
      backdrop="blur"
      className="dark text-foreground"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold">{data.title}</h2>
              <p className="text-sm text-gray-500">{data.description}</p>
            </ModalHeader>
            <ModalBody className="relative px-0 mx-4">
              <Skeleton className="rounded-lg w-full h-[calc(85vh-200px)] absolute z-30 right-0" />
              {data.previewSrc ? (
                <iframe
                  className={clsx(
                    "w-full",
                    "h-[calc(85vh-200px)]",
                    "rounded-lg",
                    "z-40",
                    "object-scale-down"
                  )}
                  src={data.previewSrc}
                  title={data.title}
                />
              ) : (
                <div
                  className={clsx(
                    "w-full",
                    "h-[calc(85vh-200px)]",
                    "rounded-lg",
                    "z-40",
                    "flex",
                    "items-center",
                    "justify-center",
                    "overflow-hidden",
                    "relative"
                  )}
                >
                  <img
                    src={data.imageSrc}
                    alt={data.title}
                    className={clsx("max-w-full", "max-h-full", "z-40")}
                  />
                  <img
                    src={data.imageSrc}
                    alt={data.title}
                    className={clsx(
                      "min-w-full",
                      "min-h-full",
                      "absolute",
                      "z-30",
                      "blur-lg"
                    )}
                  />
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button
                onPress={() => window.open(data.sourceSrc)}
                variant="light"
                size="lg"
              >
                <CodeIcon />
                <span>Open source code</span>
              </Button>
              {data.previewSrc && (
                <Button
                  isIconOnly
                  onPress={() => window.open(data.previewSrc ?? "")}
                  variant="shadow"
                  color="primary"
                  size="lg"
                >
                  <FullscreenIcon />
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
