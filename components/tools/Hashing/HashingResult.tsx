import { CopyButton } from "@/components/common/CopyButton";
import { Box, Sheet, Typography } from "@mui/joy";

export interface Props {
  kind: string;
  value: string;
}

export const HashingResult = ({ kind, value }: Props) => {
  return (
    <Sheet
      onClick={(e) => {
        navigator.clipboard.writeText(value);
      }}
      sx={{
        maxWidth: "500px",
        mb: 2,
        minWidth: "500px",
        mr: 2,
        p: 1,
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          mb: 1,
        }}
      >
        <Typography level="h3">{kind}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <CopyButton text={value} />
      </Box>
      <Typography sx={{ overflowWrap: "anywhere" }}>{value}</Typography>
    </Sheet>
  );
};
