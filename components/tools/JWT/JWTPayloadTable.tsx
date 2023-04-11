import { Table } from "@mui/joy";
import { useEffect, useState } from "react";
import { JWTPayloadTableRow } from "./JWTPayloadTableRow";

export interface JWTPayloadTableProps {
  payloadObject: any;
}

export const JWTPayloadTable = ({ payloadObject }: JWTPayloadTableProps) => {
  const [sorted, setSorted] = useState<string[]>([]);

  useEffect(() => {
    setSorted(Object.keys(payloadObject).sort((a, b) => a.localeCompare(b)));
  }, [payloadObject]);

  return (
    <Table sx={{ maxWidth: "800px" }}>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
          <th style={{ width: "50%" }}>Description</th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((k: string) => (
          <JWTPayloadTableRow k={k} key={k} v={payloadObject[k]} />
        ))}
      </tbody>
    </Table>
  );
};
