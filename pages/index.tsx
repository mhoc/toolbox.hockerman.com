import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Divider,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import { useState } from "react";

import { IDGeneratorTool } from "@/components/tools/IDGeneratorTool";

const tools = {
  [IDGeneratorTool.name]: IDGeneratorTool,
};

export default function Home() {
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");

  const selectedTool = selected ? tools[selected] : undefined;

  const filteredTools =
    search.length > 0
      ? Object.values(tools).filter((t) => {
          return (
            t.name.toLowerCase().includes(search.toLowerCase()) ||
            t.description.toLowerCase().includes(search.toLowerCase())
          );
        })
      : Object.values(tools);

  return (
    <>
      <div className="root">
        <div className="sidebar">
          <List aria-label="basic-list">
            <ListItem>
              <ListItemContent>
                <Input
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  value={search}
                />
              </ListItemContent>
            </ListItem>
            {filteredTools.map((tool) => (
              <ListItem key={tool.name}>
                <ListItemButton
                  onClick={() => setSelected(tool.name)}
                  selected={selected === tool.name}
                >
                  <ListItemDecorator>
                    <tool.icon />
                  </ListItemDecorator>
                  <ListItemContent>
                    <Typography>{tool.name}</Typography>
                  </ListItemContent>
                  <KeyboardArrowRightOutlined />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
        <Divider orientation="vertical" />
        {selectedTool && (
          <div className="content">
            <selectedTool.component />
          </div>
        )}
      </div>
      <style jsx>{`
        .root {
          display: flex;
          flex-direction: row;
          min-height: 100vh;
          min-width: 100vw;
        }
        .sidebar {
          display: flex;
          flex-direction: column;
          max-width: 250px;
        }
        .content {
          padding: 32px;
        }
      `}</style>
    </>
  );
}
