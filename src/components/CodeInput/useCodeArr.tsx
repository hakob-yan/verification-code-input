import { useState } from "react";
const initialInputState = [
  { id: 0, focused: true, error: false, value: "" },
  { id: 1, focused: false, error: false, value: "" },
  { id: 2, focused: false, error: false, value: "" },
  { id: 3, focused: false, error: false, value: "" },
  { id: 4, focused: false, error: false, value: "" },
  { id: 5, focused: false, error: false, value: "" },
];
export function useCodeArr() {
  const [codeArr, setCodeArr] = useState(initialInputState);
  const code = () => codeArr.map((el) => el.value).join("");
  return {
    codeArr,
    changeValue: (value: string, id: number) => {
      const matchedData = value.match(/^\d+$/);
      if (!matchedData) return;

      if (code().length === 6 && id === 5) return;

      if (value.length === 2) {
        const oldValue = codeArr.find((el) => el.id === id)?.value;
        const newValue = value[0] === oldValue ? value[1] : value[0];
        setCodeArr(
          codeArr.map((el) => ({
            ...el,
            error: false,
            value: id === el.id ? newValue : el.value,
            focused: el.id === id + 1 ? true : false,
          }))
        );
      }
      if (value.length > 2) {
        setCodeArr(
          codeArr.map((el) => ({
            ...el,
            error: false,
            value: value[el.id],
            focused: value.length === el.id ? true : false,
          }))
        );
      } else if (value.length === 1) {
        setCodeArr(
          codeArr.map((el) => ({
            ...el,
            error: false,
            value: id === el.id ? value : el.value,
            focused: el.id === id + 1 ? true : false,
          }))
        );
      }
    },
    resetCodeArr: () => setCodeArr(initialInputState),
    resetWithErrorCodeArr: () =>
      setCodeArr(initialInputState.map((el) => ({ ...el, error: true }))),

    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>, id: number) => {
      const key = event.key;
      if (key === "Backspace" || key === "Delete") {
        event.preventDefault();
        setCodeArr(
          codeArr.map((el) => ({
            ...el,
            value: id === el.id ? "" : el.value,
            focused: el.id === id - 1 ? true : false,
          }))
        );
      }
    },
    code,
  };
}
