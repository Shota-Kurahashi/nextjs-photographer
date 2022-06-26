import React, { FC, useEffect, useRef } from "react";

type Props = {
  magnification: number;
};

const Canvas: FC<Props> = ({ magnification }) => {
  const canvasRef = useRef(null);

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;
    canvas.width = (window.innerWidth * 8) / 8;
    canvas.height = (window.innerHeight * 8) / 8;

    return canvas.getContext("2d");
  };

  useEffect(() => {
    const ctx: CanvasRenderingContext2D = getContext();
    console.log(magnification);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, 0); // 最初の点の場所
    ctx.lineTo(48 * magnification, 48 * magnification); // 2番目の点の場所
    ctx.lineTo(0, 48 * magnification); // 3番目の点の場所
    ctx.closePath(); // 三角形の最後の線 closeさせる
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.stroke();
    ctx.fillStyle = "rgba(0,0,255,0.1)"; // 塗りつぶしの色
    ctx.fill();
  }, [magnification]);

  return (
    <div className="my-8 h-full w-full">
      <canvas className="canvas main" ref={canvasRef} />
    </div>
  );
};

export { Canvas };
