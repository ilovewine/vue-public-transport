import { BusLineModel } from '@/types/BusLineModel';
import { BusStopModel } from '@/types/BusStopModel';
import { ServerResponse, ServerResponseModel } from '@/types/response';
import timeComparisonCriteria from '@/utils/time';
import removeDuplicates from '@/utils/removeDuplicates';
import Sortable from '@/class/sort';

export default (response: ServerResponseModel): Sortable<BusLineModel> => {
  const lines: number[] = removeDuplicates(
    response.map((stopData) => stopData.line)
  );

  const linesList: BusLineModel[] = lines.map((line) => {
    const ungroupedStops = response.filter(
      (stopData) => stopData.line === line
    );

    const groupedStops = Object.values(
      ungroupedStops.reduce(
        (
          accumulator: Record<string, BusStopModel>,
          currentValue: ServerResponse
        ) => {
          const timetable = new Sortable([currentValue.time], (time: string) =>
            timeComparisonCriteria(time)
          );

          if (!accumulator[currentValue.stop]) {
            accumulator[currentValue.stop] = {
              stop: currentValue.stop,
              order: currentValue.order,
              timetable,
            };
          } else
            accumulator[currentValue.stop].timetable.list.push(
              currentValue.time
            );
          return accumulator;
        },
        {}
      )
    );

    groupedStops.forEach((stop) => stop.timetable.sort());

    const sortableStops = new Sortable(
      groupedStops,
      (value: BusStopModel) => value.order
    );

    sortableStops.sort();

    return {
      line,
      stops: sortableStops,
    };
  });

  const result = new Sortable(linesList, (value: BusLineModel) => value.line);

  result.sort();

  return result;
};
