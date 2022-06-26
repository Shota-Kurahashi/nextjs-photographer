import React, { useState } from "react";
import { Canvas } from "../components/Canvas";
import { Layout } from "../components/Layout";
import { useStateContext } from "../context/StateProvider";

const Triangle = () => {
  const { setMagnification, setVertical, setBeside } = useStateContext();

  const [inputMagnification, setInputMagnification] = useState("");
  const [inputVertical, setInputVertical] = useState("");
  const [inputBeside, setInputBeside] = useState("");

  const changeMagnification = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Number(inputMagnification))
      setMagnification(Number(inputMagnification));
    if (Number(inputVertical)) setVertical(Number(inputVertical));
    if (Number(inputBeside)) setBeside(Number(inputBeside));
  };

  return (
    <Layout title="triangle ">
      <div className=" flex h-full w-full flex-col  ">
        <form
          className="items-evenly flex  w-full justify-center "
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
          <input
            type="text"
            step="0.01"
            value={inputVertical}
            onChange={(e) => {
              setInputVertical(e.target.value);
            }}
            placeholder="縦 (cm)"
            className=" mr-4 w-1/2 rounded-md border px-4 py-2 md:w-1/3"
          />
          <input
            type="text"
            step="0.01"
            value={inputBeside}
            onChange={(e) => {
              setInputBeside(e.target.value);
            }}
            placeholder="横 (cm)"
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
