import { TokenOutlined } from "@mui/icons-material";
import { Box, Sheet, Textarea, Typography } from "@mui/joy";
import jwtdecode from "jwt-decode";
import { useEffect, useState } from "react";

import { JSONView } from "@/components/common/JSONView";
import { Tool } from "./Tool";

const JWTDecoderToolComponent = () => {
  const [userJwt, setUserJwt] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  );
  const [userJwtHeader, setUserJwtHeader] = useState<any>();
  const [userJwtBody, setUserJwtBody] = useState<any>();
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setError("");
      setUserJwtHeader(jwtdecode(userJwt, { header: true }));
      setUserJwtBody(jwtdecode(userJwt));
    } catch (err: any) {
      setError(`Invalidly formatting JWT (${err.message})`);
    }
  }, [userJwt]);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography>Paste your JWT here:</Typography>
      <Textarea
        maxRows={4}
        minRows={4}
        onChange={(e) => setUserJwt(e.target.value)}
        sx={{ width: "400px" }}
        value={userJwt}
      />

      {error && userJwt.length > 0 && (
        <Typography color="danger">{error}</Typography>
      )}
      {!error && userJwt.length > 0 && (
        <>
          <Typography level="h3" sx={{ mt: 1 }}>
            Header
          </Typography>
          <Sheet sx={{ m: 1, p: 2 }}>
            <JSONView obj={userJwtHeader} />
          </Sheet>
          <Typography level="h3" sx={{ mt: 1 }}>
            Body
          </Typography>
          <Sheet sx={{ m: 1, p: 2 }}>
            <JSONView obj={userJwtBody} />
          </Sheet>
        </>
      )}
    </Box>
  );
};

export const JWTDecoderTool: Tool = {
  category: "Encoding / Decoding",
  component: JWTDecoderToolComponent,
  description: "decode the content of a jwt",
  icon: TokenOutlined,
  name: "JWT",
};
