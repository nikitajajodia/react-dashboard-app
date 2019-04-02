import actionTypes from './actionTypes';

export function toggleSideBar() {
  return {
    type: actionTypes.CHANGE_SIDEBAR_VISIBILITY,
  };
}

export function fetchFiles() {
  return {
    type: actionTypes.FETCH_FILES,
  };
}
