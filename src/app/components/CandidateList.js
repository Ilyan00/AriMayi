"use client";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function CandidateList() {
  const candidates = useSelector((state) => state.candidates.list);
  const { t } = useTranslation();
  return (
    <div>
      <ul>
        {candidates.map((candidate, index) => (
          <li className="text-[#333]" key={index}>
            {t("welcome")}{" "}
            <span className="text-emerald-500"> {candidate.firstname}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
