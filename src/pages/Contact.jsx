import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="container mx-auto px-4 py-16 max-w-xl">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      {isSubmitSuccessful ? (
        <div className="bg-green-100 text-green-800 p-4 rounded shadow">
          Thank you for reaching out! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded px-3 py-2"
              {...register('message', { required: 'Please enter a message' })}
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}