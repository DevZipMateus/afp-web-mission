import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5565999098353"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
