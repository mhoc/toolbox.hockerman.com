import { DnsOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Input,
  Option,
  Select,
  Sheet,
  Table,
  Typography,
} from "@mui/joy";
import { useState } from "react";

import { Tool } from "../Tool";
import { DNSResolverRecord } from "./DNSResolverRecord";
import { useGetRecordsForType } from "./useGetRecordsForType";

const DNSResolverToolComponent = () => {
  const [domainName, setDomainName] = useState("");
  const [resolver, setResolver] = useState(
    "https://cloudflare-dns.com/dns-query"
  );
  const [builtinResolver, setBuiltinResolver] = useState("Cloudflare");

  const [getARecords, aRecords, aLoading, aError] = useGetRecordsForType(
    resolver,
    domainName,
    "A"
  );
  const [getAAAARecords, aaaaRecords, aaaaLoading, aaaaError] =
    useGetRecordsForType(resolver, domainName, "AAAA");
  const [getMxRecords, mxRecords, mxLoading, mxError] = useGetRecordsForType(
    resolver,
    domainName,
    "MX"
  );
  const [getTxtRecords, txtRecords, txtLoading, txtError] =
    useGetRecordsForType(resolver, domainName, "TXT");

  const getAll = () => {
    getARecords();
    getAAAARecords();
    getMxRecords();
    getTxtRecords();
  };
  const anyLoading = aLoading || aaaaLoading || mxLoading || txtLoading;

  return (
    <Box>
      <Sheet
        sx={{ minWidth: "600px", maxWidth: "600px", mb: 4, px: 2, py: 2 }}
        variant="outlined"
      >
        <Typography sx={{ mb: 1 }}>
          Resolve a DNS name using any DNS over HTTPS resolver
        </Typography>
        <Input
          autoFocus
          onChange={(e) => {
            const v = e.target.value;
            if (v.startsWith("https://") && v.length > 9) {
              setDomainName(v.slice(8));
            } else if (v.startsWith("http://") && v.length > 8) {
              setDomainName(v.slice(7));
            } else {
              setDomainName(v);
            }
          }}
          onKeyDown={(e) => e.key === "Enter" && getAll()}
          placeholder="Domain Name"
          sx={{ mb: 1 }}
          value={domainName}
        ></Input>
        <Input
          endDecorator={
            <>
              <Divider orientation="vertical" />
              <Select
                variant="plain"
                value={builtinResolver}
                onChange={(_, value) => {
                  switch (value) {
                    case "Cloudflare":
                      setBuiltinResolver("Cloudflare");
                      setResolver("https://cloudflare-dns.com/dns-query");
                      break;
                    case "Cloudflare-Mozilla":
                      setBuiltinResolver("Cloudflare-Mozilla");
                      setResolver(
                        "https://mozilla.cloudflare-dns.com/dns-query"
                      );
                      break;
                    case "Google":
                      setBuiltinResolver("Google");
                      setResolver("https://dns.google/resolve");
                      break;
                  }
                }}
                slotProps={{
                  listbox: {
                    variant: "outlined",
                  },
                }}
                sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
              >
                <Option value="Cloudflare">Cloudflare</Option>
                <Option value="Cloudflare-Mozilla">Cloudflare + Mozilla</Option>
                <Option value="Google">Google</Option>
              </Select>
            </>
          }
          onChange={(e) => {
            setResolver(e.target.value);
          }}
          placeholder="DNS Resolver"
          sx={{ mb: 1 }}
          value={resolver}
        ></Input>
        <Button disabled={anyLoading} onClick={() => getAll()}>
          {anyLoading ? "Resolving..." : "Resolve"}
        </Button>
      </Sheet>
      {(aRecords || aaaaRecords || mxRecords || txtRecords) && (
        <Table sx={{ maxWidth: "800px" }}>
          <thead>
            <tr>
              <th>Record</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {(aRecords ?? []).map((record: any) => (
              <DNSResolverRecord
                key={`${record.type}${record.data}`}
                record={record}
              />
            ))}
            {(aaaaRecords ?? []).map((record: any) => (
              <DNSResolverRecord
                key={`${record.type}${record.data}`}
                record={record}
              />
            ))}
            {(mxRecords ?? []).map((record: any) => (
              <DNSResolverRecord
                key={`${record.type}${record.data}`}
                record={record}
              />
            ))}
            {(txtRecords ?? []).map((record: any) => (
              <DNSResolverRecord
                key={`${record.type}${record.data}`}
                record={record}
              />
            ))}
          </tbody>
        </Table>
      )}
    </Box>
  );
};

export const DNSResolverTool: Tool = {
  category: "Networking",
  component: DNSResolverToolComponent,
  description: "resolve a hostname into resource records using dns",
  icon: DnsOutlined,
  name: "DNS Resolver",
  key: "dns-resolver",
};
