import { ServerResponseModel } from '@/types/response';
import removeDuplicates from '@/utils/removeDuplicates';

export default (response: ServerResponseModel): string[] =>
  removeDuplicates(response.map((stopData) => stopData.stop)).sort();
