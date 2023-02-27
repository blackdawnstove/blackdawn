import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import NewsletterSection from "./../components/NewsletterSection";
import CtaSection from "./../components/CtaSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Blackdawn"
        subtitle="Fire in the Hole."
        image="https://tokyaykereste.s3.eu-central-1.amazonaws.com/blackdawn/blackdawn-pellet-stove-main-lb.png"
        buttonText="Go To Documentation"
        buttonColor="primary"
        buttonPath="/documentation"
      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="Important details about the Blackdawn Pellet Stove"
      />
      <NewsletterSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
      <CtaSection
        bgColor="primary"
        size="medium"
        bgImage="https://tokyaykereste.s3.eu-central-1.amazonaws.com/blackdawn/blackdawn-banner.png"
        bgImageOpacity={0.8}
        title="See all technical specs"
        subtitle=""
        buttonText="Documentation"
        buttonColor="default"
        buttonPath="/documentation"
      />
    </>
  );
}

export default IndexPage;
