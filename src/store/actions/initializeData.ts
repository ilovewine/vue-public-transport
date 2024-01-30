import { ServerResponseModel } from '@/model/response';
import axios from 'axios';

const ENDPOINT_URL = `${import.meta.env.VITE_API_URL}/${
  import.meta.env.VITE_API_STOPS_PATH
}`;

export default async (context) => {
  const response = (await axios.get(
    ENDPOINT_URL
  )) satisfies ServerResponseModel;
  console.log(response);
};
