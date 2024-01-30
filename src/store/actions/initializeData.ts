import { ServerResponseModel } from '@/model/response';
import axios from 'axios';
import { ActionContext } from '.';

const ENDPOINT_URL = `${import.meta.env.VITE_API_URL}/${
  import.meta.env.VITE_API_STOPS_PATH
}`;

export default async (context: ActionContext) => {
  const response = (await axios.get(
    ENDPOINT_URL
  )) satisfies ServerResponseModel;
  console.log(response);
};
