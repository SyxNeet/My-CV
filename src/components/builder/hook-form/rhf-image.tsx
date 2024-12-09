"use client";
import { useFormContext, Controller } from "react-hook-form";
// @mui
import FormHelperText from "@mui/material/FormHelperText";
import { UploadFileManager, UploadProps } from "./upload-file-manager";
//

// ----------------------------------------------------------------------

interface Props extends Omit<UploadProps, "file"> {
  name: string;
  multiple?: boolean;
  number?: number;
  accept?: any;
  drag?: boolean;
}

// ----------------------------------------------------------------------

export function RHFImage({
  name,
  multiple,
  helperText,
  minHeight,
  accept,
  drag,
  ...other
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) =>
        multiple ? (
          <UploadFileManager
            drag={drag}
            name={name}
            multiple
            accept={accept || { "image/*": [] }}
            files={field.value}
            error={!!error}
            helperText={
              (!!error || helperText) && (
                <FormHelperText error={!!error} sx={{ px: 2 }}>
                  {error ? error?.message : helperText}
                </FormHelperText>
              )
            }
            minHeight={minHeight}
            {...other}
          />
        ) : (
          <UploadFileManager
            accept={accept || { "image/*": [] }}
            file={field.value}
            error={!!error}
            helperText={
              (!!error || helperText) && (
                <FormHelperText error={!!error} sx={{ px: 2 }}>
                  {error ? error?.message : helperText}
                </FormHelperText>
              )
            }
            minHeight={minHeight}
            {...other}
          />
        )
      }
    />
  );
}
