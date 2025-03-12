export interface IMnemoschemeSchemaRes {
  version: number;
  contactors: {
    evening: {
      enabled: boolean;
    };
    night: {
      enabled: boolean;
    };
  };
  input_phase: [
    {
      enabled: boolean;
      phase: TContactorPhase;
    },
    {
      enabled: boolean;
      phase: TContactorPhase;
    },
    {
      enabled: boolean;
      phase: TContactorPhase;
    },
  ];
  fuses: Record<TContactorPhase, TContactorFuseItem[]>;
}

export type TContactorType = 'contactor' | 'unused' | 'reserved' | 'night';
export type TContactorPhase = 'A' | 'B' | 'C';
export type TContactorFuseItem = {
  number: number;
  contactor: TContactorType;
};
