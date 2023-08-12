import { Box, Sheet, Typography } from "@mui/joy";

import { DNSResolverRecord } from "./DNSResolverRecord";

interface Props {
  records: any[];
  type: "A" | "AAAA" | "MX" | "TXT";
}

export const DNSResolverRecordList = ({ records, type }: Props) => {
  if (!Array.isArray(records)) {
    return <div />;
  }

  return (
    <>
      {records.length === 0 && (
        <Box sx={{ display: "flex", mr: 2, mb: 2 }}>
          <Sheet sx={{ p: 2 }} variant="outlined">
            <Typography>No {type} Records Found</Typography>
          </Sheet>
        </Box>
      )}
      {records.length > 0 && (
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {records.map((record: any, i: any) => {
            return (
              <Box key={`a-${record.data}-${i}`} sx={{ mr: 2, mb: 2 }}>
                <DNSResolverRecord record={record} />
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};
