
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import styles from './Filter.module.css'; 

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filterContainer}>
      <label className={styles.filterLabel}>
        Filter contacts
        <input
          className={styles.filterInput}
          type="text"
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};

export default Filter;
