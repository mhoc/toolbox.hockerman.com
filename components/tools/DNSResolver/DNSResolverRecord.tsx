interface Props {
  record: any;
}

export const DNSResolverRecord = ({ record }: Props) => {
  let recordType;
  switch (record.type) {
    case 1:
      recordType = "A";
      break;
    case 15:
      recordType = "MX";
      break;
    case 16:
      recordType = "TXT";
      break;
    case 28:
      recordType = "AAAA";
      break;
  }
  return (
    <tr>
      <td>{recordType}</td>
      <td>{record.data}</td>
    </tr>
  );
};
