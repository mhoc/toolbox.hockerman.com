import { Box, Textarea } from "@mui/joy";

interface Props {
  onChange: (v: string) => void;
  placeholder: string;
  value: string;
}

export const HexColorTextField = ({ onChange, placeholder, value }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Textarea
        maxRows={1}
        minRows={1}
        onChange={(e) => {
          let v = e.target.value;
          if (v.length >= 1 && !v.startsWith("#")) {
            v = `#${v}`;
          }
          onChange(v.toUpperCase());
        }}
        placeholder={placeholder}
        sx={{ fontFamily: "monospace", width: "200px" }}
        value={value}
      />
      {value.length === 7 && (
        <Box
          sx={{
            backgroundColor: value,
            border: "1px solid white",
            borderRadius: "4px",
            minHeight: "20px",
            minWidth: "80px",
            ml: 1,
          }}
        />
      )}
    </Box>
  );
};
