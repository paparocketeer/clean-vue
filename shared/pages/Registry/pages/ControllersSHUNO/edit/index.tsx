import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams, useSearchParams } from 'react-router-dom';
import { useHandleBreadcrumbs } from 'src/shared/actions/breadcrumbs';
import { useAppDispatch } from 'src/shared/hooks/useAppDispatch';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { usePath } from 'src/shared/hooks/usePath';
import { selectRegistryControllers } from 'src/shared/store/selectors/registry/edit';
import { getControllersList } from 'src/shared/store/slices/registry/edit';
import { TabsVar2 } from 'src/shared/ui/Tabs';

import { Actions } from './components/Actions';
import { Content } from './components/Content';

const tabs = [
  {
    label: 'ОЭК',
    id: 'oek',
  },
  {
    label: 'МОССВЕТ',
    id: 'moslight',
  },
  {
    label: 'Редактор мнемосхемы',
    id: 'mnemo',
  },
  {
    label: 'Диагностика',
    id: 'diagnostic',
  },
];

const defaultTab = 'oek';
const tabSearchName = 'variant';

const EditController = () => {
  const methods = useForm({
    values: {},
  });

  const { handleBreadcrumbs } = useHandleBreadcrumbs();
  const { protectedPaths } = usePath();
  const dispatch = useAppDispatch();

  const { itemId } = useParams();
  const [getSearchParams, setSearchParams] = useSearchParams();

  const controller = useAppSelector(selectRegistryControllers);

  useEffect(() => {
    dispatch(getControllersList(itemId));

    const tabVariant = getSearchParams.get(tabSearchName);

    if (!tabVariant) {
      setSearchParams({
        [tabSearchName]: defaultTab,
      });
    }
    handleBreadcrumbs([
      {
        text: 'Реестры',
        path: protectedPaths.iisuno.registry.index(),
      },
      {
        text: 'Контроллеры',
        path: protectedPaths.iisuno.registry.controllersSHUNO.index(),
      },
      {
        text: 'Редактирование контроллера',
        path: protectedPaths.iisuno.registry.controllersSHUNO.edit(
          controller.name
        ),
      },
    ]);
  }, []);

  const onSubmit = (data) => console.log(data);

  return (
    <Wrapper onSubmit={methods.handleSubmit(onSubmit)}>
      <FormProvider {...methods}>
        <ContentWrapper>
          <Actions itemId={itemId} />

          <ControlsWrapper>
            <TabsVar2
              name={tabSearchName}
              items={tabs}
            />
          </ControlsWrapper>

          <Content defaultTab={defaultTab} />
        </ContentWrapper>
      </FormProvider>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
`;
const ContentWrapper = styled(Box)`
  display: flex;
  width: 100%;
  overflow: auto;
  border-radius: 15px 15px 15px 15px;
  flex-direction: column;
  align-items: start;
  padding: 0px 12px 12px 12px;
`;

const ControlsWrapper = styled(Box)`
  display: flex;
  width: 100%;
`;

export default EditController;
