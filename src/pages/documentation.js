import React from "react";
import Meta from "./../components/Meta";
import VideoSection from "./../components/VideoSection";

function DocumentationPage(props) {
  return (
    <>
      <Meta title="Documentation" />
      <VideoSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Your title here"
        subtitle=""
        embedUrl="https://www.youtube.com/embed/z9Ul9ccDOqE"
      />
    </>
  );
}

export default DocumentationPage;
