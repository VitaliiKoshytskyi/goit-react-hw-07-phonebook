import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onInputChange = event => {
    const action = setFilter(event.target.value);
    dispatch(action);
  };

  return (
    <input
      className={css.input}
      type="text"
      name={filter}
      onChange={onInputChange}
    />
  );
};

export default Filter;
