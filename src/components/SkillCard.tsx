interface SkillCardProps {
  img: string;
  alt: string;
  skillName: string;
  description: string;
}
export const SkillCard = ({
  img,
  alt,
  skillName,
  description,
}: SkillCardProps) => {
  return (
    <div className="w-52 h-52 bg-background-green rounded-2xl flex flex-col items-start justify-around gap-2.5 p-3 shadow-[4px_4px_21px_0px_rgba(0,0,0,0.25)] max-lg:size-30">
      <img src={img} alt={alt} className="max-lg:size-5" />
      <h3 className="text-2xl font-bold text-text-dark-white max-lg:text-sm">
        {skillName}
      </h3>
      <h5 className="text-base font-normal text-text-dark-white opacity-75 max-lg:text-[8px]">
        {description}
      </h5>
    </div>
  );
};
