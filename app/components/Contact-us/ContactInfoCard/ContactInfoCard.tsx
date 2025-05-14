import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

interface ContactCardProps {
  icon: string;
  title: string;
  details: string[];
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, details }) => {
  const getIcon = () => {
    switch (icon) {
      case "location":
        return <FiMapPin size={24} />;
      case "phone":
        return <FiPhone size={24} />;
      case "email":
        return <FiMail size={24} />;
      default:
        return <FiMapPin size={24} />;
    }
  };

  return (
    <div className="border border-purple-700 rounded-[10px] p-8 flex flex-col items-center text-center h-full shadow-[0_5px_20px_-5px_rgba(134,36,255,0.3)] transition-all duration-300 hover:shadow-[0_8px_25px_-5px_rgba(134,36,255,0.4)]">
      <div className="bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center text-white mb-6">
        {getIcon()}
      </div>

      <h3 className="text-xl font-bold mb-4">{title}</h3>

      <div className="flex flex-col space-y-2">
        {details.map((detail, index) => (
          <p key={index} className="text-purple-600">
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
