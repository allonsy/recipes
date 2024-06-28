export class Unit {
  name: string = "N/A";
  symbol: string = "N/A";

  toMetric(amount: number): { newAmount: number; unit: Unit } {
    return {
      newAmount: amount,
      unit: this,
    };
  }

  toImperial(amount: number): { newAmount: number; unit: Unit } {
    return {
      newAmount: amount,
      unit: this,
    };
  }
}

export class Gram extends Unit {
  name = "gram";
  symbol = "gr";

  toImperial(amount: number) {
    return {
      newAmount: amount / 28.3495,
      unit: new Ounce(),
    };
  }
}

export class Ounce extends Unit {
  name = "ounce";
  symbol = "oz";

  toMetric(amount: number) {
    return { newAmount: amount * 28.3495, unit: new Gram() };
  }
}

export class Quantity extends Unit {
  name = "Quantity";
  symbol = "Qty";
}

export class NoneUnit extends Unit {}

export class Mililiter extends Unit {
  name = "mililiter";
  symbol = "ml";

  toImperial(amount: number) {
    return { newAmount: amount / 236.588, unit: new Cup() };
  }
}

export class Cup extends Unit {
  name = "cup";
  symbol = "cup";

  toMetric(amount: number) {
    return { newAmount: amount * 236.588, unit: new Mililiter() };
  }
}

export class Teaspoon extends Unit {
  name = "teaspoon";
  symbol = "tsp";
}

export class Tablespoon extends Unit {
  name = "tablespoon";
  symbol = "tbsp";
}

export class Celsius extends Unit {
  name = "celsius";
  symbol = "°c";

  toImperial(amount: number) {
    return { newAmount: (amount * 9) / 5 + 32, unit: new Fahrenheit() };
  }
}

export class Fahrenheit extends Unit {
  name = "fahrenheit";
  symbol = "°f";

  toMetric(amount: number) {
    return { newAmount: ((amount - 32) * 5) / 9, unit: new Celsius() };
  }
}
