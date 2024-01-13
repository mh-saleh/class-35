import React from "react";
import Container from "../../Container";
import SubHeading from "../../SubHeading";

const MyAccount = () => {
  return (
    <section>
      <Container>
        <div className="my-32">
          <SubHeading text={`Contacts`} />
        </div>
        <div className="flex justify-start gap-16">
          <div className="max-w-[234px] flex flex-col gap-10 w-full">
            <p className="pb-5 text-base font-bold text-black border-b cursor-pointer font-dm">
              Dashboard
            </p>
            <p className="text-base font-bold border-b cursor-pointer text-setGray font-dm">
              Others
            </p>
            <p className="pb-5 text-base font-bold border-b cursor-pointer text-setGray font-dm">
              Donwloads
            </p>
            <p className="pb-5 text-base font-bold border-b cursor-pointer text-setGray font-dm">
              Addresses
            </p>
            <p className="pb-5 text-base font-bold border-b cursor-pointer text-setGray font-dm">
              Account details
            </p>
            <p className="pb-5 text-base font-bold border-b cursor-pointer text-setGray font-dm">
              Logout
            </p>
          </div>
          <div className="max-w-[900px]">
            <p className="mb-16 text-base font-bold text-setGray">
              Hello admin (not admin? Log out)
            </p>
            <p className="text-base font-bold text-setGray ">
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.{" "}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyAccount;
