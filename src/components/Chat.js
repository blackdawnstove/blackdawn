import { useEffect } from "react";

const config = {
  // Crisp website ID
  crispWebsiteId: process.env.REACT_APP_CRISP_WEBSITE_ID,
};

function Chat() {
  if (!config.crispWebsiteId) {
    console.warn("Crisp chat is disabled because website ID is not specified");
    return null;
  }

  return <CrispScript />;
}

function CrispScript() {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = config.crispWebsiteId;
    (() => {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("body")[0].appendChild(s);
    })();
  }, []);

  return null;
}

export default Chat;
