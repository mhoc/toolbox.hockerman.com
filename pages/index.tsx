import { KeyboardArrowRightOutlined, GitHub } from "@mui/icons-material";
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

import { useToolset } from "@/components/hooks/useToolset";
import { PrivacyModal } from "@/components/layouts/PrivacyModal";

export default function Home() {
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const allToolset = useToolset();

  const selectedTool = allToolset.byName(selected);
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
                <ListSubheader>{category.category}</ListSubheader>
                {Object.values(category.tools).map((t) => (
                  <ListItem key={t.name}>
                    <ListItemButton
                      onClick={() => setSelected(t.name)}
                      selected={selected === t.name}
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
              <Typography level="body3">
                Made with <Typography color="danger">{"<3"}</Typography>
                {" by "}
                <a
                  href="https://hockerman.com"
                  style={{ textDecoration: "none" }}
                >
                  <Typography color="primary">hockerman.com</Typography>
                </a>
              </Typography>
              <Typography level="body3">in Indianapolis, IN</Typography>
              <ListItemButton
                onClick={() => setPrivacyModalOpen(true)}
                sx={{ width: "70px" }}
              >
                <Typography color="primary" level="body4">
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
          width: 300px;
          max-width: 300px;
        }
        .content {
          padding: 32px;
        }
      `}</style>
    </>
  );
}
