import ActionConstants from '../actions/actionTypes';

const initialState = {
  showSideBar: true,
  collapse: false,
  users: [],
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionConstants.CHANGE_SIDEBAR_VISIBILITY:
      return { ...state, collapse: !state.collapse };
    case ActionConstants.CHANGE_MOBILE_SIDEBAR_VISIBILITY:
      return { ...state, show: !state.show };
    case ActionConstants.FETCH_FILES_SUCCESS:
      return { ...state, users: action.data };
    default:
      return state;
  }
}
