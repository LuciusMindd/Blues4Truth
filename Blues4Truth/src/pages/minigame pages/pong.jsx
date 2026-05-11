import { useState, useEffect, useRef } from "react";
import Header from "../../Header";

function Pong() {
  const canvasRef = useRef(null);
  const gameStateRef = useRef({
    playerAScore: 0,
    playerBScore: 0,
    leftPaddle: { y: 250, height: 100, speed: 6 },
    rightPaddle: { y: 250, height: 100, speed: 6 },
    ball: { x: 400, y: 300, radius: 7, dx: 4, dy: 4 },
    keys: { w: false, s: false, arrowup: false, arrowdown: false },
  });

  const [gameState, setGameState] = useState(gameStateRef.current);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const keys = gameStateRef.current.keys;

    // Keyboard event listeners
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (["w", "s", "arrowup", "arrowdown"].includes(key)) {
        keys[key] = true;
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      if (["w", "s", "arrowup", "arrowdown"].includes(key)) {
        keys[key] = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Game loop
    const gameLoop = () => {
      const state = gameStateRef.current;

      // Update paddles
      if (keys.w && state.leftPaddle.y > 0) {
        state.leftPaddle.y -= state.leftPaddle.speed;
      }
      if (keys.s && state.leftPaddle.y < 600 - state.leftPaddle.height) {
        state.leftPaddle.y += state.leftPaddle.speed;
      }
      if (keys.arrowup && state.rightPaddle.y > 0) {
        state.rightPaddle.y -= state.rightPaddle.speed;
      }
      if (keys.arrowdown && state.rightPaddle.y < 600 - state.rightPaddle.height) {
        state.rightPaddle.y += state.rightPaddle.speed;
      }

      // Update ball
      state.ball.x += state.ball.dx;
      state.ball.y += state.ball.dy;

      // Ball collision with top and bottom
      if (state.ball.y - state.ball.radius < 0 || state.ball.y + state.ball.radius > 600) {
        state.ball.dy = -state.ball.dy;
      }

      // Ball collision with left paddle
      if (
        state.ball.x - state.ball.radius < 30 &&
        state.ball.y > state.leftPaddle.y &&
        state.ball.y < state.leftPaddle.y + state.leftPaddle.height
      ) {
        state.ball.dx = -state.ball.dx;
        state.ball.x = 30 + state.ball.radius;
      }

      // Ball collision with right paddle
      if (
        state.ball.x + state.ball.radius > 770 &&
        state.ball.y > state.rightPaddle.y &&
        state.ball.y < state.rightPaddle.y + state.rightPaddle.height
      ) {
        state.ball.dx = -state.ball.dx;
        state.ball.x = 770 - state.ball.radius;
      }

      // Ball out of bounds (left side - Player B scores)
      if (state.ball.x - state.ball.radius < 0) {
        state.playerBScore += 1;
        state.ball.x = 400;
        state.ball.y = 300;
        state.ball.dx = 4;
        state.ball.dy = 4;
      }

      // Ball out of bounds (right side - Player A scores)
      if (state.ball.x + state.ball.radius > 800) {
        state.playerAScore += 1;
        state.ball.x = 400;
        state.ball.y = 300;
        state.ball.dx = -4;
        state.ball.dy = 4;
      }

      setGameState({ ...state });
      requestAnimationFrame(gameLoop);
    };

    const animationFrameId = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Draw game state on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw center line
    ctx.strokeStyle = "white";
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw paddles
    ctx.fillStyle = "white";
    ctx.fillRect(20, gameState.leftPaddle.y, 10, gameState.leftPaddle.height);
    ctx.fillRect(
      770,
      gameState.rightPaddle.y,
      10,
      gameState.rightPaddle.height
    );

    // Draw ball
    ctx.beginPath();
    ctx.arc(
      gameState.ball.x,
      gameState.ball.y,
      gameState.ball.radius,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // Draw score
    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.fillText(
      `Player A: ${gameState.playerAScore}  |  Player B: ${gameState.playerBScore}`,
      canvas.width / 2,
      30
    );
  }, [gameState]);

  return (
    <>
      <Header
        title="Paddling Blues"
        subtitle="Player A (W/S) vs Player B (Arrow Keys)"
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className="border-4 border-white rounded-xl"
        />
        <div className="text-white text-center">
          <p className="text-lg">
            <strong>Player A:</strong> W/S keys | <strong>Player B:</strong>{" "}
            Arrow Up/Down
          </p>
        </div>
      </div>
    </>
  );
}

export default Pong;
