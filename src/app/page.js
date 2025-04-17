"use client";
import Image from "next/image";
import contactImage from "@/app/assets/image/contactImage.jpeg";
import CandidateForm from "./components/CandidateForm";
import { Flex } from "antd";
import CandidateList from "./components/CandidateList";
import { useEffect } from "react";
import i18n from "./config/i18n";

export default function Home() {
  useEffect(() => {
    const lang = navigator.language.split("-")[0];
    i18n.changeLanguage(lang);
  }, []);
  return (
    <div className="md:px-32 md:my-10 m-5 w-full overflow-hidden">
      <h1 className="text-white text-center md:text-start text-5xl md:text-7xl lg:text-[10rem] !font-black lg:!-mb-14 !-mx-5">
        CONTACT
      </h1>

      <Flex className="w-full " justify="space-between" gap={20}>
        <CandidateForm />
        <Image
          className="rounded-tl-[5rem] rounded-br-[5rem] hidden md:block"
          src={contactImage}
          width={500}
          height={500}
          alt="Image"
        />
      </Flex>
      <CandidateList />
    </div>
  );
}
