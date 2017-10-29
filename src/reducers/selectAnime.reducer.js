export default function selectAnimeReducer(state = null, action) {
  // odpala sie na pocz, null so not undefined
  switch (action.type) {
    case 'ANIME_SELECT':
      console.log('anime selected');
      return action.payload;
      // ^returnuje nowa wartosc brancha ktory do tego przypniemy w combine reducers
    default:
      return state;
  }
  console.log('fired off!');
  return state;
  // if state to which action is corresponding is not above one do nothing
}