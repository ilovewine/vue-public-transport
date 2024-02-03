import { BusLineModel } from '@/types/BusLine';
import { Context } from '.';
import { MUTATION } from '../mutations';

export default (context: Context, line: BusLineModel) => {
  context.commit(MUTATION.SET_CURRENT_LINE, line);
  context.commit(MUTATION.SET_CURRENT_STOP, null);
};
