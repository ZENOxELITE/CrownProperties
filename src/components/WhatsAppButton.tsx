import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phone: string;
  message?: string;
  label?: string;
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function WhatsAppButton({
  phone,
  message,
  label = 'WhatsApp',
  variant = 'solid',
  size = 'md',
  className = '',
}: WhatsAppButtonProps) {
  const base = 'inline-flex items-center gap-2 font-mono font-medium transition-colors duration-200 border';

  const sizes: Record<string, string> = {
    sm: 'text-xs px-3 py-2',
    md: 'text-sm px-4 py-2.5',
    lg: 'text-base px-5 py-3',
  };

  const variants: Record<string, string> = {
    solid:
      'bg-ink text-paper border-ink hover:bg-copper hover:border-copper',
    outline:
      'bg-transparent text-ink border-border-dark hover:border-ink hover:bg-ink hover:text-paper',
  };

  const href = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={size === 'sm' ? 14 : 16} strokeWidth={1.8} />
      {label}
    </a>
  );
}
