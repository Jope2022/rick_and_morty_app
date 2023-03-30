import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
} 

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case DELETE_FAVORITE:
              //   ...state,
              const removeFav =  state.myFavorites.filter((char) => char.id !== action.payload)
            return { 
                ...state,
                myFavorites: removeFav,

            }
        case FILTER:
             const allCharsFiltered= state.allCharacters.filter(char => char.gender === action.payload);
             return{
                ...state,
                myFavorites: allCharsFiltered
             }     
        case ORDER:
           return {...state, myFavorites: 
                action.payload === "Ascendente"
                ? state.allCharacters.sort((a, b)=> a.id <  b.id)
                : state.allCharacters.sort((a, b)=> a.id   > b.id)
            }
      }
}

export default reducer;