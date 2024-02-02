import { Context } from '.';
import { MUTATION } from '../mutations';

export default (context: Context) =>
  context.commit(MUTATION.SET_FILTERED_STOPS, context.state.stops);
