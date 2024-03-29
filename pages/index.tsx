import { useRouter } from "next/router";

import { BasePage } from "@/components/layouts/BasePage";

export default function Home() {
  const router = useRouter();
  return (
    <BasePage
      renderOnlyTool={false}
      selectedToolKey={""}
      setSelectedToolKey={(key) => router.push(`/${key}`)}
    />
  );
}
