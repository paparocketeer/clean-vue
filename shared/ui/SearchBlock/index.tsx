import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectGroupControllersSetting } from '../../store/selectors/setting/groups/controllers';
import { Form } from './components/Form';
import { Map } from './components/Map';

export const SearchBlock = () => {
  const { withMap } = useAppSelector((state) =>
    selectGroupControllersSetting(state)
  );
  if (!withMap) {
    return <></>;
  }
  return (
    <Wrapper>
      <MapWrapper>
        <Map />
      </MapWrapper>
      <FormWrapper>
        <Form />
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  min-height: 260px;
  background: #ffffff;
  box-shadow:
    0 -1px 4px 0 rgba(0, 0, 0, 0.03),
    0 5px 12px 0 rgba(0, 30, 69, 0.08);
`;

const MapWrapper = styled(Box)`
  width: 80%;
  height: 100%;
`;

const FormWrapper = styled(Box)`
  width: 40%;
  height: 100%;
`;
