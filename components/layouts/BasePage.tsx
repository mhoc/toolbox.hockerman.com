import {
  Box,
  Divider,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  ListSubheader,
  Typography,
} from "@mui/joy";
import { useState } from "react";

import { useToolset } from "../hooks/useToolset";
import { GitHub, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { PrivacyModal } from "./PrivacyModal";

interface Props {
  selectedToolKey: string;
  setSelectedToolKey: (key: string) => any;
}

export const BasePage = ({ selectedToolKey, setSelectedToolKey }: Props) => {
  const [search, setSearch] = useState("");
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const allToolset = useToolset();

  const selectedTool = allToolset.byKey(selectedToolKey);
  const byCategory =
    search.length > 0
      ? allToolset.search(search).byCategory()
      : allToolset.byCategory();

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
            {byCategory.map((category) => (
              <>
                <ListSubheader key={category.category}>
                  {category.category}
                </ListSubheader>
                {Object.values(category.tools).map((t) => (
                  <ListItem key={t.name}>
                    <ListItemButton
                      onClick={() => setSelectedToolKey(t.key)}
                      selected={selectedToolKey === t.key}
                    >
                      <ListItemDecorator>
                        <t.icon />
                      </ListItemDecorator>
                      <ListItemContent>
                        <Typography>{t.name}</Typography>
                      </ListItemContent>
                      <KeyboardArrowRightOutlined />
                    </ListItemButton>
                  </ListItem>
                ))}
              </>
            ))}
          </List>
          <Divider />
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              p: 2,
            }}
          >
            <Box>
              <Typography level="body-xs">
                Made with <Typography color="danger">{"<3"}</Typography>
                {" by "}
                <a
                  href="https://hockerman.com"
                  style={{ textDecoration: "none" }}
                >
                  <Typography color="primary">hockerman.com</Typography>
                </a>
              </Typography>
              <Typography level="body-xs">in Indianapolis, IN</Typography>
              <ListItemButton
                onClick={() => setPrivacyModalOpen(true)}
                sx={{ width: "80px" }}
              >
                <Typography color="primary" level="body-xs">
                  Your Privacy
                </Typography>
              </ListItemButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Typography color="neutral">
              <GitHub />
            </Typography>
          </Box>
        </div>
        <Divider orientation="vertical" />
        {selectedTool && (
          <div className="content">
            <selectedTool.component />
          </div>
        )}
      </div>
      <PrivacyModal
        onClose={() => setPrivacyModalOpen(false)}
        open={privacyModalOpen}
      />
      <style jsx>{`
        .root {
          display: flex;
          flex-direction: row;
          min-height: 100vh;
          min-width: 100vw;
          max-height: 100vh;
        }
        .sidebar {
          display: flex;
          flex-direction: column;
          width: 320px;
          min-width: 320px;
          max-width: 320px;
        }
        .content {
          max-height: 100vh;
          overflow-y: scroll;
          padding: 32px;
        }
      `}</style>
    </>
  );
};
