export function IntroTittle({ className }: { className: string }) {
  return (
    <div className="block text-center justify-center text-nowrap w-full md:w-3/4">
      <div className={"flex justify-center"}>
        <span className={className}>Hi there&nbsp;</span>
      </div>
      <div className={"flex justify-start"}>
        <span className={className}>I am&nbsp;</span>
        <span className={className + " text-blue-500 drop-shadow-glow"}>
          Roman&nbsp;
        </span>
      </div>
      <div className={"flex justify-end"}>
        <span className={className + ""}>a Front End&nbsp;</span>
      </div>
      <div className={"flex justify-center"}>
        <span className={className}>Developer&nbsp;</span>
      </div>
    </div>
  );
}
