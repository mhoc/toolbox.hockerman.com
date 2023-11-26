import { Box, Sheet, Typography } from "@mui/joy";

export interface Props {
  kind: string;
  to: string;
  from: string;
}

export const EncodingKind = ({ kind, to, from }: Props) => {
  return (
    <Box>
      <Typography level="h3" sx={{ mt: 2 }}>
        {kind}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: 1,
        }}
      >
        <Sheet
          onClick={() => {
            navigator.clipboard.writeText(to);
          }}
          sx={{
            maxWidth: "400px",
            mr: 1,
            p: 1,
            width: "400px",
          }}
        >
          <Typography level="body-sm" sx={{ mb: 1 }}>
            Encoded To
          </Typography>
          <Typography
            sx={{
              fontFamily: "monospace",
              maxWidth: "380px",
              overflowWrap: "anywhere",
            }}
          >
            {to}
          </Typography>
        </Sheet>
        <Sheet
          onClick={() => {
            navigator.clipboard.writeText(from);
          }}
          sx={{
            mr: 1,
            p: 1,
            maxWidth: "400px",
            width: "400px",
          }}
        >
          <Typography level="body-sm" sx={{ mb: 1 }}>
            Decoded From
          </Typography>
          <Typography
            sx={{
              fontFamily: "monospace",
              maxWidth: "380px",
              overflowWrap: "anywhere",
            }}
          >
            {from}
          </Typography>
        </Sheet>
      </Box>
    </Box>
  );
};
