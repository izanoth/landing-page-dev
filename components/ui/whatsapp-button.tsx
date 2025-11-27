import React from 'react';
import { MessageSquareText } from 'lucide-react'; // Using MessageSquareText as a generic chat icon

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hello Ivan, I'm interested in your services.",
}) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquareText size={28} />
    </a>
  );
};

export default WhatsAppButton;
