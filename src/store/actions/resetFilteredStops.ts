import { Context } from '.';
import { MUTATION } from '../mutations';

export default (context: Context) => {
  console.log(context.state.stops);
  context.commit(MUTATION.SET_FILTERED_STOPS, context.state.stops);
};
