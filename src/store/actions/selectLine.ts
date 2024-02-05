import { BusLineModel } from '@/types/BusLineModel';
import { Context } from '.';
import { MUTATION } from '../mutations';
import { EMPTY_STOP } from '../state';

export default (context: Context, line: BusLineModel) => {
  context.commit(MUTATION.SET_CURRENT_LINE, line);
  context.commit(MUTATION.SET_CURRENT_STOP, EMPTY_STOP);
};
