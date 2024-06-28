import { Unit } from "./unit";

export class Ingredient {
  amount: number;
  name: string;
  unit: Unit;

  constructor(name: string, amount: number, unit: Unit) {
    this.name = name;
    this.amount = amount;
    this.unit = unit;
  }

  toMetric() {
    const { newAmount, unit } = this.unit.toMetric(this.amount);
    this.amount = newAmount;
    this.unit = unit;
  }

  toImperial() {
    const { newAmount, unit } = this.unit.toImperial(this.amount);
    this.amount = newAmount;
    this.unit = unit;
  }

  displayAmount() {
    return (Math.round(this.amount * 100) / 100).toString();
  }
}
