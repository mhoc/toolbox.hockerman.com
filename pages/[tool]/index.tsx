import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

import { BasePage } from "@/components/layouts/BasePage";

export default function Home() {
  const mobile = useMediaQuery("(max-width:700px)");
  const router = useRouter();
  let routedTool = router.query.tool;
  if (typeof routedTool !== "string") {
    routedTool = "";
  }
  return (
    <BasePage
      renderOnlyTool={mobile}
      selectedToolKey={routedTool}
      setSelectedToolKey={(key) => router.push(`/${key}`)}
    />
  );
}
