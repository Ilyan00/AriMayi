"use client";

import { Col, Divider, Row } from "antd";
import CandidateCard from "../components/CandidateCard";

export default function Home() {
  return (
    <div className="w-full h-full pt-20 px-12 overflow-x-hidden">
      <h1 className="text-black text-5xl !font-black">
        Liste des candidats intéréssé par l'offre
      </h1>
      <Divider style={{ borderColor: "#333" }} />

      <div>
        <Row gutter={[{ xs: 16, sm: 24, md: 32, lg: 40 }, 32]}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a href="#" className="block w-full">
              <CandidateCard
                nom="Doe"
                prenom="John"
                email="john.doe@example.com"
              />
            </a>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <a href="#">
              <CandidateCard
                nom="Doe"
                prenom="John"
                email="john.doe@example.com"
              />
            </a>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a href="#">
              <CandidateCard
                nom="Doe"
                prenom="John"
                email="john.doe@example.com"
              />
            </a>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a href="#">
              <CandidateCard
                nom="Doe"
                prenom="John"
                email="john.doe@example.com"
              />
            </a>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a href="#">
              <CandidateCard
                nom="Doe"
                prenom="John"
                email="john.doe@example.com"
              />
            </a>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a href="#">
              <CandidateCard
                nom="Doe"
                prenom="John"
                email="john.doe@example.com"
              />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}
