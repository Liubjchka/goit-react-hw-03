const SearchBox = ({ filter, getFilter }) => {
  const handleChange = (event) => {
    getFilter(event.target.value);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleChange} value={filter} />
    </div>
  );
};

export default SearchBox;
