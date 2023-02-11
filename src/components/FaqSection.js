import React from "react";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles((theme) => ({
  accordion: {
    // Remove shadow
    boxShadow: "none",
    "&:before": {
      // Remove default divider
      display: "none",
    },
    // Add a custom border
    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  expanded: {
    margin: `0 !important`,
  },
  summary: {
    minHeight: 78,
  },
  summaryContent: {
    margin: "0 !important",
  },
}));

function FaqSection(props) {
  const classes = useStyles();

  const items = [
    {
      question: "What is a pellet stove and how does it work?",
      answer:
        "A pellet stove is a heating appliance that burns compressed wood or biomass pellets to produce heat. The pellets are fed into the stove from a storage hopper and burned in a combustion chamber, producing hot air which is then circulated into the room by a fan.",
    },
    {
      question: "What are the advantages of using a pellet stove?",
      answer:
        "One of the main advantages of a pellet stove is that it is more environmentally friendly than traditional heating methods as the fuel used is a renewable resource. Pellet stoves are also efficient, producing more heat with less fuel, and are convenient, as the fuel is automatically fed into the stove from a hopper.",
    },
    {
      question: "How much does it cost to operate a pellet stove?",
      answer:
        "The cost of operating a pellet stove will depend on a variety of factors, such as the price of the pellets, the size of the stove, and how often it is used. On average, it costs about $5 to $25 per day to operate a pellet stove, but this can vary widely based on local prices and usage patterns.",
    },
    {
      question: "How often do the pellets need to be refilled in the hopper?",
      answer:
        "This will depend on the size of the hopper and the usage of the stove. On average, a 40-pound hopper will need to be refilled every 24 hours of continuous use, but this can vary based on the stove's efficiency and the ambient temperature.",
    },
    {
      question: "Is it difficult to install a pellet stove?",
      answer:
        "Installing a pellet stove can be a complex and involved process, and it is recommended that you hire a professional installer to ensure that the stove is installed safely and correctly. This will typically cost several hundred dollars, but will ensure that the stove is installed correctly and that it operates safely and efficiently.",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        {items.map((item, index) => (
          <Accordion
            classes={{
              root: classes.accordion,
              expanded: classes.expanded,
            }}
            key={index}
          >
            <AccordionSummary
              classes={{
                root: classes.summary,
                content: classes.summaryContent,
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-panel-${index}`}
            >
              <Typography variant="h6">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails id={`faq-panel-${index}`}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Section>
  );
}

export default FaqSection;
