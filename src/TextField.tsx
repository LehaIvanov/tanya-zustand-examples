import { useStore } from "./hooks/useStore";
import { Name } from "./types/Name";

type TextFieldProps = {
  name: Name;
};

export const TextField = ({ name }: TextFieldProps) => {
  const value = useStore(state => state[name]);
  const { setStore } = useStore(state => state.actions);

  return (
    <div className="field">
      {name}: <input value={value} onChange={e => setStore(name, e.target.value)} />
    </div>
  );
};
