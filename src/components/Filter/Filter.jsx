
// !!!!!!!!!!!!!! підписуємося на фільтр в сторі
import {useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/slices/filterSlice"; 

import css from "../Filter/Filter.module.css";


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter);
  
const onInput = (evt) => {
    const filterValue = evt.currentTarget.value.trim();
    // console.log(filterValue);
    dispatch(setFilter(filterValue));
};
  
  return <div className={css.box}>
      <form name="search" className={css.form}>
        <label className={css.label}>
          Find contacts by name
          <input type="search"
            className={css.input}
            name="txt"
            onChange={onInput}
            value={filter}
          >
          </input>
        </label>
      </form>
    </div>
}

export default Filter;
