// import Action from '../Action/Action';

const initialState = {
    cart:[]    
 };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'ADD_TO_FAV': return{
            ...state,
            cart:action.payload
        }

        case 'REMOVE_FROM_FAV': return{
         ...state,
         cart:action.payload
       }
    
       default:
          return state;
    }
 }
 export default rootReducer;