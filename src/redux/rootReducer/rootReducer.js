// import Action from '../Action/Action';

const initialState = {
   data:[],
   fav:[]
}

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_TO_FAV': return {
        ...state,
        fav:action.payload
      }
      case 'REMOVE_FROM_FAV': return {
         ...state,
         fav: action.payload
      }

      default:
         return state;
   }
}
export default rootReducer;