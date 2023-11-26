import { CopyAllRounded } from "@mui/icons-material";
import { IconButton } from "@mui/joy";

interface Props {
  text: string;
}

export const CopyButton = ({ text }: Props) => {
  return (
    <IconButton
      color="primary"
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
    >
      <CopyAllRounded />
    </IconButton>
  );
};
