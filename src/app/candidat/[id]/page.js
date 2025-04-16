"use client";

import i18n from "@/app/config/i18n";
import { SendOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Flex, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Candidate({ params }) {
  const { t } = useTranslation();

  useEffect(() => {
    const lang = navigator.language.split("-")[0];
    i18n.changeLanguage(lang);
  }, []);

  return (
    <div className="w-full px-4 md:px-12 pt-5">
      <h1 className="text-black text-center text-3xl md:text-5xl font-black mb-8">
        {t("about")} de John Doe
      </h1>

      <Flex className="w-full flex-col lg:flex-row justify-center items-stretch gap-8">
        <Flex
          vertical
          align="center"
          className="bg-white p-6 text-black w-full lg:w-[35rem] rounded-3xl"
        >
          <Avatar
            size={200}
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
            className="bg-gray-100"
          />
          <h2 className="text-2xl mt-4">John Doe</h2>
          <Divider style={{ borderColor: "#333" }} />
          <strong>
            {t("Candidat")} {params.id}
          </strong>
          <p>john.doe@mail.com</p>
          <p className="mt-5 text-justify">
            <strong>Message:</strong> lorem Nec sane haec sola pernicies
            orientem diversis cladibus adfligebat. Namque et Isauri, quibus est
            usitatum saepe pacari saepeque inopinis excursibus cuncta miscere,
            ex latrociniis occultis et raris, alente inpunitate adulescentem in
            peius audaciam ad bella gravia proruperunt, diu quidem perduelles
            spiritus.
          </p>
        </Flex>

        <Flex
          vertical
          align="center"
          className="bg-white p-6 text-black w-full lg:w-[35rem] rounded-3xl"
        >
          <h3 className="text-2xl mb-6 text-center">{t("contact")} John Doe</h3>
          <Form layout="vertical" className="w-full">
            <Form.Item
              label="Message"
              name="message"
              rules={[
                { required: true, message: "Please input your message!" },
              ]}
            >
              <TextArea autoSize={{ minRows: 5, maxRows: 15 }} />
            </Form.Item>

            <Form.Item>
              <Button
                variant="solid"
                htmlType="submit"
                className="px-5 py-2 flex items-center"
              >
                {t("submit")} <SendOutlined />
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </div>
  );
}
