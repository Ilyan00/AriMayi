"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCandidates } from "../candidates/candidateSlice";
import React from "react";
import { Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import { SendOutlined } from "@ant-design/icons";

export default function CandidateForm() {
  const { t } = useTranslation();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const newCandidate = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      message: values.message,
    };
    dispatch(setCandidates([newCandidate]));
    console.log(newCandidate);

    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      className="!w-96  "
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={t("firstname")}
        name="firstname"
        rules={[{ required: true, message: "Please input your firstname!" }]}
      >
        <Input
          variant="underlined"
          style={{
            backgroundColor: "transparent",
            color: "#000",
            borderBottom: "1px solid black",
          }}
        />
      </Form.Item>

      <Form.Item
        label={t("lastname")}
        name="lastname"
        rules={[{ required: true, message: "Please input your lastname!" }]}
      >
        <Input
          variant="underlined"
          style={{
            backgroundColor: "transparent",
            color: "#000",
            borderBottom: "1px solid black",
          }}
        />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input
          variant="underlined"
          style={{
            backgroundColor: "transparent",
            color: "#000",
            borderBottom: "1px solid black",
          }}
        />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        variant="borderless"
        rules={[{ required: true, message: "Please input your message!" }]}
      >
        <Input.TextArea
          variant="underlined"
          style={{
            backgroundColor: "transparent",
            color: "#000",
            borderBottom: "1px solid black",
          }}
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
  );
}
