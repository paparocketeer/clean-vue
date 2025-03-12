import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';

import { MnemoSchemeEditor, PPStatusList } from '../../../../../../../ui';
import { IMnemoschemeSchemaRes } from '../../../../../../../types/menmoscheme';

const schema = {
  version: 1,
  contactors: {
    evening: {
      enabled: true,
    },
    night: {
      enabled: true,
    },
  },
  input_phase: [
    {
      enabled: true,
      phase: 'A',
    },
    {
      enabled: true,
      phase: 'B',
    },
    {
      enabled: true,
      phase: 'C',
    },
  ],
  fuses: {
    A: [
      {
        number: 1,
        contactor: 'evening',
      },
      {
        number: 2,
        contactor: 'night',
      },
      {
        number: 3,
        contactor: 'reserved',
      },
      {
        number: 4,
        contactor: 'unused',
      },
      {
        number: 5,
        contactor: 'evening',
      },
      {
        number: 6,
        contactor: 'night',
      },
      {
        number: 7,
        contactor: 'reserved',
      },
      {
        number: 8,
        contactor: 'unused',
      },
      {
        number: 9,
        contactor: 'evening',
      },
      {
        number: 10,
        contactor: 'night',
      },
      {
        number: 11,
        contactor: 'reserved',
      },
      {
        number: 12,
        contactor: 'unused',
      },
      {
        number: 13,
        contactor: 'evening',
      },
      {
        number: 14,
        contactor: 'night',
      },
      {
        number: 15,
        contactor: 'reserved',
      },
      {
        number: 16,
        contactor: 'unused',
      },
    ],
    B: [
      {
        number: 1,
        contactor: 'evening',
      },
      {
        number: 2,
        contactor: 'night',
      },
      {
        number: 3,
        contactor: 'reserved',
      },
      {
        number: 4,
        contactor: 'unused',
      },
      {
        number: 5,
        contactor: 'evening',
      },
      {
        number: 6,
        contactor: 'night',
      },
      {
        number: 7,
        contactor: 'reserved',
      },
      {
        number: 8,
        contactor: 'unused',
      },
      {
        number: 9,
        contactor: 'evening',
      },
      {
        number: 10,
        contactor: 'night',
      },
      {
        number: 11,
        contactor: 'reserved',
      },
      {
        number: 12,
        contactor: 'unused',
      },
      {
        number: 13,
        contactor: 'evening',
      },
      {
        number: 14,
        contactor: 'night',
      },
      {
        number: 15,
        contactor: 'reserved',
      },
      {
        number: 16,
        contactor: 'unused',
      },
    ],
    C: [
      {
        number: 1,
        contactor: 'evening',
      },
      {
        number: 2,
        contactor: 'night',
      },
      {
        number: 3,
        contactor: 'reserved',
      },
      {
        number: 4,
        contactor: 'unused',
      },
      {
        number: 5,
        contactor: 'evening',
      },
      {
        number: 6,
        contactor: 'night',
      },
      {
        number: 7,
        contactor: 'reserved',
      },
      {
        number: 8,
        contactor: 'unused',
      },
      {
        number: 9,
        contactor: 'evening',
      },
      {
        number: 10,
        contactor: 'night',
      },
      {
        number: 11,
        contactor: 'reserved',
      },
      {
        number: 12,
        contactor: 'unused',
      },
      {
        number: 13,
        contactor: 'evening',
      },
      {
        number: 14,
        contactor: 'night',
      },
      {
        number: 15,
        contactor: 'reserved',
      },
      {
        number: 16,
        contactor: 'unused',
      },
    ],
  },
};

export const Editor = () => {
  return (
    <Wrapper>
      <SchemeWrapper>
        <PPStatusList editMode={true} />
        <MnemoSchemeWrapper>
          <MnemoSchemeEditor schema={schema as IMnemoschemeSchemaRes}/>
        </MnemoSchemeWrapper>
      </SchemeWrapper>
    </Wrapper>
  );
};

const SchemeWrapper = styled(Box)`
  display: flex;
  height: 100%;
  gap: 12px;
  border-radius: 24px;
  background: #ffffff;
`;

const MnemoSchemeWrapper = styled(Box)`
  border-radius: 16px;
  border: 1px solid #71b8ff;
  background: #fff;
  padding: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
