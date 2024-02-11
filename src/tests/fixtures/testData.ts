import Sortable from '@/class/Sortable';
import { BusLineModel } from '@/types/BusLineModel';
import { BusStopModel } from '@/types/BusStopModel';

export const stops = () =>
  new Sortable<BusStopModel>(
    [...Array(5).keys()].map((index) => ({
      stop: `stop ${index}`,
      order: index + 1,
      timetable: new Sortable(['10:00', '11:00', '12:00']),
    })),
    (value) => value.order
  );

export const stringStops = () =>
  new Sortable(stops().list.map((stop) => stop.stop));

export const lines = () =>
  new Sortable<BusLineModel>(
    [...Array(3).keys()].map((index) => ({
      line: index,
      stops: stops(),
    })),
    (value) => value.line
  );
