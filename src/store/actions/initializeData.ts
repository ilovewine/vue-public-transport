import { ServerResponseModel } from '@/model/response';
import axios from 'axios';
import { Context } from '.';
import { MUTATION } from '../mutations';
import retrieveStops from './utils/retrieveStops';
import retrieveLines from './utils/retrieveLines';

const ENDPOINT_URL = `${import.meta.env.VITE_API_URL}/${
  import.meta.env.VITE_API_STOPS_PATH
}`;

export default async (context: Context) => {
  const response: Awaited<ServerResponseModel> = (await axios.get(ENDPOINT_URL))
    .data;

  const allStops = retrieveStops(response);

  context.commit(MUTATION.SET_BUS_STOPS, allStops);
  context.commit(MUTATION.SET_FILTERED_STOPS, allStops);
  context.commit(MUTATION.SET_BUS_LINES, retrieveLines(response));
};
