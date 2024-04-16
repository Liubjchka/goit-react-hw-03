const Contact = ({ id, name, number, deletedContact }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button
        onClick={() => {
          deletedContact(id);
        }}
        type="button"
      >
        delete
      </button>
    </li>
  );
};

export default Contact;
