"use client";
// @mui
import Box from "@mui/material/Box";
//
import { BoxProps } from "@mui/system";
import Image from "../image";

// ----------------------------------------------------------------------

type Props = {
  imgUrl?: string;
};

export default function SingleFilePreview({
  imgUrl = "",
  ...other
}: Props & BoxProps) {
  return (
    <Box
      sx={{
        p: 1,
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        position: "absolute",
      }}
      {...other}
    >
      <Image
        alt="file preview"
        src={imgUrl}
        sx={{
          width: 1,
          height: 1,
          borderRadius: 1,
        }}
      />
    </Box>
  );
}
