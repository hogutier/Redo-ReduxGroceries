import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger'


// ACTION TYPES
const ADD_GROCERY = 'ADD_GROCERY';
const TOGGLE_GROCERY = 'TOGGLE_GROCERY';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_BOUGHT = 'SHOW_BOUGHT';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';

//ACTION CREATORS
let nextId = 0;
export const addGrocery = (text) => (
  {
    type: ADD_GROCERY,
    id: nextId++,
    text
  }
);

export const toggleGrocery = (id) => (
  {
    type: TOGGLE_GROCERY,
    id
  }
)

export const setVisibilityFilter = (value) => (
  {
    type: SET_VISIBILITY_FILTER,
    value
  }
)

// INITIAL STATE
const initialState = {
  groceries: [],
  visibilityFilter: SHOW_ALL
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_GROCERY:
      const newGrocery = {
        id: action.id,
        text: action.text,
        bought: false
      }
      return { ...state, groceries: [...state.groceries, newGrocery] }
    case TOGGLE_GROCERY:
      //Mapping over all groceries in the state
      const groceries = state.groceries.map(grocery => {

        if(grocery.id === action.id){
          //This is the grocery that needs to be updated
          //Return a new, updated object instead of the original one
          return {...grocery, bought: !grocery.bought}
        } else {
          //This grocery does not need to be updated
          //Simply return its original value
          return grocery;
        }
      })
      return { ...state, groceries }
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        groceries: [...state.groceries],
        visibilityFilter: action.value
      }
    default:
    return state;
  }
}

// STORE
const store = createStore(reducer, applyMiddleware(loggerMiddleware));

//MANUAL TEST (TEMPORARILY HARD CODED DISPATCHES)
//store.dispatch(addGrocery("Milk"));
//store.dispatch(addGrocery("Cokkies"));

export default store;

