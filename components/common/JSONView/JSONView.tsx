import { Box, Typography } from "@mui/joy";

export interface JSONViewProps {
  obj: any;
}

export const JSONView = (props: JSONViewProps) => {
  const { obj } = props;
  if (!obj) {
    return <Box>Nothing</Box>;
  }
  const keys = Object.keys(obj);
  return (
    <Box>
      <Typography sx={{ fontFamily: "monospace" }}>{"{"}</Typography>
      {keys.map((k, i) => (
        <Box key={k} sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ fontFamily: "monospace" }}>
            &nbsp;&nbsp;&nbsp;{'"'}
          </Typography>
          <Typography sx={{ fontFamily: "monospace" }}>{`${k}`}</Typography>
          <Typography sx={{ fontFamily: "monospace" }}>{'":'}&nbsp;</Typography>
          {typeof obj[k] === "string" && (
            <>
              <Typography sx={{ fontFamily: "monospace" }}>{'"'}</Typography>
              <Typography sx={{ fontFamily: "monospace" }}>{obj[k]}</Typography>
              {i !== keys.length - 1 && (
                <Typography sx={{ fontFamily: "monospace" }}>{'",'}</Typography>
              )}
            </>
          )}
          {typeof obj[k] === "number" && (
            <>
              <Typography sx={{ fontFamily: "monospace" }}>{obj[k]}</Typography>
              {i !== keys.length - 1 && (
                <Typography sx={{ fontFamily: "monospace" }}>{","}</Typography>
              )}
            </>
          )}
        </Box>
      ))}
      <Typography sx={{ fontFamily: "monospace" }}>{"}"}</Typography>
    </Box>
  );
};
