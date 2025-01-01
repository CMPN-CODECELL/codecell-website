import React, { useEffect, useRef } from "react";
import "./Matrix.css";

class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>/$@#&*{}~";
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = "";
    this.canvasHeight = canvasHeight;
  }

  draw(context) {
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length)
    );
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (
      this.y * this.fontSize > this.canvasHeight + 1000 &&
      Math.random() > 0.99
    ) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 22;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
  #initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }

  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
}

const Matrix = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth + 20);
    let height = (canvas.height = window.innerHeight + 500);
    const effect = new Effect(canvas.width, canvas.height);

    // Gradient
    let gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      150,
      canvas.width / 2,
      canvas.height / 2,
      800
    );
    gradient.addColorStop(0, "#251e04");
    gradient.addColorStop(0.5, "#53430a");
    gradient.addColorStop(0.8, "#816710");
    gradient.addColorStop(1, "#f6c31c");

    // frameRate control
    let lastTime = 0;
    const fps = 30;
    const nextFrame = 1000 / fps;
    let timer = 0;

    function animate(timeStamp) {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      if (timer > nextFrame) {
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "rgba(5, 8, 22, 0.15)";
        // ctx.fillStyle = "rgba(5, 8, 22, 0.12)";
        ctx.textAlign = "center";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = gradient; // "#816710";
        ctx.font = effect.fontSize + "px monospace";
        effect.symbols.forEach((symbol) => symbol.draw(ctx));
        timer = 0;
      } else {
        timer += deltaTime;
      }
      requestAnimationFrame(animate);
    }
    animate(0);

    window.addEventListener("resize", function () {
      if (canvas.width != window.innerWidth) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        effect.resize(canvas.width, canvas.height);
      }
    });
  }, []);
  return <canvas className="matrix-canvas" ref={canvasRef}></canvas>;
};

export default Matrix;
