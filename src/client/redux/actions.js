import { ReduxActionType } from '../configs/enums';

export const setupLanguage = (lang) => ({
  type: ReduxActionType.SETUP_LANGUAGE,
  payload: lang
})


// export const addUserData = (key, data) => ({
//   type: ReduxActionType.ADD_USER_DATA,
//   key,
//   data
// });

// export const setLeaderboardsData = (data) => ({
//   type: ReduxActionType.SET_LEADERBOARDS_DATA,
//   data
// });

// export const retrieveFavoriteUsersFromStorage = () => ({
//   type: ReduxActionType.RETRIEVE_FAVORITE_USERS_FROM_STORAGE
// });

// export const addFavoriteUser = (name) => ({
//   type: ReduxActionType.ADD_FAVORITE_USER,
//   name
// });

// export const deleteFavoriteUser = (name) => ({
//   type: ReduxActionType.DELETE_FAVORITE_USER,
//   name
// });

// export const setScreen = (screen) => ({
//   type: ReduxActionType.SET_SCREEN,
//   screen
// });
// export const setLeaderboardsTimer = (timer) => ({
//   type: ReduxActionType.SET_LEADERBOARDS_TIMER,
//   timer
// });