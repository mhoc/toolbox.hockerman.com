import { Contrast } from "@mui/icons-material";
import { Textarea, Box, Typography } from "@mui/joy";
import { useEffect, useState } from "react";

import { Tool } from "../Tool";
import { calculateContrast } from "./ColorContrastUtil";
import { HexColorTextField } from "@/components/common/HexColorTextField";

const ColorContrastToolComponent = () => {
  const [foreground, setForeground] = useState("");
  const [background, setBackground] = useState("");
  const [contrast, setContrast] = useState<number | undefined>(undefined);
  useEffect(() => {
    if (foreground.length === 7 && background.length === 7) {
      try {
        const _contrast = calculateContrast(foreground, background);
        if (typeof _contrast === "number" && !isNaN(_contrast)) {
          setContrast(_contrast);
        } else {
          setContrast(undefined);
        }
      } catch (err) {
        console.error(err);
        setContrast(undefined);
      }
    } else {
      setContrast(undefined);
    }
  }, [foreground, background]);
  return (
    <div style={{ width: "100%" }}>
      <Box sx={{ mb: 1 }}>
        <HexColorTextField
          onChange={setBackground}
          placeholder="Background"
          value={background}
        />
      </Box>
      <Box sx={{ mb: 1 }}>
        <HexColorTextField
          onChange={setForeground}
          placeholder="Foreground"
          value={foreground}
        />
      </Box>
      {typeof contrast !== "undefined" && (
        <Box mb={1}>
          <Typography>
            Contrast Ratio: <b>{contrast.toFixed(2)}</b>
          </Typography>
        </Box>
      )}
      {typeof contrast !== "undefined" && (
        <Box mb={1}>
          <Typography>
            WCAG 2.0 AA:{" "}
            <b style={{ color: contrast >= 4.5 ? "#86efac" : "#f87171" }}>
              {contrast >= 4.5 ? "Passes" : "Fails"}
            </b>
          </Typography>
        </Box>
      )}
      {typeof contrast !== "undefined" && (
        <Box
          sx={{
            backgroundColor: background,
            borderRadius: "4px",
            minHeight: "300px",
            minWidth: "500px",
            p: 2,
          }}
        >
          <Typography
            sx={{ color: foreground, fontWeight: "bold", fontSize: "32px" }}
          >
            Header Text
          </Typography>
          <Typography
            sx={{ color: foreground, fontWeight: "bold", fontSize: "24px" }}
          >
            Subheader Text
          </Typography>
          <Typography sx={{ color: foreground, fontWeight: "bold" }}>
            Bold Text
          </Typography>
          <Typography sx={{ color: foreground, fontStyle: "italic" }}>
            Italic Text
          </Typography>
          <Typography sx={{ color: foreground }}>Body Text</Typography>
        </Box>
      )}
    </div>
  );
};

export const ColorContrastTool: Tool = {
  category: "UI",
  component: ColorContrastToolComponent,
  description: "calculate the contrast between two colors",
  icon: Contrast,
  name: "Color Contrast",
  key: "color-contrast",
};
