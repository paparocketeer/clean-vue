import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';

export const SegmentLoader = () => {
  return (
    <Inner>
      <CircularProgress color='inherit' />
    </Inner>
  );
};

const Inner = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
