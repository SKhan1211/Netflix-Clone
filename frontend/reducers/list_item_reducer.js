import { ADD_LIST_ITEM, REMOVE_LIST_ITEM } from '../actions/list_item_actions';

const listItemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      state.push(action.listItem);
      return state;
    case REMOVE_LIST_ITEM:
      return state.filter(el => el.id !== action.listItem.id);
    default:
      return state;
  };
};

export default listItemReducer;