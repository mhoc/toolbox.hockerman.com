import { Box, Sheet, Typography } from "@mui/joy";

export interface Props {
  kind: string;
  to: string;
  from: string;
}

export const SimpleTextEncodingKind = ({ kind, to, from }: Props) => {
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
          sx={{
            mr: 1,
            p: 1,
            maxWidth: "400px",
            width: "400px",
          }}
        >
          <Typography level="body-md">Encoded To</Typography>
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
          sx={{
            mr: 1,
            p: 1,
            maxWidth: "400px",
            width: "400px",
          }}
        >
          <Typography level="body-md">Decoded From</Typography>
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
