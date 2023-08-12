import { AcUnit } from "@mui/icons-material";
import { Box, Textarea, Typography } from "@mui/joy";
import { useEffect, useState } from "react";

import { Tool } from "../Tool";
import { SimpleTextEncodingKind } from "./SimpleTextEncodingKind";

const SimpleTextEncodingToolComponent = () => {
  const [text, setText] = useState("");
  const [toUrl, setToUrl] = useState("");
  const [fromUrl, setFromUrl] = useState("");
  const [toBase64, setToBase64] = useState("");
  const [fromBase64, setFromBase64] = useState("");

  useEffect(() => {
    try {
      setToUrl(encodeURIComponent(text));
    } catch (err) {
      setToUrl("Invalid");
    }
    try {
      setFromUrl(decodeURIComponent(text));
    } catch (err) {
      setFromUrl("Invalid");
    }
    try {
      setToBase64(window.btoa(text));
    } catch (err) {
      setToBase64("Invalid");
    }
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
        autoFocus
        maxRows={4}
        minRows={4}
        onChange={(e) => setText(e.target.value)}
        sx={{ width: "400px" }}
        value={text}
      />
      {text.length > 0 && (
        <>
          <SimpleTextEncodingKind kind="uri" to={toUrl} from={fromUrl} />
          <SimpleTextEncodingKind
            kind="base64"
            to={toBase64}
            from={fromBase64}
          />
        </>
      )}
    </Box>
  );
};

export const SimpleTextEncodingTool: Tool = {
  category: "Encoding / Decoding",
  component: SimpleTextEncodingToolComponent,
  description: "encode and decode text from url encoding and base64",
  icon: AcUnit,
  name: "Simple Text Encoding",
  key: "simple-text-encoding",
};
