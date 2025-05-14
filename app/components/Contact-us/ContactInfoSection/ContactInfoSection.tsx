import React from "react";
import ContactCard from "../ContactInfoCard/ContactInfoCard";

interface ContactInfoSection {
  cards: {
    id: string;
    icon: string;
    title: string;
    details: string[];
  }[];
}

const ContactInfoSection: React.FC<ContactInfoSection> = ({ cards }) => {
  return (
    <section className="bg-white-bg py-12 md:py-16 px-4 border-t border-b border-dashed border-purple-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <ContactCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              details={card.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
