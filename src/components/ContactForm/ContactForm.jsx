import * as Yup from "yup";
import { nanoid } from "nanoid";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useId } from "react";

import css from "./ContactForm.module.css";

const validation = Yup.object().shape({
  name: Yup.string().min(3).max(50).required(),
  number: Yup.string().min(3).max(50).required(),
});

const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={(values, actions) => {
        addContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          name
          <Field
            id={nameId}
            type="text"
            name="name"
            placeholder="enter your name"
          />
          <ErrorMessage name="name" component="span" />
        </label>

        <label htmlFor={numberId}>
          number
          <Field
            id={numberId}
            type="tel"
            name="number"
            placeholder="enter your number"
          />
          <ErrorMessage name="number" component="span" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
