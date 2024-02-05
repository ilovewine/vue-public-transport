import { BusLineModel } from '@/types/BusLineModel';
import { BusStopModel } from '@/types/BusStopModel';
import { ServerResponse, ServerResponseModel } from '@/types/response';
import timeComparisonCriteria from '@/utils/time';
import removeDuplicates from '@/utils/removeDuplicates';
import { sort } from '@/utils/sort';
import { SORT_METHOD, Sortable } from '@/types/sort';

export default (response: ServerResponseModel): Sortable<BusLineModel> => {
  const lines: number[] = removeDuplicates(
    response.map((stopData) => stopData.line)
  );

  const unsortedLines = {
    sorting: {
      method: SORT_METHOD.ASCENDING,
      criteria: (value: BusLineModel) => value.line,
    },
    list: lines.map((line) => {
      const ungroupedStops = response.filter(
        (stopData) => stopData.line === line
      );

      const groupedStops = Object.values(
        ungroupedStops.reduce(
          (
            accumulator: Record<string, BusStopModel>,
            currentValue: ServerResponse
          ) => {
            if (!accumulator[currentValue.stop]) {
              const timetable = {
                list: [currentValue.time],
                sorting: {
                  method: SORT_METHOD.ASCENDING,
                  criteria: (time: string) => timeComparisonCriteria(time),
                },
              } satisfies Sortable<string>;

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
      ).map((stopData) => ({
        ...stopData,
        timetable: sort<string>(stopData.timetable),
      }));

      const sortableStops = sort<BusStopModel>({
        list: groupedStops,
        sorting: {
          method: SORT_METHOD.ASCENDING,
          criteria: (value: BusStopModel) => value.order,
        },
      });

      return {
        line,
        stops: sortableStops,
      };
    }),
  };

  return sort<BusLineModel>(unsortedLines);
};
