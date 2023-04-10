import { FingerprintOutlined } from "@mui/icons-material";
import { Button, Slider, Typography } from "@mui/joy";
import * as nanoid from "nanoid";
import { useState } from "react";

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
    <>
      <div className="root">
        <div className="generator">
          <Button onClick={genUUIDv4} sx={{ mr: 2 }}>
            UUIDv4
          </Button>
          <Typography sx={{ fontFamily: "monospace" }}>{gUuidv4}</Typography>
        </div>
        <div className="generator">
          <Button onClick={() => genNanoid(nanoidLength)} sx={{ mr: 2 }}>
            nanoid
          </Button>
          <Slider
            defaultValue={8}
            max={24}
            min={2}
            onChange={(e: any) => {
              setNanoidLength(e.target.value);
              genNanoid(e.target.value);
            }}
            value={nanoidLength}
            valueLabelDisplay="on"
            sx={{ mr: 2, width: "150px" }}
          />
          <Typography sx={{ fontFamily: "monospace" }}>{gNanoid}</Typography>
        </div>
      </div>
      <style jsx>{`
        .root {
          width: 100%;
        }
        .generator {
          align-items: center;
          display: flex;
          flex-direction: row;
          margin-bottom: 24px;
        }
      `}</style>
    </>
  );
};

export const IDGeneratorTool = {
  component: IDGeneratorToolComponent,
  description: "Generate random IDs",
  icon: FingerprintOutlined,
  name: "Generate Random ID",
};
