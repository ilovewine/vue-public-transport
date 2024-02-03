import { ServerResponseModel } from '@/types/response';
import axios from 'axios';
import { ACTION, Context } from '.';
import { MUTATION } from '../mutations';
import retrieveStops from './utils/retrieveStops';
import retrieveLines from './utils/retrieveLines';

const ENDPOINT_URL = `${import.meta.env.VITE_API_URL}/${
  import.meta.env.VITE_API_STOPS_PATH
}`;

export default async (context: Context) => {
  const response: Awaited<ServerResponseModel> = (await axios.get(ENDPOINT_URL))
    .data;

  context.commit(MUTATION.SET_BUS_STOPS, retrieveStops(response));
  context.commit(MUTATION.SET_BUS_LINES, retrieveLines(response));

  context.dispatch(ACTION.RESET_FILTERED_STOPS);
};
