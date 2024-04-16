import css from "./Contact.module.css";

const Contact = ({ id, name, number, deletedContact }) => {
  return (
    <li className={css.item}>
      <div className={css.text}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        onClick={() => {
          deletedContact(id);
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
