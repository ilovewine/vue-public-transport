import Sortable from '@/class/sort';
import { ServerResponseModel } from '@/types/response';
import { SORT_METHOD } from '@/types/sort';
import removeDuplicates from '@/utils/removeDuplicates';

export default (response: ServerResponseModel): Sortable<string> =>
  new Sortable(removeDuplicates(response.map((stopData) => stopData.stop)), {
    method: SORT_METHOD.ASCENDING,
  });
