import { BusLineModel } from '@/model/BusLine';
import { BusLineStopModel } from '@/model/BusStop';
import { ServerResponse, ServerResponseModel } from '@/model/response';
import removeDuplicates from '@/utils/removeDuplicates';

export default (response: ServerResponseModel): BusLineModel[] => {
  const lines: number[] = removeDuplicates(
    response.map((stopData) => stopData.line)
  );

  return lines
    .map((line) => {
      const ungroupedStops = response.filter(
        (stopData) => stopData.line === line
      );

      const groupedStops = ungroupedStops.reduce(
        (
          accumulator: Record<string, BusLineStopModel>,
          currentValue: ServerResponse
        ) => {
          if (!accumulator[currentValue.stop]) {
            accumulator[currentValue.stop] = {
              stop: currentValue.stop,
              order: currentValue.order,
              timetable: [currentValue.time],
            };
          } else
            accumulator[currentValue.stop].timetable.push(currentValue.time);
          return accumulator;
        },
        {}
      );

      return {
        line,
        stops: Object.values(groupedStops).sort(
          (stopA, stopB) => stopA.order - stopB.order
        ),
      };
    })
    .sort((lineA, lineB) => lineA.line - lineB.line);
};
