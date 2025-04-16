"use client";

import { ConfigProvider } from "antd";
import { themeConfig } from "@/app/themeConfig";

export default function StyledWrapper({ children }) {
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
}
