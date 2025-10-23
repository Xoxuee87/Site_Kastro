import React, { useState } from 'react';
import Section from './Section';
import { PhoneIcon, EnvelopeIcon, SpinnerIcon } from './icons'; // Added SpinnerIcon

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    setIsSubmitted(false); // Reset submission status

    // Simulate API call
    console.log('Form data submitted:', formData);
    setTimeout(() => {
      setIsLoading(false); // Stop loading
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000); // Reset message after 5 seconds
    }, 2000); // Simulate 2 seconds delay
  };

  return (
    <Section id="contato" className="bg-yellow-400" title="CONTATO" titleClassName="text-black" animate={true}>
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-black text-lg mb-6">
          Entre em contato conosco para mais informações e orçamentos.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 text-black">
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-6 w-6 text-black"/>
            <span>(XX) YYYYY-ZZZZ</span>
          </div>
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="h-6 w-6 text-black"/>
            <span>contato@kastrobarea.com.br</span>
          </div>
        </div>

        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-600 text-white rounded-lg text-center transition-all duration-300 ease-in-out">
            Mensagem enviada com sucesso! Entraremos em contato em breve.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-neutral-900 p-8 md:p-12 rounded-xl shadow-2xl">
          <div>
            <label htmlFor="name" className="sr-only">Seu Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu Nome"
              required
              disabled={isLoading}
              className="w-full p-4 bg-neutral-800 text-gray-200 rounded-lg border border-neutral-700 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors disabled:opacity-70"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Seu Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu Email"
              required
              disabled={isLoading}
              className="w-full p-4 bg-neutral-800 text-gray-200 rounded-lg border border-neutral-700 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors disabled:opacity-70"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Sua Mensagem</label>
            <textarea
              name="message"
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Sua Mensagem"
              required
              disabled={isLoading}
              className="w-full p-4 bg-neutral-800 text-gray-200 rounded-lg border border-neutral-700 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors disabled:opacity-70"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-yellow-400 text-black font-semibold py-4 px-10 rounded-lg text-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg w-full sm:w-auto flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <SpinnerIcon className="h-5 w-5 mr-3 animate-spin" />
                  Enviando...
                </>
              ) : (
                'ENVIAR MENSAGEM'
              )}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default ContactForm;