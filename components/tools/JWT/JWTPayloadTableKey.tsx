import { Typography } from "@mui/joy";

export interface JWTPayloadTableKey {
  children: string;
}

export const JWTPayloadTableKey = (props: JWTPayloadTableKey) => {
  switch (props.children) {
    case "alg":
      return (
        <Typography>
          Signing Algorithm (
          <Typography sx={{ fontFamily: "monospace" }}>alg</Typography>)
        </Typography>
      );
    case "iat":
      return (
        <Typography>
          Issued At (
          <Typography sx={{ fontFamily: "monospace" }}>iat</Typography>)
        </Typography>
      );
    case "sub":
      return (
        <Typography>
          Subject (<Typography sx={{ fontFamily: "monospace" }}>sub</Typography>
          )
        </Typography>
      );
    case "typ":
      return (
        <Typography>
          Type (<Typography sx={{ fontFamily: "monospace" }}>typ</Typography>)
        </Typography>
      );
    default:
      return (
        <Typography sx={{ fontFamily: "monospace" }}>
          {props.children}
        </Typography>
      );
  }
};
