"use client";

import { Col, Divider, Row } from "antd";
import CandidateCard from "../components/CandidateCard";
import { useTranslation } from "react-i18next";
import i18n from "../config/i18n";
import { useEffect } from "react";

export default function Home() {
  const { t } = useTranslation();
  useEffect(() => {
    const lang = navigator.language.split("-")[0];
    i18n.changeLanguage(lang);
  }, []);
  return (
    <div className="w-full h-full pt-20 px-12 overflow-x-hidden">
      <h1 className="text-black text-5xl !font-black">{t("listInterest")}</h1>
      <Divider style={{ borderColor: "#333" }} />

      <div>
        <Row gutter={[{ xs: 16, sm: 24, md: 32, lg: 40 }, 32]}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a href="./candidat/1" className="block w-full">
              <CandidateCard
                nom="Doe"
                prenom="John"
                email="john.doe@mail.com"
              />
            </a>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <a href="./candidat/2">
              <CandidateCard
                nom="Doe"
                prenom="John"
                email="john.doe@mail.com"
              />
            </a>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a href="./candidat/3">
              <CandidateCard
                nom="Doe"
                prenom="John"
                email="john.doe@mail.com"
              />
            </a>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a href="./candidat/4">
              <CandidateCard
                nom="Doe"
                prenom="John"
                email="john.doe@mail.com"
              />
            </a>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a href="./candidat/5">
              <CandidateCard
                nom="Doe"
                prenom="John"
                email="john.doe@mail.com"
              />
            </a>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a href="./candidat/6">
              <CandidateCard
                nom="Doe"
                prenom="John"
                email="john.doe@mail.com"
              />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}
