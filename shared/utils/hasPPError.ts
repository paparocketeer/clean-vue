export const hasPPError = (statuses?: any) => {
  let res = false;

  const errorKeyList = [
    'alarm',
    'cabinet_door_open',
    'connected',
    'evening_cont_state',
    'fire_alarm',
    'in_exploitation',
    'input_alarm',
    'lamp_error',
    'line_failure',
    'night_cont_state',
    'outgoing_lines_alarm',
    'station_door_open',
  ];

  errorKeyList.forEach((el) => {
    if ((statuses as any)?.[el]) {
      res = true;
      return;
    }
  });

  return res;
};
