import { IDate } from './types';

export const mapData = (data: any): IDate => {
  const result: any = [];

  const keys = {
    planEnableDate:
      'График включения и отключения установок наружного освещения города Москвы.',
    planEnableTime: 'Column2',
    planDisableTime: 'Column4',
    planEnabledTime: 'Column5',
    factEnableDate:
      'Факт включения и отключения установок наружного освещения города Москвы.',
    factEnableTime: 'Column7',
    factDisableTime: 'Column9',
    factEnabledTime: 'Column10',
    deviation: 'отклонение',
  };

  data.forEach((el: any) => {
    const newData: { plan: any; fact: any; deviation: any } = {
      plan: {},
      fact: {},
      deviation: [],
    };
    newData.plan = {
      date: el[keys.planEnableDate],
      enableTime: el[keys.planEnableTime],
      disableTime: el[keys.planDisableTime],
      enabledTime: el[keys.planEnabledTime],
    };
    newData.fact = {
      date: el[keys.factEnableDate],
      enableTime: el[keys.factEnableTime],
      disableTime: el[keys.factDisableTime],
      enabledTime: el[keys.factEnabledTime],
    };
    newData.deviation = el[keys.deviation];

    result.push(newData);
  });

  return result;
};
