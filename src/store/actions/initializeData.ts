import { ServerResponseModel } from '@/types/response';
import { ACTION, Context } from '.';
import { MUTATION } from '../mutations';
import retrieveStops from './utils/retrieveStops';
import retrieveLines from './utils/retrieveLines';

export default async (context: Context) => {
  // @ts-ignore
  const response = (await import('/data.json')).stops as ServerResponseModel;
  console.log(response)
  context.commit(MUTATION.SET_BUS_STOPS, retrieveStops(response));
  context.commit(MUTATION.SET_BUS_LINES, retrieveLines(response));

  context.dispatch(ACTION.RESET_FILTERED_STOPS);
};
