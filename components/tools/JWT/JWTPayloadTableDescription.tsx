import { Typography } from "@mui/joy";

export interface JWTPayloadTableDescriptionProps {
  k: string;
}

export const JWTPayloadTableDescription = (
  props: JWTPayloadTableDescriptionProps
) => {
  switch (props.k) {
    case "alg":
      return (
        <Typography>
          Message authentication code algorithm. The issuer can freely set an
          algorithm to verify the signature on the token. However, some
          supported algorithms are insecure.
        </Typography>
      );
    case "iat":
      return (
        <Typography>
          Identifies the time at which the JWT was issued. The value must be a
          NumericDate.
        </Typography>
      );
    case "sub":
      return <Typography>Identifies the subject of the JWT.</Typography>;
    case "typ":
      return (
        <Typography>
          Token type. If present, it must be set to a registered IANA Media
          Type.
        </Typography>
      );
    default:
      return <Typography color="primary">-</Typography>;
  }
};
