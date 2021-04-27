export const increment = (nr) => {
  return {
    type: 'INCREMENT',
    payload: nr
  };
}
export const decrement = (nr) => {
  return {
    type: 'DECREMENT',
    payload: nr
  };
}
export const login = () =>{
  return {
    type: 'SIGN_IN'
  };
}
export const addToDataList = (data) => {
  return {
    type: 'ADD_DATA',
    payload: data
  };
}