import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { agency } from '@/data/agency';

interface ContactFormProps {
  defaultMessage?: string;
}

export function ContactForm({ defaultMessage = '' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(agency.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
          email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
          phone: (e.currentTarget.elements.namedItem('phone') as HTMLInputElement).value,
          message: (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value,
        }),
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setStatus('error');
      setErrorMsg(
        'The form could not be submitted. Please use the WhatsApp button or email us directly.',
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-copper p-8 text-center">
        <CheckCircle size={32} className="mx-auto text-copper" strokeWidth={1.4} />
        <h3 className="mt-4 font-display text-xl font-medium">Message sent</h3>
        <p className="mt-2 font-mono text-sm text-ink/60">
          We'll respond within one business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 font-mono text-xs uppercase tracking-widest text-copper hover:text-copper-dark transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const labelClass = 'font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-1.5 block';
  const inputClass =
    'w-full font-mono text-sm px-3 py-2.5 bg-paper border border-border-dark focus:outline-none focus:border-copper';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          defaultValue={defaultMessage}
          className={inputClass}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2 text-stamp border border-stamp p-3">
          <AlertCircle size={18} className="shrink-0 mt-0.5" strokeWidth={1.6} />
          <p className="font-mono text-xs">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center gap-2 bg-ink text-paper font-mono text-sm px-5 py-3 border border-ink hover:bg-copper hover:border-copper transition-colors duration-200 disabled:opacity-50"
      >
        <Send size={16} strokeWidth={1.8} />
        {status === 'submitting' ? 'Sending...' : 'Send message'}
      </button>

      <p className="font-mono text-xs text-ink/40">
        This form is handled by Formspree. No backend required.
      </p>
    </form>
  );
}
