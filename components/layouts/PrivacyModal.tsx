import { Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";

export interface PrivacyModalProps {
  onClose: () => any;
  open: boolean;
}

export const PrivacyModal = ({ onClose, open }: PrivacyModalProps) => {
  return (
    <Modal onClose={() => onClose()} open={open}>
      <ModalDialog>
        <ModalClose />
        <Typography level="h3" sx={{ mb: 1 }}>
          Your Privacy
        </Typography>
        <Typography level="body-md" sx={{ mb: 1 }}>
          {
            "I built this mostly for myself for fun. There are a lot of scattered tools like these around the internet. There are even some products which collect them together, free or otherwise. So, this one is mine; and you're welcome to use it."
          }
        </Typography>
        <Typography level="body-md" sx={{ mb: 1 }}>
          {
            "This website does not gather many analytics or user-identifiable data points beyond what is very foundationally necessary to, you know, be a website. I can see your IP address, country, which pages you visit, etc. That's about it. I can't and don't want to see any of the information you enter."
          }
        </Typography>
        <Typography level="body-md" sx={{ mb: 3 }}>
          {
            "Unless required for the normal operation of a specific tool, this website makes no network requests beyond loading the page. Most tools are implemented in local javascript, and the data you enter never leaves your browser. Some tools naturally require sending the data you enter to a remote source; it will be obvious where this data is going, and the data won't be sent without explicit interaction from you."
          }
        </Typography>
        <Typography level="h3" sx={{ mb: 1 }}>
          Infrastructure
        </Typography>
        <Typography level="body-md" sx={{ mb: 1 }}>
          This website is built using NextJS, and is hosted on Vercel.
          Cloudflare is involved for DNS, CDN, and various other things. The UI
          is mostly{" "}
          <a
            href="https://mui.com/joy-ui/getting-started/overview"
            style={{ textDecoration: "none" }}
          >
            <Typography color="primary" level="body-md">
              {"MUI's Joy UI"}
            </Typography>
          </a>
          {". "}The tools are implemented with a variety of open source
          libraries. All of the code for this site is open source, available
          under the Unlicense,{" "}
          <a
            href="https://github.com/mhoc/toolbox"
            style={{ textDecoration: "none" }}
          >
            <Typography color="primary">on Github</Typography>
          </a>
          .
        </Typography>
      </ModalDialog>
    </Modal>
  );
};
