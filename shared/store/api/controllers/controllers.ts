import {
  IControllerReq,
  IControllerRes,
  IControllersRes,
  IControllersStatisticParams,
  IControllerStatisticRes,
  IExecControllerCommandParams,
  IGetControllerParams,
} from './controllers.types';

//  Получение списка групп контроллеров
export const getControllers = (params: IGetControllerParams) =>
  window.axiosInstance<IControllersRes>({
    url: '/controllers',
    method: 'GET',
    params,
  });

//  Получение статистики по котроллерам в группе
export const getControllersStatistic = (params: IControllersStatisticParams) =>
  window.axiosInstance<IControllerStatisticRes>({
    url: '/controllers/statistic',
    params,
    method: 'GET',
  });

//  Получение полной информации о контроллере
export const getControllerFullInfo = (id: string | number) =>
  window.axiosInstance<IControllerRes>({
    url: `/controllers/${id}`,
    method: 'GET',
  });

//  Отправление команды на сервер
export const execControllersCommand = (data: IExecControllerCommandParams) =>
  window.axiosInstance<any>({
    url: `/controllers/exec/command`,
    method: 'POST',
    data,
  });

//  Создание контроллера
export const createController = (data: IControllerReq) =>
  window.axiosInstance({
    url: `/controllers`,
    method: 'POST',
    data,
  });
