export interface ITechnologies {
  name: string;
  url: string;
}

export interface TechnologiesListProps {
  technologies: ITechnologies[];
}

export const Technology = ({ technologies }: TechnologiesListProps) => {
  return (
    <>
      {technologies?.map((technology) => (
        <div className="items-center border rounded-md flex p-2  justify-center pb-2" key={technology.name}>
          <div className="w-6 h-6 mr-2">
            <img  src={technology.url} alt={technology.name} />
          </div>
          <div>
            <h4 >{technology.name}</h4>
          </div>
        </div>
      ))}
    </>
  );
};
