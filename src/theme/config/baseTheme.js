const baseTheme = {
  breakpoints: ['576px', '767px', '992px', '1200px'],
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  fontSizes: [10, 12, 14, 16, 18, 20, 24, 36, 48, 80, 96],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif: '"Roboto", sans-serif',
  },
  borders: [0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid'],
  radii: [0, 2, 4, 16, 9999, '100%'],
  width: [16, 24, 32, 64, 128, 256],
  heights: [16, 24, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    black: '#fff'
  },
};

export default baseTheme;
