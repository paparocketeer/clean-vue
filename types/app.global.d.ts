import { AxiosInstance } from 'axios';
import Keycloak from 'keycloak-js';
import * as React from 'react';

declare global {
  /**
   * Custom utility types
   */
  type Nullable<T> = T | null;

  type Keys<T extends Record<string, unknown>> = keyof T;

  type Values<T extends Record<string, unknown>> = T[Keys<T>];

  type Indexed<K = string, T = unknown> = Record<K, T>;

  /**
   * Type aliases
   */
  type Phone = string;

  type Id = number;

  type DateIso = string;

  type Timestamp = number;

  type Url = string;

  type Color = string;

  interface IRoute {
    path: string;
    element: React.ReactNode;
  }

  interface INavEl {
    text: string;
    path: Url;
    icon?: React.ReactNode;
    children?: INavEl[];
  }

  interface IBreadcrumb {
    text: string;
    path: Url;
  }
  interface IBaseOption {
    id: string;
    label: string;
  }
  interface BoolPayload {
    status: boolean;
  }

  export type TAvatarVariants =
    | 'man'
    | 'woman'
    | 'master'
    | 'logo'
    | 'empty'
    | 'text';

  interface Window {
    axiosInstance: AxiosInstance;
    axiosInstanceProfile: AxiosInstance;
    accessToken: string;
    keyCloak: Keycloak;
  }
  interface ColorsPalette {
    colors: {
      Black: string;
      White: string;
    };
    alert: {
      'alert-red': string;
      'alert-red-light': string;
      'alert-green': string;
      'alert-green-light': string;
      'alert-orange': string;
      'alert-yellow': string;
      'alert-purple': string;
      'alert-gray-dark': string;
      'alert-gray': string;
      'alert-gray-light': string;
      'alert-gray-ultra-light': string;
      'alert-gray-ultra-light-02': string;
    };
    Accent: {
      Primary: string;
      Secondary: string;
      Tertiary: string;
      Cyan: string;
      Mint: string;
    };
    'Text&BG': {
      Text: string;
      BG: string;
    };
    Inputs: {
      Icon: string;
      'BG Inputs': string;
      'Primary Text': string;
      'Text Prompt': string;
      'BG Pressed': string;
    };
    Palette: {
      'palette-primary-blue': {
        'palette-primary-blue-50': string;
        'palette-primary-blue-100': string;
        'palette-primary-blue-200': string;
        'palette-primary-blue-300': string;
        'palette-primary-blue-400': string;
        'palette-primary-blue-500': string;
        'palette-primary-blue-600': string;
        'palette-primary-blue-700': string;
        'palette-primary-blue-800': string;
        'palette-primary-blue-900': string;
      };
      'palette-secondary-green': {
        'palette-secondary-green-50': string;
        'palette-secondary-green-100': string;
        'palette-secondary-green-200': string;
        'palette-secondary-green-300': string;
        'palette-secondary-green-400': string;
        'palette-secondary-green-500': string;
        'palette-secondary-green-600': string;
        'palette-secondary-green-700': string;
        'palette-secondary-green-800': string;
        'palette-secondary-green-900': string;
      };
      'palette-tertiary-gray': {
        'palette-tertiary-gray-50': string;
        'palette-tertiary-gray-100': string;
        'palette-tertiary-gray-200': string;
        'palette-tertiary-gray-300': string;
        'palette-tertiary-gray-400': string;
        'palette-tertiary-gray-500': string;
        'palette-tertiary-gray-600': string;
        'palette-tertiary-gray-700': string;
        'palette-tertiary-gray-800': string;
        'palette-tertiary-gray-900': string;
      };
      'palette-tertiary-cyan': {
        'palette-tertiary-cyan-50': string;
        'palette-tertiary-cyan-100': string;
        'palette-tertiary-cyan-200': string;
        'palette-tertiary-cyan-300': string;
        'palette-tertiary-cyan-400': string;
        'palette-tertiary-cyan-500': string;
        'palette-tertiary-cyan-600': string;
        'palette-tertiary-cyan-700': string;
        'palette-tertiary-cyan-800': string;
        'palette-tertiary-cyan-900': string;
      };
      'palette-gray-light': {
        'palette-gray-light-50': string;
        'palette-gray-light-100': string;
        'palette-gray-light-200': string;
        'palette-gray-light-300': string;
        'palette-gray-light-400': string;
        'palette-gray-light-500': string;
        'palette-gray-light-600': string;
        'palette-gray-light-700': string;
        'palette-gray-light-800': string;
        'palette-gray-light-900': string;
      };
      'palette-mint': {
        'palette-mint-50': string;
        'palette-mint-100': string;
        'palette-mint-200': string;
        'palette-mint-300': string;
        'palette-mint-400': string;
        'palette-mint-500': string;
        'palette-mint-600': string;
        'palette-mint-700': string;
        'palette-mint-800': string;
        'palette-mint-900': string;
      };
      'palette-black': {
        'palette-black-50': string;
        'palette-black-100': string;
        'palette-black-200': string;
        'palette-black-300': string;
        'palette-black-400': string;
        'palette-black-500': string;
        'palette-black-600': string;
        'palette-black-700': string;
        'palette-black-800': string;
        'palette-black-900': string;
      };
    };
  }

  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  declare type RootState =
    import('../src/app/providers/store/config').RootState;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  declare type AppDispatch =
    import('../src/app/providers/store/config').AppDispatch;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      colors: {
        Black: string;
        White: string;
      };
      alert: {
        'alert-red': string;
        'alert-red-light': string;
        'alert-green': string;
        'alert-green-light': string;
        'alert-orange': string;
        'alert-yellow': string;
        'alert-purple': string;
        'alert-gray-dark': string;
        'alert-gray': string;
        'alert-gray-light': string;
        'alert-gray-ultra-light': string;
        'alert-gray-ultra-light-02': string;
      };
      Accent: {
        Primary: string;
        Secondary: string;
        Tertiary: string;
        Cyan: string;
        Mint: string;
      };
      'Text&BG': {
        Text: string;
        BG: string;
      };
      Inputs: {
        Icon: string;
        'BG Inputs': string;
        'Primary Text': string;
        'Text Prompt': string;
        'BG Pressed': string;
      };
      Palette: {
        'palette-primary-blue': {
          'palette-primary-blue-50': string;
          'palette-primary-blue-100': string;
          'palette-primary-blue-200': string;
          'palette-primary-blue-300': string;
          'palette-primary-blue-400': string;
          'palette-primary-blue-500': string;
          'palette-primary-blue-600': string;
          'palette-primary-blue-700': string;
          'palette-primary-blue-800': string;
          'palette-primary-blue-900': string;
        };
        'palette-secondary-green': {
          'palette-secondary-green-50': string;
          'palette-secondary-green-100': string;
          'palette-secondary-green-200': string;
          'palette-secondary-green-300': string;
          'palette-secondary-green-400': string;
          'palette-secondary-green-500': string;
          'palette-secondary-green-600': string;
          'palette-secondary-green-700': string;
          'palette-secondary-green-800': string;
          'palette-secondary-green-900': string;
        };
        'palette-tertiary-gray': {
          'palette-tertiary-gray-50': string;
          'palette-tertiary-gray-100': string;
          'palette-tertiary-gray-200': string;
          'palette-tertiary-gray-300': string;
          'palette-tertiary-gray-400': string;
          'palette-tertiary-gray-500': string;
          'palette-tertiary-gray-600': string;
          'palette-tertiary-gray-700': string;
          'palette-tertiary-gray-800': string;
          'palette-tertiary-gray-900': string;
        };
        'palette-tertiary-cyan': {
          'palette-tertiary-cyan-50': string;
          'palette-tertiary-cyan-100': string;
          'palette-tertiary-cyan-200': string;
          'palette-tertiary-cyan-300': string;
          'palette-tertiary-cyan-400': string;
          'palette-tertiary-cyan-500': string;
          'palette-tertiary-cyan-600': string;
          'palette-tertiary-cyan-700': string;
          'palette-tertiary-cyan-800': string;
          'palette-tertiary-cyan-900': string;
        };
        'palette-gray-light': {
          'palette-gray-light-50': string;
          'palette-gray-light-100': string;
          'palette-gray-light-200': string;
          'palette-gray-light-300': string;
          'palette-gray-light-400': string;
          'palette-gray-light-500': string;
          'palette-gray-light-600': string;
          'palette-gray-light-700': string;
          'palette-gray-light-800': string;
          'palette-gray-light-900': string;
        };
        'palette-mint': {
          'palette-mint-50': string;
          'palette-mint-100': string;
          'palette-mint-200': string;
          'palette-mint-300': string;
          'palette-mint-400': string;
          'palette-mint-500': string;
          'palette-mint-600': string;
          'palette-mint-700': string;
          'palette-mint-800': string;
          'palette-mint-900': string;
        };
        'palette-black': {
          'palette-black-50': string;
          'palette-black-100': string;
          'palette-black-200': string;
          'palette-black-300': string;
          'palette-black-400': string;
          'palette-black-500': string;
          'palette-black-600': string;
          'palette-black-700': string;
          'palette-black-800': string;
          'palette-black-900': string;
        };
      };
    };
  }
}
declare module '@mui/material/styles' {
  interface Theme {}

  // allow configuration using `createTheme`
  interface ThemeOptions {}

  interface Palette {
    colors: {
      Black: string;
      White: string;
    };
    alert: {
      'alert-red': string;
      'alert-red-light': string;
      'alert-green': string;
      'alert-green-light': string;
      'alert-orange': string;
      'alert-yellow': string;
      'alert-purple': string;
      'alert-gray-dark': string;
      'alert-gray': string;
      'alert-gray-light': string;
      'alert-gray-ultra-light': string;
      'alert-gray-ultra-light-02': string;
    };
    Accent: {
      Primary: string;
      Secondary: string;
      Tertiary: string;
      Cyan: string;
      Mint: string;
    };
    'Text&BG': {
      Text: string;
      BG: string;
    };
    Inputs: {
      Icon: string;
      'BG Inputs': string;
      'Primary Text': string;
      'Text Prompt': string;
      'BG Pressed': string;
    };
    Palette: {
      'palette-primary-blue': {
        'palette-primary-blue-50': string;
        'palette-primary-blue-100': string;
        'palette-primary-blue-200': string;
        'palette-primary-blue-300': string;
        'palette-primary-blue-400': string;
        'palette-primary-blue-500': string;
        'palette-primary-blue-600': string;
        'palette-primary-blue-700': string;
        'palette-primary-blue-800': string;
        'palette-primary-blue-900': string;
      };
      'palette-secondary-green': {
        'palette-secondary-green-50': string;
        'palette-secondary-green-100': string;
        'palette-secondary-green-200': string;
        'palette-secondary-green-300': string;
        'palette-secondary-green-400': string;
        'palette-secondary-green-500': string;
        'palette-secondary-green-600': string;
        'palette-secondary-green-700': string;
        'palette-secondary-green-800': string;
        'palette-secondary-green-900': string;
      };
      'palette-tertiary-gray': {
        'palette-tertiary-gray-50': string;
        'palette-tertiary-gray-100': string;
        'palette-tertiary-gray-200': string;
        'palette-tertiary-gray-300': string;
        'palette-tertiary-gray-400': string;
        'palette-tertiary-gray-500': string;
        'palette-tertiary-gray-600': string;
        'palette-tertiary-gray-700': string;
        'palette-tertiary-gray-800': string;
        'palette-tertiary-gray-900': string;
      };
      'palette-tertiary-cyan': {
        'palette-tertiary-cyan-50': string;
        'palette-tertiary-cyan-100': string;
        'palette-tertiary-cyan-200': string;
        'palette-tertiary-cyan-300': string;
        'palette-tertiary-cyan-400': string;
        'palette-tertiary-cyan-500': string;
        'palette-tertiary-cyan-600': string;
        'palette-tertiary-cyan-700': string;
        'palette-tertiary-cyan-800': string;
        'palette-tertiary-cyan-900': string;
      };
      'palette-gray-light': {
        'palette-gray-light-50': string;
        'palette-gray-light-100': string;
        'palette-gray-light-200': string;
        'palette-gray-light-300': string;
        'palette-gray-light-400': string;
        'palette-gray-light-500': string;
        'palette-gray-light-600': string;
        'palette-gray-light-700': string;
        'palette-gray-light-800': string;
        'palette-gray-light-900': string;
      };
      'palette-mint': {
        'palette-mint-50': string;
        'palette-mint-100': string;
        'palette-mint-200': string;
        'palette-mint-300': string;
        'palette-mint-400': string;
        'palette-mint-500': string;
        'palette-mint-600': string;
        'palette-mint-700': string;
        'palette-mint-800': string;
        'palette-mint-900': string;
      };
      'palette-black': {
        'palette-black-50': string;
        'palette-black-100': string;
        'palette-black-200': string;
        'palette-black-300': string;
        'palette-black-400': string;
        'palette-black-500': string;
        'palette-black-600': string;
        'palette-black-700': string;
        'palette-black-800': string;
        'palette-black-900': string;
      };
    };
  }
  interface PaletteOptions {
    colors: {
      Black: string;
      White: string;
    };
    alert: {
      'alert-red': string;
      'alert-red-light': string;
      'alert-green': string;
      'alert-green-light': string;
      'alert-orange': string;
      'alert-yellow': string;
      'alert-purple': string;
      'alert-gray-dark': string;
      'alert-gray': string;
      'alert-gray-light': string;
      'alert-gray-ultra-light': string;
      'alert-gray-ultra-light-02': string;
    };
    Accent: {
      Primary: string;
      Secondary: string;
      Tertiary: string;
      Cyan: string;
      Mint: string;
    };
    'Text&BG': {
      Text: string;
      BG: string;
    };
    Inputs: {
      Icon: string;
      'BG Inputs': string;
      'Primary Text': string;
      'Text Prompt': string;
      'BG Pressed': string;
    };
    Palette: {
      'palette-primary-blue': {
        'palette-primary-blue-50': string;
        'palette-primary-blue-100': string;
        'palette-primary-blue-200': string;
        'palette-primary-blue-300': string;
        'palette-primary-blue-400': string;
        'palette-primary-blue-500': string;
        'palette-primary-blue-600': string;
        'palette-primary-blue-700': string;
        'palette-primary-blue-800': string;
        'palette-primary-blue-900': string;
      };
      'palette-secondary-green': {
        'palette-secondary-green-50': string;
        'palette-secondary-green-100': string;
        'palette-secondary-green-200': string;
        'palette-secondary-green-300': string;
        'palette-secondary-green-400': string;
        'palette-secondary-green-500': string;
        'palette-secondary-green-600': string;
        'palette-secondary-green-700': string;
        'palette-secondary-green-800': string;
        'palette-secondary-green-900': string;
      };
      'palette-tertiary-gray': {
        'palette-tertiary-gray-50': string;
        'palette-tertiary-gray-100': string;
        'palette-tertiary-gray-200': string;
        'palette-tertiary-gray-300': string;
        'palette-tertiary-gray-400': string;
        'palette-tertiary-gray-500': string;
        'palette-tertiary-gray-600': string;
        'palette-tertiary-gray-700': string;
        'palette-tertiary-gray-800': string;
        'palette-tertiary-gray-900': string;
      };
      'palette-tertiary-cyan': {
        'palette-tertiary-cyan-50': string;
        'palette-tertiary-cyan-100': string;
        'palette-tertiary-cyan-200': string;
        'palette-tertiary-cyan-300': string;
        'palette-tertiary-cyan-400': string;
        'palette-tertiary-cyan-500': string;
        'palette-tertiary-cyan-600': string;
        'palette-tertiary-cyan-700': string;
        'palette-tertiary-cyan-800': string;
        'palette-tertiary-cyan-900': string;
      };
      'palette-gray-light': {
        'palette-gray-light-50': string;
        'palette-gray-light-100': string;
        'palette-gray-light-200': string;
        'palette-gray-light-300': string;
        'palette-gray-light-400': string;
        'palette-gray-light-500': string;
        'palette-gray-light-600': string;
        'palette-gray-light-700': string;
        'palette-gray-light-800': string;
        'palette-gray-light-900': string;
      };
      'palette-mint': {
        'palette-mint-50': string;
        'palette-mint-100': string;
        'palette-mint-200': string;
        'palette-mint-300': string;
        'palette-mint-400': string;
        'palette-mint-500': string;
        'palette-mint-600': string;
        'palette-mint-700': string;
        'palette-mint-800': string;
        'palette-mint-900': string;
      };
      'palette-black': {
        'palette-black-50': string;
        'palette-black-100': string;
        'palette-black-200': string;
        'palette-black-300': string;
        'palette-black-400': string;
        'palette-black-500': string;
        'palette-black-600': string;
        'palette-black-700': string;
        'palette-black-800': string;
        'palette-black-900': string;
      };
    };
  }
}
