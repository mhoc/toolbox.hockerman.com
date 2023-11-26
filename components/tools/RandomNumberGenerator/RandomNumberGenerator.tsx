import { Casino } from "@mui/icons-material";
import { Box, Button, Sheet, Textarea, Typography } from "@mui/joy";
import { useState } from "react";

import { Tool } from "../Tool";
import { NumericTextField } from "@/components/common/NumericTextField";

const generatorSheetSx = {
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  mb: 1,
  p: 2,
  minWidth: "600px",
};

const RandomNumberGeneratorComponent = () => {
  const [diceroll, setDiceroll] = useState(6);
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(100);
  const [rangeRoll, setRangeRoll] = useState(100);
  return (
    <div style={{ width: "100%" }}>
      <Sheet sx={generatorSheetSx} variant="outlined">
        <Button
          onClick={() => {
            setDiceroll(Math.floor(Math.random() * 6) + 1);
          }}
        >
          Roll a Dice
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Typography sx={{ fontFamily: "monospace", fontWeight: "bold" }}>
          {diceroll}
        </Typography>
      </Sheet>
      <Sheet sx={generatorSheetSx} variant="outlined">
        <Button
          onClick={() => {
            setRangeRoll(
              Math.floor(Math.random() * (rangeMax + rangeMin)) + rangeMin
            );
          }}
          sx={{ mr: 1 }}
        >
          Within a Range
        </Button>
        <NumericTextField
          onChange={setRangeMin}
          sx={{ maxWidth: "100px", minWidth: "100px", mr: 1 }}
          value={rangeMin}
        />
        <Typography>-</Typography>
        <NumericTextField
          onChange={setRangeMax}
          sx={{ maxWidth: "100px", minWidth: "100px", ml: 1, mr: 1 }}
          value={rangeMax}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Typography sx={{ fontFamily: "monospace", fontWeight: "bold" }}>
          {rangeRoll}
        </Typography>
      </Sheet>
    </div>
  );
};

export const RandomNumberGeneratorTool: Tool = {
  category: "Entropy",
  component: RandomNumberGeneratorComponent,
  description: "generate random numbers",
  icon: Casino,
  name: "Random Number",
  key: "random-numbers",
};
