import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./../../sass/component/contact.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const contactschema = yup.object().shape({
  name: yup.string()
    .required("Name is required")
    .min(4, "Full name must be at least 4 characters"),
  number: yup.string()
    .required("Phone number is required")
    .matches(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Invalid phone number format"
    )
    .max(10, "Phone number must be 10 digits"),
  email: yup.string()
    .required("Email is required")
    .email("Invalid email address"),
});

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactschema),
  });

  const onSubmit = () => {
    emailjs
      .sendForm('service_fmx678f', 'template_cg2q7a1', form.current, {
        publicKey: 'wv7xddq3v7cZYta1T',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          reset(); // Clear form on success
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="text-center">Contact Me</h2>
      
      <p className="intro text-center">
        Have a question or want to work together? Feel free to reach out!
      </p>
     

      <form ref={form} onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <input
          className="mb-2"
          type="text"
          {...register('name')}
          placeholder="Your Name"
        />
        <span className="text-red-500 text-xs p-2">{errors?.name?.message}</span>

        <input
          type="text"
          {...register('number')}
          placeholder="Your Phone Number"
        />
        <span className='text-red-500 text-xs p-2'>{errors?.number?.message}</span>

        <input
          type="email"
          {...register('email')}
          placeholder="Your Email"
        />
        <span className='text-red-500 text-xs p-2'>{errors?.email?.message}</span>

        <textarea
          placeholder="Your Message"
          name="message"
          rows="6"
        />

        <button type="submit">Send Message</button>
      </form>
      <div className="media flex justify-center gap-5 p-1 last-media">
       <a href="https://web.facebook.com/profile.php?id=61571495885324">   <i className="bi bi-facebook"></i></a>
        <a href="https://www.linkedin.com/in/dipesh-rai-1a50692a6/"><i className="bi bi-linkedin"></i></a>
         <a href="https://github.com/Dipesh-rai"> <i className="bi bi-github"></i></a>
        </div>
    </section>
  );
};

export default Contact;
