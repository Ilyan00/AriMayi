"use client";

import i18n from "@/app/config/i18n";
import { SendOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Flex, Form, Input } from "antd";
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
    <div className="w-full px-12 pt-5 ">
      <h1 className="text-black text-center text-5xl !font-black">
        {t("about")} de John Doe
      </h1>
      <Flex className="w-full flex" justify="center">
        <Flex align="center">
          <div>
            <Flex
              vertical
              align="center"
              className="bg-white p-5 text-black w-[35rem] rounded-3xl"
            >
              <Avatar
                size={250}
                src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                className="bg-gray-100"
              />
              <h2 className="text-2xl mt-2">John Doe</h2>
              <Divider style={{ borderColor: "#333" }} />
              <strong>
                {t("Candidat")} {params.id}
              </strong>
              <p>john.doe@mail.com</p>
              <p className="mt-5">
                <strong>Message:</strong> lorem Nec sane haec sola pernicies
                orientem diversis cladibus adfligebat. Namque et Isauri, quibus
                est usitatum saepe pacari saepeque inopinis excursibus cuncta
                miscere, ex latrociniis occultis et raris, alente inpunitate
                adulescentem in peius audaciam ad bella gravia proruperunt, diu
                quidem perduelles spiritus.
              </p>
            </Flex>
          </div>
          <div className=" w-[35rem] rounded-3xl mx-5">
            <Flex
              className="w-full px-12 pt-5 bg-white rounded-3xl"
              vertical
              align="center"
            >
              <h3 className="text-black text-2xl mb-10 ">
                {t("contact")} John Doe
              </h3>
              <Form className="w-full">
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <TextArea
                    variant="outlined"
                    autoSize={{ minRows: 5, maxRows: 15 }}
                  />
                </Form.Item>

                <Form.Item label={null}>
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
          </div>
        </Flex>
      </Flex>
    </div>
  );
}
