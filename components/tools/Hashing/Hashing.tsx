import { Tag } from "@mui/icons-material";
import { Box, Textarea, Typography } from "@mui/joy";
import jsmd2 from "js-md2";
import jsmd4 from "js-md4";
import { md5 as jsmd5 } from "js-md5";
import * as hashjs from "hash.js";
import { useEffect, useState } from "react";

import { Tool } from "../Tool";
import { HashingResult } from "./HashingResult";

const HashingToolComponent = () => {
  const [text, setText] = useState("");

  const [md2, setMd2] = useState("");
  const [md4, setMd4] = useState("");
  const [md5, setMd5] = useState("");
  const [sha1, setSha1] = useState("");
  const [sha224, setSha224] = useState("");
  const [sha256, setSha256] = useState("");
  const [sha384, setSha384] = useState("");
  const [sha512, setSha512] = useState("");

  useEffect(() => {
    setMd2(jsmd2(text));
    setMd4(jsmd4(text));
    setMd5(jsmd5(text));
    setSha1(hashjs.sha1().update(text).digest("hex"));
    setSha224(hashjs.sha224().update(text).digest("hex"));
    setSha256(hashjs.sha256().update(text).digest("hex"));
    setSha384(hashjs.sha384().update(text).digest("hex"));
    setSha512(hashjs.sha512().update(text).digest("hex"));
  }, [text]);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography>Your Text:</Typography>
      <Textarea
        autoFocus
        maxRows={4}
        minRows={4}
        onChange={(e) => setText(e.target.value)}
        sx={{ width: "400px", mb: 2 }}
        value={text}
      />
      {text && (
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <HashingResult kind="MD2" value={md2} />
          <HashingResult kind="MD4" value={md4} />
          <HashingResult kind="MD5" value={md5} />
          <HashingResult kind="SHA-1" value={sha1} />
          <HashingResult kind="SHA-224" value={sha224} />
          <HashingResult kind="SHA-256" value={sha256} />
          <HashingResult kind="SHA-384" value={sha384} />
          <HashingResult kind="SHA-512" value={sha512} />
        </Box>
      )}
    </Box>
  );
};

export const HashingTool: Tool = {
  category: "Text",
  component: HashingToolComponent,
  description: "hash text",
  icon: Tag,
  name: "Hashing",
  key: "hashing",
};
