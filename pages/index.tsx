import { useRouter } from "next/router";
import { useState } from "react";

import { BasePage } from "@/components/layouts/BasePage";

export default function Home() {
  const router = useRouter();
  return (
    <BasePage
      selectedToolKey={""}
      setSelectedToolKey={(key) => router.push(`/${key}`)}
    />
  );
}
