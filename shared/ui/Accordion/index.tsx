import styled from '@emotion/styled';
import MuiAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import React from 'react';

import { AngleIcon } from '../../icons';
import { IGetRolesResponse } from '../../types/roles';
import { Checkbox } from '../base/CheckBox';
import { Typography } from '../base/Typography';

interface IAccordionProps {
  title: string;
  disabled: boolean;
  data: IGetRolesResponse['items'];
  checkedList: string[];
}
export const Accordion = ({
  title,
  disabled,
  data,
  checkedList,
}: IAccordionProps) => {
  return (
    <Wrapper>
      <MuiAccordion>
        <AccordionSummary
          expandIcon={<AngleIcon />}
          aria-controls='panel2-content'
          id='panel2-header'>
          <HeadWrapper>
            <Typography
              variant={'title.medium'}
              bold>
              {title}
            </Typography>
          </HeadWrapper>
        </AccordionSummary>
        <AccordionDetails>
          {data.map((el) => {
            return (
              <Checkbox
                key={el.id}
                checkboxProps={{
                  disabled,
                  checked: checkedList.includes(el.name),
                }}
                label={el.info}
              />
            );
          })}
        </AccordionDetails>
      </MuiAccordion>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const AccordionSummary = styled(MuiAccordionSummary)`
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded' {
    gap: 4px;
  }
  flex-direction: row-reverse;
`;

const HeadWrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-height: 24px;
`;
