import React, { FC, useEffect, useRef } from "react";
import { useStateContext } from "../context/StateProvider";

const Canvas: FC = () => {
  const { magnification, vertical, beside } = useStateContext();
  const canvasRef = useRef(null);

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = 1000;

    return canvas.getContext("2d");
  };

  useEffect(() => {
    const ctx: CanvasRenderingContext2D = getContext();
    console.log(magnification);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(100, 900, 5, (0 * Math.PI) / 180, (360 * Math.PI) / 180, false);
    ctx.fill();

    ctx.fillStyle = "rgba(0,0,255,0.1)"; // 塗りつぶしの色
    ctx.moveTo(100, 900); // 最初の点の場所
    ctx.lineTo(100, 900 - vertical * 100 * magnification); // 2番目の点の場所
    ctx.lineTo(100 + beside * 100 * magnification, 900); // 3番目の点の場所
    ctx.closePath(); // 三角形の最後の線 closeさせる
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.stroke();
    ctx.fill();
  }, [magnification, beside, vertical]);

  return (
    <div className=" my-8 h-full w-full">
      <canvas className="canvas main " ref={canvasRef} />
    </div>
  );
};

export { Canvas };
