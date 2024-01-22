import React, { ReactElement } from "react";
// import { increment, decrement } from "../../redux/rootSlice";
import { CodeInput } from "../../components/CodeInput";
import { useCodeArr } from "../../components/CodeInput/useCodeArr";
const Home = (): ReactElement => {
  // const count = useSelector((state: ICount) => state.value);

  // const dispatch = useDispatch();
  const {
    codeArr,
    changeValue,
    resetCodeArr,
    resetWithErrorCodeArr,
    onKeyDown,
    code,
  } = useCodeArr();

  return (
    <div>
      {/* <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button> */}
      <div className="flex justify-center gap-x-2">
        {codeArr.map((el) => (
          <CodeInput
            key={el.id}
            item={el}
            onChange={changeValue}
            onKeyDown={onKeyDown}
          />
        ))}
      </div>
      <div className="flex justify-center py-8">
        <p>{code()}</p>
      </div>
      <div className="flex justify-center py-8 gap-x-4">
        <button
          className="py-4 px-8 bg-blue-500 rounded-xl text-white"
          onClick={resetCodeArr}
        >
          Reset
        </button>
        <button
          className="py-4 px-8 bg-blue-500 rounded-xl text-white"
          onClick={resetWithErrorCodeArr}
        >
          Reset With Error
        </button>
      </div>
    </div>
  );
};

export default Home;
