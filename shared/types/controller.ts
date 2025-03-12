export interface ICreateController {
  name: 'name'; // название котроллера
  address: 'some address'; // адресс котроллера
  ms_pp_id: number; // nullable
  groups: [
    // информация о группах контроллера
    {
      id: number;
      name: 'test1';
      type: '';
      priority: number;
      created_at: '0001-01-01T00:00:00Z';
    },
  ];
  manufacturer: {
    // информация о производителе контроллера
    id: number;
    name: 'Hello';
    created_at: '0001-01-01T00:00:00Z';
  };
  is_connected: false; // is there connection
  is_mnemoscheme_compatible: false;
  status: false; // эксплуатируется или нет
  protocol: {
    endpoints: [
      {
        host: 'opc.tcp://10.6.33.61:4841';
        sim_number: 'some_number';
      },
    ];
  };
}
