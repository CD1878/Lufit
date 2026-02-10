import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
        // Simple check
        return;
    }
    
    // Simulate API call
    setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  if (status === 'success') {
      return (
          <div className="bg-green-50 text-green-800 p-8 rounded-lg text-center border border-green-200">
              <h3 className="text-2xl font-bold mb-2">Bedankt!</h3>
              <p>We hebben je bericht ontvangen en nemen zo snel mogelijk contact op.</p>
              <button onClick={() => setStatus('idle')} className="mt-4 text-sm underline text-green-700">Nieuw bericht sturen</button>
          </div>
      )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gold">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-anthracite mb-2" htmlFor="name">Naam *</label>
          <input 
            type="text" id="name" name="name" required
            value={formData.name} onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
            placeholder="Uw naam"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
            <div>
            <label className="block text-sm font-bold text-anthracite mb-2" htmlFor="email">E-mail *</label>
            <input 
                type="email" id="email" name="email" required
                value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                placeholder="naam@school.nl"
            />
            </div>
            <div>
            <label className="block text-sm font-bold text-anthracite mb-2" htmlFor="phone">Telefoonnummer</label>
            <input 
                type="tel" id="phone" name="phone"
                value={formData.phone} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                placeholder="06 12345678"
            />
            </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-anthracite mb-2" htmlFor="message">Bericht *</label>
          <textarea 
            id="message" name="message" rows={4} required
            value={formData.message} onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
            placeholder="Waar kunnen we u mee helpen?"
          />
        </div>

        <Button type="submit" fullWidth>Verstuur Bericht</Button>
      </div>
    </form>
  );
};

export default ContactForm;