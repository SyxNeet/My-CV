"use client";
import { useDropzone } from "react-dropzone";
// @mui
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// assets

//
import { UploadProps } from "./types";
import RejectionFiles from "./errors-rejection-files";
import MultiFilePreview from "./preview-multi-file";
import SingleFilePreview from "./preview-single-file";
import Iconify from "../iconify";
import UploadIllustration from "@/assets/illustrations/upload-illustration";
import MultiFilePreviewDrag from "./preview-multi-file-drag";

// ----------------------------------------------------------------------

export default function UploadFileManager({
  disabled,
  multiple = false,
  error,
  helperText,
  //
  file,
  onDelete,
  //
  files,
  thumbnail,
  onUpload,
  onRemove,
  onRemoveAll,
  onOpen,
  sx,
  drag,
  name,
  minHeight,
  ...other
}: UploadProps) {
  const { getRootProps, isDragActive, isDragReject, fileRejections } =
    useDropzone({
      multiple,
      disabled,
      ...other,
    });

  const hasFile = !!file && !multiple;

  const hasFiles = !!files && multiple && !!files.length;

  const hasError = isDragReject || !!error;

  const renderPlaceholder = (
    <Stack
      spacing={3}
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      <UploadIllustration sx={{ width: 1, maxWidth: 200 }} />
    </Stack>
  );

  const renderSinglePreview = (
    <SingleFilePreview imgUrl={typeof file === "string" ? file : file?.path} />
  );

  const removeSinglePreview = hasFile && onDelete && (
    <IconButton
      size="small"
      onClick={onDelete}
      sx={{
        top: 16,
        right: 16,
        zIndex: 9,
        position: "absolute",
        color: (theme) => alpha(theme.palette.common.white, 0.8),
        bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
        "&:hover": {
          bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
        },
      }}
    >
      <Iconify icon="mingcute:close-line" width={18} />
    </IconButton>
  );

  const renderMultiPreview = hasFiles && (
    <>
      <Box sx={{ my: 3 }}>
        {drag && name ? (
          <MultiFilePreviewDrag
            files={files}
            thumbnail={thumbnail}
            onRemove={onRemove}
            name={name}
          />
        ) : (
          <MultiFilePreview
            files={files}
            thumbnail={thumbnail}
            onRemove={onRemove}
          />
        )}
      </Box>

      <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
        {onRemoveAll && (
          <Button
            color="inherit"
            variant="outlined"
            size="small"
            onClick={onRemoveAll}
          >
            {"Remove All"}
          </Button>
        )}
      </Stack>
    </>
  );

  return (
    <Box sx={{ width: 1, position: "relative", ...sx }}>
      <Box
        onClick={onOpen}
        sx={{
          p: 1,
          outline: "none",
          borderRadius: 1,
          cursor: "pointer",
          overflow: "hidden",
          position: "relative",

          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
          border: (theme) =>
            `1px dashed ${alpha(theme.palette.grey[500], 0.2)}`,
          transition: (theme) =>
            theme.transitions.create(["opacity", "padding"]),
          "&:hover": {
            opacity: 0.72,
          },
          ...(isDragActive && {
            opacity: 0.72,
          }),
          ...(disabled && {
            opacity: 0.48,
            pointerEvents: "none",
          }),
          ...(hasError && {
            color: "error.main",
            bgcolor: "error.lighter",
            borderColor: "error.light",
          }),
          ...(minHeight && {
            minHeight: minHeight + "px",
          }),
          ...(hasFile && {
            padding: "24% 0",
          }),
        }}
      >
        {hasFile ? renderSinglePreview : renderPlaceholder}
      </Box>

      {removeSinglePreview}

      {helperText && helperText}

      {/* <RejectionFiles fileRejections={fileRejections} /> */}
      <RejectionFiles fileRejections={fileRejections.slice()} />

      {renderMultiPreview}
    </Box>
  );
}
