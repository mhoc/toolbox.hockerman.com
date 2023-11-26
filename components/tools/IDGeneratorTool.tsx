import { Fingerprint } from "@mui/icons-material";
import { Button, Slider, Sheet, Typography } from "@mui/joy";
import * as nanoid from "nanoid";
import { useState } from "react";

import { Tool } from "./Tool";

const generatorSheetSx = {
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  mb: 1,
  p: 2,
  minWidth: "700px",
};

const IDGeneratorToolComponent = () => {
  const [gUuidv4, setGUuidv4] = useState(crypto.randomUUID());
  const [nanoidLength, setNanoidLength] = useState(8);
  const [gNanoid, setNanoid] = useState(nanoid.nanoid(nanoidLength));

  const genUUIDv4 = () => {
    const id = crypto.randomUUID();
    setGUuidv4(id);
  };
  const genNanoid = (len: number) => {
    const id = nanoid.nanoid(len);
    setNanoid(id);
  };

  return (
    <div style={{ width: "100%" }}>
      <Sheet sx={generatorSheetSx} variant="outlined">
        <Button onClick={genUUIDv4} sx={{ mr: 2 }}>
          UUIDv4
        </Button>
        <Typography sx={{ fontFamily: "monospace" }}>{gUuidv4}</Typography>
      </Sheet>
      <Sheet sx={generatorSheetSx} variant="outlined">
        <Button onClick={() => genNanoid(nanoidLength)} sx={{ mr: 2 }}>
          nanoid
        </Button>
        <Slider
          defaultValue={8}
          max={32}
          min={1}
          onChange={(e: any) => {
            setNanoidLength(e.target.value);
            genNanoid(e.target.value);
          }}
          value={nanoidLength}
          sx={{ mr: 1, width: "150px" }}
        />
        <Typography color="neutral" sx={{ mr: 2 }}>
          ({nanoidLength})
        </Typography>
        <Typography sx={{ fontFamily: "monospace" }}>{gNanoid}</Typography>
      </Sheet>
    </div>
  );
};

export const IDGeneratorTool: Tool = {
  category: "Entropy",
  component: IDGeneratorToolComponent,
  description: "generate a random ID",
  icon: Fingerprint,
  name: "Random ID",
  key: "random-id",
};
