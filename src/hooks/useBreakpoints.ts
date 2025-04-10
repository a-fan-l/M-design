import { useMediaQuery, useTheme } from '@mui/material';

const useBreakpoints = () => {
  const theme = useTheme();
  const isdesktop = useMediaQuery(theme.breakpoints.up('md'));
  const downmd = useMediaQuery(theme.breakpoints.down('md'));
  const upsm = useMediaQuery(theme.breakpoints.up('sm'));
  const ismobile = useMediaQuery(theme.breakpoints.down('sm'));

  return {
    theme,
    isdesktop,
    downmd,
    ismobile,
    upsm,
  };
};

export default useBreakpoints;
