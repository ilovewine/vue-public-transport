import { ServerResponseModel } from '@/types/response';
import { SORT_METHOD, Sortable } from '@/types/sort';
import removeDuplicates from '@/utils/removeDuplicates';
import { sort } from '@/utils/sort';

export default (response: ServerResponseModel): Sortable<string> =>
  sort({
    list: removeDuplicates(response.map((stopData) => stopData.stop)),
    sorting: {
      method: SORT_METHOD.ASCENDING,
    },
  });
