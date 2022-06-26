import React, { useState } from "react";
import { Canvas } from "../components/Canvas";
import { Layout } from "../components/Layout";
import { useStateContext } from "../context/StateProvider";

const Triangle = () => {
  const { setMagnification } = useStateContext();

  const [inputMagnification, setInputMagnification] = useState("");

  const changeMagnification = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Number(inputMagnification))
      setMagnification(Number(inputMagnification));
    setInputMagnification("");
  };

  return (
    <Layout title="triangle">
      <div className=" flex h-full w-full flex-col overflow-hidden">
        <form
          className="flex w-full justify-center"
          onSubmit={changeMagnification}
        >
          <input
            type="text"
            step="0.01"
            value={inputMagnification}
            onChange={(e) => {
              setInputMagnification(e.target.value);
            }}
            placeholder="倍率"
            className=" mr-4 w-1/2 rounded-md border px-4 py-2 md:w-1/3"
          />
          <button className="btn text-base md:text-xl">変更する</button>
        </form>
        <Canvas />
      </div>
    </Layout>
  );
};

export default Triangle;
