import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    colors: {
      Black: '#000000',
      White: '#ffffff',
    },
    alert: {
      'alert-red': '#EB5757',
      'alert-red-light': '#F57474',
      'alert-green': '#27AE60',
      'alert-green-light': '#6FCF97',
      'alert-orange': '#F2994A',
      'alert-yellow': '#F2C94C',
      'alert-purple': '#F2994A',
      'alert-gray-dark': '#828282',
      'alert-gray': '#BDBDBD',
      'alert-gray-light': '#D2D0D0',
      'alert-gray-ultra-light': '#E0E0E0',
      'alert-gray-ultra-light-02': '#E0E0E0',
    },
    Accent: {
      Primary: '#0F74FF',
      Secondary: '#B6FF36',
      Tertiary: '#62747f',
      Cyan: '#00CED1',
      Mint: '#11BB8D',
    },
    'Text&BG': {
      Text: '#080d03',
      BG: '#FFFFFF',
    },
    Inputs: {
      Icon: '#09101D',
      'BG Inputs': '#F2F4F5',
      'Primary Text': '#09101D',
      'Text Prompt': '#747B84',
      'BG Pressed': '#EBEFF2',
    },
    Palette: {
      'palette-primary-blue': {
        'palette-primary-blue-50': '#e7f1ff',
        'palette-primary-blue-100': '#b5d4ff',
        'palette-primary-blue-200': '#91bfff',
        'palette-primary-blue-300': '#5ea2ff',
        'palette-primary-blue-400': '#3f90ff',
        'palette-primary-blue-500': '#0f74ff',
        'palette-primary-blue-600': '#0e6ae8',
        'palette-primary-blue-700': '#0b52b5',
        'palette-primary-blue-800': '#08408c',
        'palette-primary-blue-900': '#06316b',
      },
      'palette-secondary-green': {
        'palette-secondary-green-50': '#f8ffeb',
        'palette-secondary-green-100': '#e8ffc1',
        'palette-secondary-green-200': '#ddffa3',
        'palette-secondary-green-300': '#ceff78',
        'palette-secondary-green-400': '#c5ff5e',
        'palette-secondary-green-500': '#b6ff36',
        'palette-secondary-green-600': '#a6e831',
        'palette-secondary-green-700': '#81b526',
        'palette-secondary-green-800': '#648c1e',
        'palette-secondary-green-900': '#4c6b17',
      },
      'palette-tertiary-gray': {
        'palette-tertiary-gray-50': '#eff1f2',
        'palette-tertiary-gray-100': '#ced4d7',
        'palette-tertiary-gray-200': '#ced4d7',
        'palette-tertiary-gray-300': '#96a2a9',
        'palette-tertiary-gray-400': '#819099',
        'palette-tertiary-gray-500': '#62747f',
        'palette-tertiary-gray-600': '#596a74',
        'palette-tertiary-gray-700': '#46525a',
        'palette-tertiary-gray-800': '#364046',
        'palette-tertiary-gray-900': '#293135',
      },
      'palette-tertiary-cyan': {
        'palette-tertiary-cyan-50': '#e6fafa',
        'palette-tertiary-cyan-100': '#b0f0f1',
        'palette-tertiary-cyan-200': '#8ae8ea',
        'palette-tertiary-cyan-300': '#54dee0',
        'palette-tertiary-cyan-400': '#33d8da',
        'palette-tertiary-cyan-500': '#00ced1',
        'palette-tertiary-cyan-600': '#00bbbe',
        'palette-tertiary-cyan-700': '#009294',
        'palette-tertiary-cyan-800': '#007173',
        'palette-tertiary-cyan-900': '#005758',
      },
      'palette-gray-light': {
        'palette-gray-light-50': '#fdfdfd',
        'palette-gray-light-100': '#f8f9f9',
        'palette-gray-light-200': '#f5f6f6',
        'palette-gray-light-300': '#f1f2f2',
        'palette-gray-light-400': '#eeefef',
        'palette-gray-light-500': '#eaebeb',
        'palette-gray-light-600': '#d5d6d6',
        'palette-gray-light-700': '#a6a7a7',
        'palette-gray-light-800': '#818181',
        'palette-gray-light-900': '#626363',
      },
      'palette-mint': {
        'palette-mint-50': '#e7f8f4',
        'palette-mint-100': '#b5eadc',
        'palette-mint-200': '#92e0cb',
        'palette-mint-300': '#60d1b3',
        'palette-mint-400': '#41c9a4',
        'palette-mint-500': '#11bb8d',
        'palette-mint-600': '#0faa80',
        'palette-mint-700': '#0c8564',
        'palette-mint-800': '#09674e',
        'palette-mint-900': '#074f3b',
      },
      'palette-black': {
        'palette-black-50': '#eaebeb',
        'palette-black-100': '#bfbfc2',
        'palette-black-200': '#a0a1a4',
        'palette-black-300': '#74767a',
        'palette-black-400': '#595b61',
        'palette-black-500': '#303239',
        'palette-black-600': '#2c2e34',
        'palette-black-700': '#222428',
        'palette-black-800': '#1a1c1f',
        'palette-black-900': '#141518',
      },
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          style: {
            textTransform: 'none',
            borderRadius: '100px',
            background: '#0F74FF',
            color: '#ffffff',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '120%',
            letterSpacing: '0.2px',
          },
          props: { variant: 'contained' },
        },
        {
          style: {
            textTransform: 'none',
            borderRadius: '100px',
            background: '#ffffff',
            color: '#0F74FF',
            border: '1px solid #0F74FF',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '120%',
            letterSpacing: '0.2px',
          },
          props: { variant: 'outlined' },
        },
        {
          style: {
            height: '48px',
          },
          props: { size: 'large' },
        },
        {
          style: {
            height: '40px',
          },
          props: { size: 'medium' },
        },
        {
          style: {
            height: '32px',
          },
          props: { size: 'small' },
        },
      ],
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      variants: [
        {
          style: {
            borderRadius: '100px',
            background: '#E7F1FF',
            padding: '6.5px 20px',
            '.MuiInput-input': {
              padding: '0',
            },
          },
          props: {},
        },
        {
          props: {
            disabled: true,
          },
          // @ts-ignore
          style: {
            userSelect: 'none !important',
            background: 'none !important',
            cursor: 'initial !important',
            color: 'rgba(0, 0, 0, 0.87)',
            '.MuiInput-input': {
              userSelect: 'none !important',
              background: 'none !important',
              cursor: 'initial !important',
              color: 'rgba(0, 0, 0, 0.87) !important',
              '-webkit-text-fill-color': 'rgb(0 0 0) !important ',
            },
          },
        },
        {
          props: {
            multiline: true,
          },
          style: {
            borderRadius: '16px',
            padding: '15px 20px',
          },
        },
      ],
    },
    MuiChip: {
      variants: [
        {
          style: {
            borderRadius: '100px',
            background: '#8AB8F8',
            color: '#FFF',
            border: 'none',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0.25px',
          },
          props: {},
        },
      ],
    },
    MuiAutocomplete: {
      defaultProps: {},
      variants: [
        {
          style: {
            '.MuiButtonBase-root': {
              margin: '0',
              padding: '0 6px',
            },
            '.MuiFormControl-root': {
              padding: '0',
            },
            '.MuiInputBase-root': {
              padding: '0 20px',
              gap: '8px',
            },
            '.MuiOutlinedInput-notchedOutline': {
              border: 'none',
              outline: 'none',
            },
            '.MuiAutocomplete-tag': {
              padding: '0',
              margin: '0',
            },
            '.MuiChip-root': {
              height: '26px',
            },
          },
          props: {},
        },
      ],
    },
    MuiTextField: {
      defaultProps: {},
      variants: [
        {
          style: {
            '.MuiInputBase-root': {
              borderRadius: '100px',
              background: '#E7F1FF',
              padding: '8px 20px',
              border: 'none',
              outline: 'none',
            },
            '.MuiInputBase-input': {
              padding: '0',
            },
            '.MuiOutlinedInput-notchedOutline': {
              border: 'none',
              outline: 'none',
            },
            '.Mui-error.MuiInputBase-root': {
              border: '2px solid #FD0051',
            },
          },
          props: {},
        },
      ],
    },
    MuiSelect: {
      defaultProps: {},
      variants: [
        {
          style: {
            '& .MuiSelect-select': {
              borderRadius: '100px !important',
              background: '#E7F1FF',
              padding: '8px 20px',
            },

            '& .MuiInputBase-root': {
              borderRadius: '100px !important',
              background: '#E7F1FF',
              padding: '8px 20px',
            },

            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          },
          props: {},
        },
      ],
    },
    MuiMenu: {
      variants: [],
      styleOverrides: {
        paper: {
          borderRadius: '16px',
          background: '#FFF',
          boxShadow: '0px 8px 16px 0 rgba(0, 0, 0, 0.15)',
          width: '400px',
          padding: '8px',
        },
      },
    },
    MuiMenuItem: {
      variants: [],
      styleOverrides: {
        root: {
          display: 'flex',
          height: '40px',
          padding: '8px 12px',
          alignItems: 'center',
          gap: '8px',
          alignSelf: 'stretch',
          borderRadius: '100px',
          ':hover': {
            background: '#E7F1FF',
          },
        },
      },
    },
    MuiAccordion: {
      variants: [],
      styleOverrides: {
        root: {
          padding: '12px 16px 12px 12px !important',
          borderRadius: '24px !important',
          border: '1px solid #91BFFF !important',
          '&.Mui-expanded': {
            background: '#E7F1FF',
          },
        },
      },
    },
    MuiAccordionSummary: {
      variants: [],
      styleOverrides: {
        root: {
          margin: '0 !important',
          padding: '0 !important',
          gap: '4px !important',

          minHeight: 24,
          maxHeight: 24,
          '&.Mui-expanded': {
            minHeight: 24,
            maxHeight: 24,
          },
        },
        content: {
          margin: '0 !important',
          padding: '0 !important',
          alignItems: 'center',
        },
      },
    },
    MuiAccordionDetails: {
      variants: [],
      styleOverrides: {
        root: {
          padding: '0',
          paddingTop: '16px',
          borderTop: '1px solid #91BFFF',
          marginTop: '12px',
        },
      },
    },
    MuiAlert: {
      variants: [
        {
          props: {
            severity: 'info',
          },
          style: {
            borderRadius: '16px',
            backgroundColor: '#0F74FF',
            boxShadow: '0px 8px 16px 0 rgba(0, 0, 0, 0.15)',
            padding: '16px',
            '& .MuiPaper-root': {
              borderRadius: '16px',
              backgroundColor: '#0F74FF',
              boxShadow: '0px 8px 16px 0 rgba(0, 0, 0, 0.15)',
              padding: '16px',
            },
          },
        },
      ],
    },
    MuiAccordionActions: {},
  },
});
