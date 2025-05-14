import React from "react";
import SolutionsMain from "../components/Solutions/SolutionsMain/SolutionsMain";
import { ContactData } from "../data/contactData";
import ContactInfoSection from "../components/Contact-us/ContactInfoSection/ContactInfoSection";
import ContactQuestionSection from "../components/Contact-us/ContactQuestionSection/ContactQuestionSection";

const page = () => {
  const { hero, contactInfo } = ContactData;
  return (
    <>
      <SolutionsMain hero={hero} />
      <ContactInfoSection cards={contactInfo.cards} />
      <ContactQuestionSection />
    </>
  );
};

export default page;
