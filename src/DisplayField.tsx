import { useStore } from "./hooks/useStore";
import { Name } from "./types/Name";

type DisplayFieldProps = {
  name: Name;
};

export const DisplayField = ({ name }: DisplayFieldProps) => {
  const value = useStore(state => state[name]);

  return (
    <div className="field">
      {name}: {value}
    </div>
  );
};
