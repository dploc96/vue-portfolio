<script setup>
import emailjs from '@emailjs/browser';
import { useForm, Form, Field, ErrorMessage } from 'vee-validate';
import { defineRule } from 'vee-validate';
import { required, email, max } from '@vee-validate/rules';
import { useToast } from 'vue-toastification';

defineRule('required', required);
defineRule('email', email);
defineRule('max', max);

const SERVICE_ID = 'service_0ox76q6';
const TEMPLATE_ID = 'template_j7cdatm';
const USER_ID = 'user_5Y6wdYpsMa6uQJwIO8yPs';

const { resetForm } = useForm();

const onSubmit = async (data) => {
  const toast = useToast();
  try {
    const templateParams = {
      name: data.name,
      subject: data.subject,
      email: data.email,
      message: data.message,
    };
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

    resetForm();
    toast.success('Send success!');
  } catch (e) {
    console.error(e);
    toast.error('Send failed!');
  }
};
</script>

<template>
  <section id="contact">
    <h2 class="title title--contact">Contact</h2>
    <Form class="contact__form" @submit="onSubmit">
      <label for="name">Name</label>
      <Field
        id="name"
        class="contact-form__input"
        type="text"
        name="name"
        rules="required|max:30"
      />
      <ErrorMessage name="name" class="contact__error" />

      <label for="subject">Subject</label>
      <Field
        id="subject"
        class="contact-form__input"
        type="text"
        name="subject"
        rules="required|max:75"
      />
      <ErrorMessage name="subject" class="contact__error" />

      <label for="email">Email</label>
      <Field
        id="email"
        class="contact-form__input"
        type="email"
        name="email"
        rules="required|email"
      />
      <ErrorMessage name="email" />

      <label for="message">Message</label>
      <Field
        id="message"
        as="textarea"
        class="contact-form__input"
        name="message"
        rules="required"
      />
      <ErrorMessage name="message" class="contact__error" />

      <input class="btn btn--contact" type="submit" value="Send" />
    </Form>
    <!-- <ToastContainer /> -->
  </section>
</template>

<style lang="scss" scoped>
#contact {
  width: 100%;
  margin: 0 auto;
  background-color: var(--clr-dark);

  .contact__form {
    display: flex;
    flex-direction: column;
    max-width: 600px;

    padding: 1rem;
    border-radius: 0.3rem;
    margin: 0 auto;

    background-color: var(--clr-light);

    textarea {
      min-height: 10rem;
    }

    span {
      color: red;
      font-size: 0.8rem;
    }

    .contact-form__input {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 0.6rem;
      border-radius: 0.3rem;
      font-family: var(--ff-secondary);

      &[required] {
        font-size: 1.2rem;
        color: #ff0000 !important;
      }
    }

    .contact__error {
      color: #ff0000 !important;
    }

    .btn--contact {
      align-self: center;
    }
  }

  .title--contact {
    color: var(--clr-light);
    text-align: center;
    margin-bottom: 3.2rem;
  }
}

@media (min-width: 739px) {
  .contact {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
