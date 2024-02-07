import { ServerResponseModel } from '@/types/response';

const generateLine = (index: number) => {
  const indexArray = [...Array(5).keys()];
  const firstBus = Array.from(indexArray).map((mapIndex) => ({
    line: index,
    stop: `stop ${mapIndex + 1}`,
    order: mapIndex + 1,
    time: `8:1${mapIndex}`,
  }));

  const secondBus = Array.from(indexArray).map((mapIndex) => ({
    line: index,
    stop: `stop ${mapIndex + 1}`,
    order: mapIndex + 1,
    time: `9:1${mapIndex}`,
  }));

  return [...firstBus, ...secondBus];
};

const response: ServerResponseModel = [...Array(3).keys()]
  .map((index) => generateLine(index))
  .flat();

export default response;
