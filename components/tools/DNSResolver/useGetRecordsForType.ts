import { useState } from "react";

export const useGetRecordsForType = (
  resolver: string,
  name: string,
  type: string
) => {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState<any>(null);

  const getRecords = async () => {
    setLoading(true);
    setRecords(null);
    fetch(resolver + "?" + new URLSearchParams({ name, type }), {
      headers: {
        accept: "application/dns-json",
      },
    })
      .then((r) => r.json())
      .then((r) => {
        setLoading(false);
        setRecords(r.Answer ?? []);
      })
      .catch((err) => setError(err));
  };

  return [getRecords, records, loading, error] as const;
};
