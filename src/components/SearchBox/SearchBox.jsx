import css from "./SearchBox.module.css";

const SearchBox = ({ filter, getFilter }) => {
  const handleChange = (event) => {
    getFilter(event.target.value);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};

export default SearchBox;
