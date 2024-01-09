import React from "react";
import Container from "..//../Container";
import SubHeadingTwo from "../../SubHeadingTwo";
import SubHeading from "../../SubHeading";
import InputBox from "../../InputBox";
import Button from "../../Button";
const ContactPage = () => {
  return (
    <section className="px-[1vw]">
      <Container>
        <div className="my-32">
          <SubHeading text={`Contacts`} />
        </div>
        <div>
          <SubHeadingTwo text={`Fill up a Form`} className={`mb-10`} />

          <InputBox
            MaxWidth={`780`}
            LabelText={`Name`}
            InputText={`Your name here`}
            className={`mb-5`}
            ForID={`name`}
          />
          <InputBox
            MaxWidth={`780`}
            LabelText={`Email`}
            InputText={`Your email here`}
            className={`mb-5`}
            ForID={`emal`}
          />
        </div>

        <div className={`border-b-2 border-[#F0F0F0] max-w-[780px]`}>
          <label
            htmlFor="message"
            className="text-base font-bold text-secBlack font-dm "
          >
            Message
          </label>
          <textarea
            id="message"
            className={`pt-2 block pb-3 text-sm font-normal text-setGray font-dm   focus:outline-none caret-secBlack resize-none overflow-hidden scrollbar w-full max-h-24`}
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="mt-12">
          <Button text={`Post`} />
        </div>

        <div className="my-32">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116811.98359043914!2d90.30871208318726!3d23.805278891314547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1704511631746!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-[572px]"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default ContactPage;
