import { useEffect, useState } from "react";

import { BasePage } from "@/components/layouts/BasePage";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  let routedTool = router.query.tool;
  if (typeof routedTool !== "string") {
    routedTool = "";
  }
  return (
    <BasePage
      selectedToolKey={routedTool}
      setSelectedToolKey={(key) => router.push(`/${key}`)}
    />
  );
}
