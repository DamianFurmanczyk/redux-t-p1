export default function selectAnimeReducer(state = null, action) {
  switch (action.type) {
    case 'ANIME_SELECT':
      console.log('anime select');
      return action.payload;
    default:
      return state;
  }

  return state;
}