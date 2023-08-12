import { AcUnit } from "@mui/icons-material";
import { Box, Sheet, Textarea, Typography } from "@mui/joy";
import { useEffect, useState } from "react";

import { Tool } from "./Tool";

const resultsRowSx = {
  display: "flex",
  flexDirection: "row",
  mt: 1,
};

const resultsSheetSx = {
  mr: 1,
  p: 1,
  maxWidth: "400px",
  width: "400px",
};

const contentTypographySx = {
  fontFamily: "monospace",
  maxWidth: "380px",
  overflowWrap: "anywhere",
};

const BaseEncodingToolComponent = () => {
  const [text, setText] = useState("");
  const [toBase64, setToBase64] = useState("");
  const [fromBase64, setFromBase64] = useState("");

  useEffect(() => {
    setToBase64(window.btoa(text));
    try {
      setFromBase64(window.atob(text));
    } catch (err) {
      setFromBase64("Invalid");
    }
  }, [text]);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography>Your Text:</Typography>
      <Textarea
        maxRows={4}
        minRows={4}
        onChange={(e) => setText(e.target.value)}
        sx={{ width: "400px" }}
        value={text}
      />
      {text.length > 0 && (
        <>
          <Typography level="h3" sx={{ fontFamily: "monospace", mt: 2 }}>
            base64
          </Typography>
          <Box sx={resultsRowSx}>
            <Sheet sx={resultsSheetSx}>
              <Typography level="body-md">Encoded To</Typography>
              <Typography sx={contentTypographySx}>{toBase64}</Typography>
            </Sheet>
            <Sheet sx={resultsSheetSx}>
              <Typography level="body-md">Decoded From</Typography>
              <Typography sx={contentTypographySx}>{fromBase64}</Typography>
            </Sheet>
          </Box>
        </>
      )}
    </Box>
  );
};

export const BaseEncodingTool: Tool = {
  category: "Encoding / Decoding",
  component: BaseEncodingToolComponent,
  description: "encode ",
  icon: AcUnit,
  name: "BaseN",
  key: "base-n",
};
