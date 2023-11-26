import { Textarea } from "@mui/joy";
import { SxProps } from "@mui/material";

interface Props {
  onChange: (i: number) => void;
  sx?: SxProps;
  value: number;
}

export const NumericTextField = ({ onChange, sx, value }: Props) => {
  return (
    <Textarea
      maxRows={1}
      minRows={1}
      onChange={(e) => {
        if (e.target.value === "") {
          onChange(0);
        }
        try {
          const r = parseInt(e.target.value, 10);
          if (!isNaN(r)) {
            onChange(r);
          }
        } catch (err) {}
      }}
      placeholder="0"
      sx={sx}
      value={value}
      variant="solid"
    />
  );
};
