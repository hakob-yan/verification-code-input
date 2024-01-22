import { useEffect, useRef } from "react";
import { ICodeOptions } from "./types";



export const CodeInput = ({ item, onChange, onKeyDown }: ICodeOptions) => {
  const ref = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    ref.current && item.focused && ref.current.focus();
  }, [item.focused]);

  return (
    <>
      <input
        onKeyDown={(e) => onKeyDown(e, item.id)}
        ref={ref}
        onChange={(e) => onChange(e.target.value, item.id)}
        value={item.value}
        type="text"
        placeholder="*"
        className={`bg-surface-secondary shadow-default w-12 h-12 text-center rounded-md ${
          item.error ? "error" : "regular"
        }  focus:focused focus:bg-surface-primary`}
      />
      {item.id === 2 && <span className="flex items-center">-</span>}
    </>
  );
};
