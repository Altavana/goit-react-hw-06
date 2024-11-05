import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const selectNameFilter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  return (
    <div className={styles.search}>
      <p>Find contacts by name</p>
      <input
        className={styles.inputSearch}
        value={selectNameFilter}
        type="text"
        onChange={(event) => {
          dispatch(changeFilter(event.target.value));
        }}
        placeholder="Name or Surname"
      ></input>
    </div>
  );
}
