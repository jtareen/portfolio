import { useState } from "react";
import mailIcon from "../assets/icons/mail.svg";
import MailDialog from "./MailDialog";

const ContactsSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section id="contacts" className="py-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl text-white font-medium whitespace-nowrap font-mono">
            <span className="text-primary">#</span>contacts
          </h2>
          <div className="h-px bg-primary w-24 md:w-32 lg:w-42"></div>
          <div className="flex-1 h-px"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 font-mono w-full">
          {/* Left Column: Text */}
          <div className="md:w-1/2 text-gray text-base leading-relaxed">
            <p>
              I'm open to freelance opportunities, full-time roles, and
              collaborations. If you have a project, position, or question, feel
              free to reach out.
            </p>
          </div>

          {/* Right Column: Contact Box */}
          <div className="border border-gray p-4 md:p-6 w-full md:w-auto lg:ml-auto">
            <h3 className="text-white font-semibold mb-4 text-lg">
              Message me here
            </h3>

            <div className="flex flex-col gap-3 text-gray">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="hover:text-white cursor-pointer">
                  +92 332 4474400
                </span>
              </div>

              {/* Email */}
              <button
                onClick={() => setIsDialogOpen(true)}
                className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <img src={mailIcon} alt="Email icon" className="w-6 h-6" />
                <span>jtareen440@gmail.com</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Dialog / Modal */}
      <MailDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default ContactsSection;
