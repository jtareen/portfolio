import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';

const MailDialog = ({ isOpen, onClose }) => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: null, text: "" });
  const form = useRef();

  // Reset the status when the dialog opens or closes
  useEffect(() => {
    if (!isOpen) {
      setStatus({ type: null, text: "" });
    }
  }, [isOpen]);

  // If the dialog is not open, don't render anything
  if (!isOpen) return null;

  const handleSend = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: null, text: "" }); // Clear previous status

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
          setStatus({ type: 'success', text: 'Message sent successfully!' });
          e.target.reset(); // Clear the form
          
          // Wait for 2.5 seconds so the user can read the success message, then close
          setTimeout(() => {
            onClose();
          }, 2500);
      }, (error) => {
          console.error('Failed to send email:', error.text);
          setStatus({ type: 'error', text: 'Failed to send the message. Please try again.' });
      })
      .finally(() => {
          setIsSending(false);
      });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 font-mono"
      onClick={onClose}
    >
      <div
        className="bg-[#282C33] p-6 max-w-lg w-full relative border border-gray"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Status Indicator Box */}
        {status.text && (
          <div 
            className={`mb-4 p-3 border ${
              status.type === 'success' 
                ? 'border-primary text-primary' 
                : 'border-red-400 text-red-400'
            }`}
          >
            {status.text}
          </div>
        )}

        <form ref={form} onSubmit={handleSend} className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full sm:w-1/2 bg-transparent border border-gray p-2 text-white placeholder-gray outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full sm:w-1/2 bg-transparent border border-gray p-2 text-white placeholder-gray outline-none focus:border-primary transition-colors"
            />
          </div>

          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            className="w-full bg-transparent border border-gray p-2 text-white placeholder-gray outline-none focus:border-primary transition-colors"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full bg-transparent border border-gray p-2 text-white placeholder-gray h-32 resize-none outline-none focus:border-primary transition-colors"
          ></textarea>

          <button
            type="submit"
            disabled={isSending || status.type === 'success'}
            className={`mt-2 border border-primary text-white px-6 py-2 w-max transition duration-200 cursor-pointer ${
              isSending || status.type === 'success' 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#C778DD44]'
            }`}
          >
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MailDialog;