import React from "react";
import "./../../sass/component/contact.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const contactschema = yup
  .object()
  .shape({
    name: yup.string()
      .required("Name is required").min(4, "full name must be 4 charecter long"),
    number: yup.string()
      .required("Phone number is required")
      .matches(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        "Invalid phone number format",
    )
      .max(10, "Phone number must be 10 digits"),
      email: yup.string().required("Email is required").email("Invalid email address"),
  })
const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(contactschema),
  });
  const onSubmit = data => console.log(data);

  return (
    <section className="contact-section" id="contact">
      <h2 className="text-center">Contact Me</h2>
      <p className="intro text-center">
        Have a question or want to work together? Feel free to reach out!
      </p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        
        <input className="mb-2" type="text" {...register('name')} id='name' name='name'placeholder="Your Name" />
        <span className="text-red-500 text-xs mb-{5px} p-2">{errors?.name?.message}</span>
        <input type="text" {...register('number')} placeholder="Your Phonenumber" />
        <span className='text-red-500 text-xs mb-{5px} p-2'>{errors?.number?.message}</span>
        <input type="email"  {...register('email')} aceholder="Your Email" />
        <span className='text-red-500 text-xs mb-{5px} p-2'>{errors?.email?.message}</span>
        <textarea placeholder="Your Message" rows="6"/>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
