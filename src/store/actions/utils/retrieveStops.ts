import Sortable from '@/class/sort';
import { ServerResponseModel } from '@/types/response';
import removeDuplicates from '@/utils/removeDuplicates';

export default (response: ServerResponseModel): Sortable<string> =>
  new Sortable(removeDuplicates(response.map((stopData) => stopData.stop)));
