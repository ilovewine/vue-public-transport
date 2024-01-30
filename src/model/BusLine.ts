interface BusLineStop {
  stop: string;
  order: number;
  time: string[];
}

interface BusLine {
  line: number;
  stops: BusLineStop[];
}

export type BusLineModel = BusLine[];
