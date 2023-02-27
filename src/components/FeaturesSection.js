import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },

    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(3)}px`,
    },
  },
  figure: {
    maxWidth: 300,
    margin: "30px auto",
  },
  image: {
    height: "auto",
    maxWidth: "100%",
  },
}));

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: "No Electricity",
      description:
          "There are no blowers, no auger and no control board.",
      image: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/blackdawn/blackdawn-power.png",
    },
    {
      title: "Low Operating Costs",
      description:
          "Pellet fire has one of the lowest running cost sources to heat.",
      image: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/blackdawn/blackdawn-salary.png",
    },
    {
      title: "No Noise",
      description:
          "No blower and auger, so it works silently.",
      image: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/blackdawn/blackdawn-no-sound.png",
    },
    {
      title: "Emergency Heat",
      description:
          "It does not need an external power source, so it can be used in emergency situations.",
      image: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/blackdawn/blackdawn-stove.png",
    },
  ];

  return (
      <Section
          bgColor={props.bgColor}
          size={props.size}
          bgImage={props.bgImage}
          bgImageOpacity={props.bgImageOpacity}
      >
        <Container>
          <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={4}
              textAlign="center"
          />
          <Container
              maxWidth="md"
              disableGutters={true}
              className={classes.itemsContainer}
          >
            {items.map((item, index) => (
                <Grid
                    className={classes.row}
                    container={true}
                    item={true}
                    alignItems="center"
                    spacing={4}
                    key={index}
                >
                  <Grid item={true} xs={12} md={6}>
                    <Box
                        textAlign={{
                          xs: "center",
                          md: "left",
                        }}
                    >
                      <Typography variant="h5" gutterBottom={true}>
                        {item.title}
                      </Typography>
                      <Typography variant="subtitle1">
                        {item.description}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item={true} xs={12} md={6}>
                    <figure className={classes.figure}>
                      <img
                          src={item.image}
                          alt={item.title}
                          className={classes.image}
                      />
                    </figure>
                  </Grid>
                </Grid>
            ))}
          </Container>
        </Container>
      </Section>
  );
}

export default FeaturesSection;
