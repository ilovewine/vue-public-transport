import { ServerResponseModel } from '@/model/response';
import axios from 'axios';

export default async (context) => {
  const response = (await axios.get(
    'http://localhost:3000/stops'
  )) satisfies ServerResponseModel;
  console.log(response);
};
