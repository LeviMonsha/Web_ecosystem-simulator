export interface SimulationState {
  organisms: Organism[];
  isPaused: boolean;
  speed: number;
}

export interface Organism {
  id: string;
  position: { x: number; y: number };
  energy: number;
  age: number;
  size: number;
  speed: number;
}

class OrganismUtils {
  static getRandomSpeed(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  static randomMove(speed: number): { x: number; y: number } {
    const angle = Math.random() * Math.PI * 2;
    return {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed,
    };
  }
}

class Plant implements Organism {
  id: string;
  position: { x: number; y: number };
  energy: number;
  age: number;
  size: number;
  speed: 0;

  type: "plant";

  constructor(
    id: string,
    position: { x: number; y: number },
    energy: number,
    age: number,
    size: number,
    speed: number
  ) {
    this.id = id;
    this.type = "plant";
    this.position = position;
    this.energy = energy;
    this.age = age;
    this.size = size;
    this.speed = 0;
  }

  calculateMovement(): { x: number; y: number } {
    return { x: 0, y: 0 };
  }
}

class Herbivore implements Organism {
  id: string;
  position: { x: number; y: number };
  energy: number;
  age: number;
  size: number;
  speed: number;

  type: "herbivore";

  constructor(
    id: string,
    position: { x: number; y: number },
    energy: number,
    age: number,
    size: number,
    speed: number
  ) {
    this.id = id;
    this.position = position;
    this.energy = energy;
    this.age = age;
    this.size = size;
    this.type = "herbivore";
    this.speed = OrganismUtils.getRandomSpeed(1.0, 2.5);
  }

  calculateMovement(): { x: number; y: number } {
    return OrganismUtils.randomMove(this.speed);
  }
}

class Carnivore implements Organism {
  id: string;
  position: { x: number; y: number };
  energy: number;
  age: number;
  size: number;
  speed: number;

  type: "carnivore";

  constructor(
    id: string,
    position: { x: number; y: number },
    energy: number,
    age: number,
    size: number,
    speed: number
  ) {
    this.id = id;
    this.position = position;
    this.energy = energy;
    this.age = age;
    this.size = size;
    this.type = "carnivore";
    this.speed = OrganismUtils.getRandomSpeed(0.5, 1.5);
  }

  calculateMovement(): { x: number; y: number } {
    return OrganismUtils.randomMove(this.speed);
  }
}
