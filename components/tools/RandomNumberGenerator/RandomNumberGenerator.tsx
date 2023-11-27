import {
  AccountCircle,
  Casino,
  Diamond,
  DiamondOutlined,
  Face,
  Person,
} from "@mui/icons-material";
import { Avatar, Box, Button, Sheet, Textarea, Typography } from "@mui/joy";
import { useState } from "react";

import { Tool } from "../Tool";
import { NumericTextField } from "@/components/common/NumericTextField";
import { Dice } from "./Dice";

const generatorSheetSx = {
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  mb: 1,
  p: 2,
  minWidth: "600px",
  minHeight: "80px",
};

const RandomNumberGeneratorComponent = () => {
  const [coinflip, setCoinflip] = useState<number | undefined>(0);
  const [diceroll, setDiceroll] = useState<number | undefined>(6);
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(100);
  const [rangeRoll, setRangeRoll] = useState(99);
  return (
    <div style={{ width: "100%" }}>
      <Sheet sx={generatorSheetSx} variant="outlined">
        <Button
          onClick={() => {
            setCoinflip(undefined);
            setTimeout(() => {
              setCoinflip(Math.floor(Math.random() * 2));
            }, 100);
          }}
        >
          Flip a Coin
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Typography sx={{ fontFamily: "monospace", mr: 1 }}>
          {typeof coinflip === "undefined" && ""}
          {typeof coinflip !== "undefined" && coinflip === 0 && "Heads"}
          {typeof coinflip !== "undefined" && coinflip === 1 && "Tails"}
        </Typography>
        {coinflip === 0 && (
          <Box
            sx={{
              border: "1px solid white",
              borderRadius: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <Person />
          </Box>
        )}
        {coinflip === 1 && (
          <Box
            sx={{
              border: "1px solid white",
              borderRadius: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <Diamond />
          </Box>
        )}
      </Sheet>
      <Sheet sx={generatorSheetSx} variant="outlined">
        <Button
          onClick={() => {
            setDiceroll(undefined);
            setTimeout(() => {
              setDiceroll(Math.floor(Math.random() * 6) + 1);
            }, 100);
          }}
        >
          Roll a Dice
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Typography sx={{ fontFamily: "monospace", mr: 1 }}>
          {diceroll}
        </Typography>
        {typeof diceroll === "number" && <Dice face={diceroll} />}
      </Sheet>
      <Sheet sx={generatorSheetSx} variant="outlined">
        <Button
          onClick={() => {
            if (rangeMax < rangeMin) {
              setRangeMax(rangeMin);
              setRangeMin(rangeMax);
            }
            setRangeRoll(
              Math.floor(Math.random() * (rangeMax + rangeMin)) + rangeMin
            );
          }}
          sx={{ mr: 2 }}
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
