import { useTheme } from '@emotion/react';
import { Avatar as MuiAvatar } from '@mui/material';
import React from 'react';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { AvatarIcon } from 'src/shared/icons';
import { selectSFIO } from 'src/shared/store/selectors/user';
import { Typography } from 'src/shared/ui/base/Typography';

const defaultHeightWidth = '56px';
interface IAvatarProps {
  variant: TAvatarVariants;
  width?: string;
  height?: string;
}
export const Avatar = ({
  variant,
  height = defaultHeightWidth,
  width = defaultHeightWidth,
}: IAvatarProps) => {
  const { palette } = useTheme();

  if (variant === 'text') {
    const sfio = useAppSelector((state) => selectSFIO(state));
    return (
      <MuiAvatar
        sx={{
          bgcolor: palette.Accent.Primary,
          width,
          height,
        }}>
        <Typography
          variant={'title.medium'}
          color={'colors.White'}
          style={{ textTransform: 'uppercase' }}>
          {sfio}
        </Typography>
      </MuiAvatar>
    );
  }

  return (
    <AvatarIcon
      width={width}
      height={height}
      variant={variant}
    />
  );
};
