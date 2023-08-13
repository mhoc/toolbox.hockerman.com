import { AcUnit } from "@mui/icons-material";
import { Box, Textarea, Typography } from "@mui/joy";
import { useEffect, useState } from "react";

import { Tool } from "../Tool";
import { decode_ascii85, encode_ascii85 } from "./ascii85";
import { SimpleTextEncodingKind } from "./SimpleTextEncodingKind";

const SimpleTextEncodingToolComponent = () => {
  const [text, setText] = useState("");
  const [toUrl, setToUrl] = useState("");
  const [fromUrl, setFromUrl] = useState("");
  const [toBase64, setToBase64] = useState("");
  const [fromBase64, setFromBase64] = useState("");
  const [toAscii85, setToAscii85] = useState("");
  const [fromAscii85, setFromAscii85] = useState("");

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
    try {
      setToAscii85(encode_ascii85(text));
    } catch (err) {
      setToAscii85("Invalid");
    }
    try {
      setFromAscii85(decode_ascii85(text));
    } catch (err) {
      setFromAscii85("Invalid");
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
          <SimpleTextEncodingKind
            kind="ascii85"
            to={toAscii85}
            from={fromAscii85}
          />
        </>
      )}
    </Box>
  );
};

export const SimpleTextEncodingTool: Tool = {
  category: "Text",
  component: SimpleTextEncodingToolComponent,
  description: "encode and decode text from url encoding and base64",
  icon: AcUnit,
  name: "Simple Text Encoding",
  key: "simple-text-encoding",
};
