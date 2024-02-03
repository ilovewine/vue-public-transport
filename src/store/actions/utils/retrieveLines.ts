import { BusLineModel } from '@/types/BusLine';
import { BusLineStopModel } from '@/types/BusStop';
import { ServerResponse, ServerResponseModel } from '@/types/response';
import compareTimes from '@/utils/compareTimes';
import removeDuplicates from '@/utils/removeDuplicates';
import { sortBy, sortWithMethod } from '@/utils/sort';

export default (response: ServerResponseModel): BusLineModel[] => {
  const lines: number[] = removeDuplicates(
    response.map((stopData) => stopData.line)
  );

  const unsortedLines = lines.map((line) => {
    const ungroupedStops = response.filter(
      (stopData) => stopData.line === line
    );

    const groupedStops = Object.values(
      ungroupedStops.reduce(
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
      )
    ).map((stopData) => ({
      ...stopData,
      timetable: sortWithMethod(stopData.timetable, compareTimes),
    }));

    return {
      line,
      stops: sortBy(groupedStops, (property) => property.order),
    };
  });

  return sortBy(unsortedLines, (property) => property.line);
};
