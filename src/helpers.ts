import {
  BRICK_IMAGES,
  STAGE_COLS,
  STAGE_PADDING,
  BRICK_WIDTH,
  BRICK_HEIGHT,
  BRICK_PADDING,
  BRICK_ENERGY,
  LEVEL,
} from "./setup";
import { Brick } from "./sprites/Brick";

export function createBricks(): Brick[] {
  return LEVEL.reduce((acc, element, itarator) => {
    const row = Math.floor((itarator + 1) / STAGE_COLS);
    const col = itarator % STAGE_COLS;

    const x = STAGE_PADDING + col * (BRICK_WIDTH + BRICK_PADDING);
    const y = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING);

    if (element === 0) return acc;

    return [
      ...acc,
      new Brick(
        BRICK_WIDTH,
        BRICK_HEIGHT,
        { x, y },
        BRICK_ENERGY[element],
        BRICK_IMAGES[element]
      ),
    ];
  }, [] as Brick[]);
}
