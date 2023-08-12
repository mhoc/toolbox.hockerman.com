import { Box, Divider, Sheet, Typography } from "@mui/joy";

interface Props {
  record: any;
}

export const DNSResolverRecord = ({ record }: Props) => {
  console.log(record);

  let recordType;
  switch (record.type) {
    case 1:
      recordType = "A";
      break;
    case 15:
      recordType = "MX";
      break;
    case 16:
      recordType = "TXT";
      break;
    case 28:
      recordType = "AAAA";
      break;
  }
  return (
    <Sheet
      onClick={() => {
        navigator.clipboard.writeText(record.data);
      }}
      variant="outlined"
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            alignItems: "center",
            backgroundColor: "primary.100",
            p: 2,
          }}
        >
          <Typography sx={{ color: "primary.900", fontWeight: "bold" }}>
            {recordType}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", ml: 1, p: 2 }}>
          <Typography sx={{ fontFamily: "monospace" }}>
            {record.data}
          </Typography>
        </Box>
      </Box>
    </Sheet>
  );
};
