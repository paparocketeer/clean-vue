import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';

import { IMnemoschemeSchemaRes, TContactorPhase } from '../../types/menmoscheme';
import { Group } from './components/Group';
import { Left } from './components/Left';
import bg from './mnemoSkelet.svg';
import { TPositionNumber } from './components/Group/types';

interface IMnemoSchemeEditorProps {
  schema: IMnemoschemeSchemaRes;
}
export const MnemoSchemeEditor = ({ schema }: IMnemoSchemeEditorProps) => {
  return (
    <Wrapper>
      <Left />
      {schema.input_phase.map((el, index) => {
        return (
          <Group
            schema={schema.fuses[el.phase as TContactorPhase]}
            key={el.phase}
            baseLetter={el.phase}
            number={`${index + 1}` as TPositionNumber}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  position: relative;
  width: 1130px;
  height: 711px;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 16px;
`;
