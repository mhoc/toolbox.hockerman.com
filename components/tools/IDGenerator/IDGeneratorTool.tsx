import { Fingerprint } from "@mui/icons-material";
import { Button, Slider, Sheet, Typography } from "@mui/joy";
import * as nanoid from "nanoid";
import { useState } from "react";
import { uuidv7 as createUUIDv7 } from "uuidv7";

import { Tool } from "../Tool";
import { CopyButton } from "@/components/common/CopyButton";

const generatorSheetSx = {
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  mb: 1,
  p: 2,
  minWidth: "700px",
};

const IDGeneratorToolComponent = () => {
  const [uuidv4, setUUIDv4] = useState(crypto.randomUUID());
  const [uuidv7, setUUIDv7] = useState(createUUIDv7());
  const [nanoidLength, setNanoidLength] = useState(8);
  const [gNanoid, setNanoid] = useState(nanoid.nanoid(nanoidLength));

  const refreshUUIDv4 = () => {
    const id = crypto.randomUUID();
    setUUIDv4(id);
  };
  const refreshUUIDv7 = () => {
    const id = createUUIDv7();
    setUUIDv7(id);
  };
  const refershNanoid = (len: number) => {
    const id = nanoid.nanoid(len);
    setNanoid(id);
  };

  return (
    <div style={{ width: "100%" }}>
      <Sheet sx={generatorSheetSx} variant="outlined">
        <Button onClick={refreshUUIDv4} sx={{ mr: 2 }}>
          UUIDv4
        </Button>
        <Typography sx={{ fontFamily: "monospace" }}>{uuidv4}</Typography>
        <div style={{ flexGrow: 1 }} />
        <CopyButton text={uuidv4} />
      </Sheet>
      <Sheet sx={generatorSheetSx} variant="outlined">
        <Button onClick={refreshUUIDv7} sx={{ mr: 2 }}>
          UUIDv7
        </Button>
        <Typography sx={{ fontFamily: "monospace" }}>{uuidv7}</Typography>
        <div style={{ flexGrow: 1 }} />
        <CopyButton text={uuidv7} />
      </Sheet>
      <Sheet sx={generatorSheetSx} variant="outlined">
        <Button onClick={() => refershNanoid(nanoidLength)} sx={{ mr: 2 }}>
          nanoid
        </Button>
        <Slider
          defaultValue={8}
          max={32}
          min={1}
          onChange={(e: any) => {
            setNanoidLength(e.target.value);
            refershNanoid(e.target.value);
          }}
          value={nanoidLength}
          sx={{ mr: 1, width: "150px" }}
        />
        <Typography color="neutral" sx={{ mr: 2 }}>
          ({nanoidLength})
        </Typography>
        <Typography sx={{ fontFamily: "monospace" }}>{gNanoid}</Typography>
        <div style={{ flexGrow: 1 }} />
        <CopyButton text={gNanoid} />
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
