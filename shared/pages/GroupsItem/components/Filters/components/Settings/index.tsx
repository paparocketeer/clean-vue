import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { useHandleSettingControllers } from 'src/shared/actions/settings/controllers';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { selectGroupControllersSetting } from 'src/shared/store/selectors/setting/groups/controllers';
import { Switch } from 'src/shared/ui/base/Switch';

export const Settings = () => {
  const { compactView, withAddresses, withControlPanel, withJournal, withMap } =
    useAppSelector((state) => selectGroupControllersSetting(state));

  const {
    handleOnWithControlPanel,
    handleOnWithJournal,
    handleOnWithMap,
    handleOnCompactView,
    handleOnWithAddresses,
  } = useHandleSettingControllers();

  return (
    <Wrapper>
      <Switch
        checked={withControlPanel}
        onChange={(el) => {
          handleOnWithControlPanel?.(el.target.checked);
        }}
        label={'Показать панель управления'}
      />
      <Switch
        checked={withMap}
        onChange={(el) => {
          handleOnWithMap?.(el.target.checked);
        }}
        label={'Показать карту'}
      />
      <Switch
        checked={withJournal}
        onChange={(el) => {
          handleOnWithJournal?.(el.target.checked);
        }}
        label={'Показать журнал'}
      />
      <Switch
        checked={withAddresses}
        onChange={(el) => {
          handleOnWithAddresses?.(el.target.checked);
        }}
        label={'Скрыть адреса'}
      />
      <Switch
        checked={compactView}
        onChange={(el) => {
          handleOnCompactView?.(el.target.checked);
        }}
        label={'Уменьшить карточки'}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
