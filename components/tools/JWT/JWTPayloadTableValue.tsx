import { Chip, Tooltip, Typography } from "@mui/joy";
import { formatRelative } from "date-fns";

export interface JWTPayloadTableValueProps {
  k: string;
  v?: string;
}

export const JWTPayloadTableValue = ({ k, v }: JWTPayloadTableValueProps) => {
  switch (k) {
    case "alg":
      if (!v) {
        return (
          <Tooltip title="This JWT does not specify a signing algorithm. This usually means the JWT is not signed; which is very dangerous!">
            <Chip color="warning">No Signature!</Chip>
          </Tooltip>
        );
      }
      switch (v) {
        case "HS256":
          return (
            <Tooltip title="HMAC + SHA256">
              <Chip color="success">{v}</Chip>
            </Tooltip>
          );
        case "RS256":
          return (
            <Tooltip title="RSA + SHA256">
              <Chip color="success">{v}</Chip>
            </Tooltip>
          );
        default:
          return <Chip>{v}</Chip>;
      }
    case "iat":
      return (
        <Tooltip title={v}>
          <Typography>
            {formatRelative(new Date(v as any), new Date())}
          </Typography>
        </Tooltip>
      );
    default:
      return <Typography>{v}</Typography>;
  }
};
