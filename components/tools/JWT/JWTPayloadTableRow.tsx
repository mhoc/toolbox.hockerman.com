import { JWTPayloadTableDescription } from "./JWTPayloadTableDescription";
import { JWTPayloadTableKey } from "./JWTPayloadTableKey";
import { JWTPayloadTableValue } from "./JWTPayloadTableValue";

export interface JWTPayloadTableRowProps {
  k: string;
  v: string;
}

export const JWTPayloadTableRow = ({ k, v }: JWTPayloadTableRowProps) => {
  return (
    <tr>
      <td>
        <JWTPayloadTableKey>{k}</JWTPayloadTableKey>
      </td>
      <td>
        <JWTPayloadTableValue k={k} v={v} />
      </td>
      <td>
        <JWTPayloadTableDescription k={k} />
      </td>
    </tr>
  );
};
