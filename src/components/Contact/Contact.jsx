const Contact = ({ name, number }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button">delete</button>
    </li>
  );
};

export default Contact;
