import { Chip, ChipProps } from "@nextui-org/chip";

export function ChipList({
  data,
  ChipProps,
}: {
  data: string[];
  ChipProps?: ChipProps;
}) {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {data.map((label) => (
          <Chip key={label} {...ChipProps}>
            {label}
          </Chip>
        ))}
      </div>
    </>
  );
}
