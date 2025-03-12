export class DefaultPointObj {
  public exploitation: any;
  public outExploitation: any;
  public warning: any;
  public total: any;
  public statistic: any;
  public items: any;

  constructor() {
    this.exploitation = {};
    this.outExploitation = {};
    this.warning = {};
    this.total = 0;
    this.statistic = {
      all: 0,
      fire_alarm: 0,
      alarm: 0,
      light_off: 0,
      connected: 0,
      door_open: 0,
      evening: 0,
      mode_autonomous: 0,
      mode_blocked: 0,
      mode_local: 0,
      mode_teleaddress: 0,
      night: 0,
      not_connected: 0,
    };
    this.items = [];
  }
}
