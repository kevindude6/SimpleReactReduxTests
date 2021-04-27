import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToDataList} from './../actions'


const DataForm = (props) =>
{
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    dispatch(addToDataList(value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={onChange} type='text'/>
      
      <button type='submit'>Add data</button>
    </form>
  );
}
export default DataForm;