import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import "./title.scss";

interface TitleProps {
  label: string;
}

const Title: FC<TitleProps> = ({ label }) => {
  return (
    <Stack direction="row" spacing={1} className="title">
      <Typography variant="h2" color="text.primary" className="line">
        {label}
      </Typography>
    </Stack>
  );
};

export default Title;
