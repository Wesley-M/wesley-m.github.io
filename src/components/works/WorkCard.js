import React from "react";
import {alpha, Box, Button, Grid, styled} from "@mui/material";

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {CardContainer, CardContent, CardDescription, CardImage, CardTitle} from "./WorkCard.styles";

function WorkCard({img, title, description, link}) {

  return (
    <CardContainer container>
      <Grid item xs={12} sm={5} md={3}>
        <CardImage width="fit-content" src={img} alt="Work card"/>
      </Grid>
      <Grid item xs={12} sm={7} md={9}>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>

          <Box sx={{flexGrow: 1}}/>

          <OpenWork link={link}/>
        </CardContent>
      </Grid>
    </CardContainer>
  )
}

const OpenWork = ({link}) => {
  const BaseButton = styled(Button)(({theme}) => ({
    border: `1px solid ${alpha(theme.palette.text.main, 0.3)}`,
    color: alpha(theme.palette.text.main, 0.7),
    "&:hover": {
      backgroundColor: alpha(theme.palette.text.main, 0.1)
    },
    "& .MuiSvgIcon-root": {
      fill: alpha(theme.palette.text.main, 0.7),
    },
    [theme.breakpoints.up('xs')]: {
      width: "100%",
    },
    [theme.breakpoints.up('sm')]: {
      width: "fit-content",
    },
  }));

  return (
    <BaseButton
      variant="contained"
      href={link}
      size="small"
      target="_blank"
      endIcon={ <OpenInNewIcon/> }
      disableElevation
    >
      Open
    </BaseButton>
  );
}

export default WorkCard