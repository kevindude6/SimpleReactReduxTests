const listReducer = (state = ['One item'], action) => {
  switch(action.type){
    case 'ADD_DATA': return state.concat(action.payload);
    default: return state;
  }
}
export default listReducer;