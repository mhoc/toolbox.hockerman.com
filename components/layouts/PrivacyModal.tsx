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
        <Typography level="body2" sx={{ mb: 1 }}>
          {
            "I built this mostly for myself, for fun. There are a lot of scattered tools like these around the internet. There are even some products which collect them together, free or otherwise. So, this one is mine; and you're welcome to use it."
          }
        </Typography>
        <Typography level="body2" sx={{ mb: 1 }}>
          {
            "This website does not gather any analytics or user-identifiable data points beyond what is very foundationally necessary to, you know, be a website. I can see your IP address, country, etc. That's about it. This website employs no additional tracking, analytics packages, cookies, etc."
          }
        </Typography>
        <Typography level="body2" sx={{ mb: 3 }}>
          {
            "Unless otherwise noted within the page of a specific tool, this website makes no network requests beyond the initial page load. The data you enter into each tool stays within your browser, and the stuff the tools do is all done locally. Tools which require sending the data you enter to a remote source will clearly say so on the page, and the data won't be sent without explicit interaction from you."
          }
        </Typography>
        <Typography level="h3" sx={{ mb: 1 }}>
          Infrastructure
        </Typography>
        <Typography level="body2" sx={{ mb: 1 }}>
          This website is built using NextJS, and is hosted on Vercel.
          Cloudflare is involved for DNS, CDN, and various other things. The UI
          is mostly{" "}
          <a
            href="https://mui.com/joy-ui/getting-started/overview"
            style={{ textDecoration: "none" }}
          >
            <Typography color="primary" level="body2">
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
