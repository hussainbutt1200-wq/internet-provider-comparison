"use client"
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
     colors: {
      /* Indigo /
      colorBrand50: '#eef2ff',
      colorBrand100: '#e0e7ff',
      colorBrand200: '#c7d2fe',
      colorBrand500: '#6366f1',
      colorBrand600: '#4f46e5',
      colorBrand700: '#4338ca',
      colorBrand800: '#3730a3',
      colorBrand900: '#312e81',

      / Grey /
      colorGrey0: '#fff',
      colorGrey50: '#f9fafb',
      colorGrey100: '#f3f4f6',
      colorGrey200: '#e5e7eb',
      colorGrey300: '#d1d5db',
      colorGrey400: '#9ca3af',
      colorGrey500: '#6b7280',
      colorGrey600: '#4b5563',
      colorGrey700: '#374151',
      colorGrey800: '#1f2937',
      colorGrey900: '#111827',

      / Additional colors /
      colorBlue100: '#e0f2fe',
      colorBlue700: '#0369a1',
      colorGreen100: '#dcfce7',
      colorGreen700: '#15803d',
      colorYellow100: '#fef9c3',
      colorYellow700: '#a16207',
      colorSilver100: '#e5e7eb',
      colorSilver700: '#374151',
      colorIndigo100: '#e0e7ff',
      colorIndigo700: '#4338ca',
      colorRed100: '#fee2e2',
      colorRed700: '#b91c1c',
      colorRed800: '#991b1b',

      / Miscellaneous */
      backdropColor: 'rgba(255, 255, 255, 0.1)',
      shadowSm: '0 1px 2px rgba(0, 0, 0, 0.04)',
      shadowMd: '0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06)',
      shadowLg: '0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)',
      borderRadiusTiny: '3px',
      borderRadiusSm: '5px',
      borderRadiusMd: '7px',
      borderRadiusLg: '9px',
      imageGrayscale: '0',
      imageOpacity: '100%',
    },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;