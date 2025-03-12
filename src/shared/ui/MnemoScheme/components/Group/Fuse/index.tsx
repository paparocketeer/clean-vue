import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import {
  FuseActiveIcon,
  FuseBrokenIcon,
  FuseEditorIcon,
  FuseInactiveIcon,
  FuseProblemIcon,
} from 'src/shared/icons';
import { TFuseVariant } from 'src/shared/types/controlsNO';

import { Line } from './Line';
import { IFuseProps } from './types';

export const Fuse = ({
  variant,
  title,
  subtitle,
  contactorVariant,
}: IFuseProps) => {
  const iconsVariant: Record<TFuseVariant, React.ReactElement<SVGElement>> = {
    active: <FuseActiveIcon variant={'small'} />,
    broken: <FuseBrokenIcon variant={'small'} />,
    editor: <FuseEditorIcon variant={'small'} />,
    inactive: <FuseInactiveIcon />,
    problem: <FuseProblemIcon />,
  };

  return (
    <Wrapper>
      {iconsVariant[variant]}
      <TextWrapper>
        <TextInner>
          <Text>{title}</Text>
          <Text
            style={{
              color: '#6B7C84',
            }}>
            {subtitle}
          </Text>
        </TextInner>
        <Text>В</Text>
      </TextWrapper>
      <Line variant={contactorVariant} />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  gap: 2px;
  width: 40px;
  position: relative;
`;
const TextWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 9px;
`;
const TextInner = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const Text = styled(Box)`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.12px;
`;
