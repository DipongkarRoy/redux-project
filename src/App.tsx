//hooks theke call kore kaj korci //
import {
  decrement,
  increment,
  incrementsByValue,
  reset,
} from "./redux/features/counter";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispacth = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border-2 border-teal-300 p-4">
        <button
          onClick={() => dispacth(increment())}
          className="btn bg-red-400 text-xl rounded-md text-white p-2 mr-4"
        >
          increment
        </button>
        <button
          onClick={() => dispacth(incrementsByValue(5))}
          className="btn bg-red-400 text-xl rounded-md text-white p-2"
        >
          incrementByValue
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispacth(decrement())}
          className="btn bg-green-400 text-xl rounded-md text-white p-2"
        >
          decrement
        </button>
      </div>
      <div className="flex justify-center items-center m-4 p-4 border-2 border-zinc-500">
        <button
          onClick={() => dispacth(reset())}
          className="btn bg-yellow-700 hover:bg-red-300 text-1xl rounded-md text-white p-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
