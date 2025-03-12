import {
  IControllerGroup,
  IControllerGroupStatisticRes,
  IGetControllersGroupsRes,
} from './groups.types';

//  Получение списка групп контроллеров
export const getControllersGroups = () =>
  window.axiosInstance<IGetControllersGroupsRes>({
    url: '/controller/groups',
    method: 'GET',
  });

//  Получение статистики по группам
export const getControllersGroupsStatistic = () =>
  window.axiosInstance<IControllerGroupStatisticRes>({
    url: '/controller/groups/statistic',
    method: 'GET',
  });

//  Получение полной информации о группе контроллеров
export const getControllersGroupInfo = (id: string) =>
  window.axiosInstance<IControllerGroup>({
    url: `/controllers/groups/${id}`,
    method: 'GET',
  });

//  Создание группы контроллеров
export const createControllersGroup = (data: Omit<IControllerGroup, 'id'>) =>
  window.axiosInstance({
    url: `/groups`,
    method: 'POST',
    data,
  });

//  Изменение группы контроллеров
export const updateControllersGroup = (
  id: string,
  data: Omit<IControllerGroup, 'id'>
) =>
  window.axiosInstance({
    url: `/groups/${id}`,
    method: 'PATCH',
    data,
  });
