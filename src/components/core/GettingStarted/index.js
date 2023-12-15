import React from 'react';
import { ButtonDark, ButtonOverlay } from '@components/common/Button';
import { PuffLoader } from '@components/common/Loader';
import Box from '@mui/material/Box';
import { useToasterStore } from '@store';

const GettingStartedPage = () => {
  const { setToast } = useToasterStore();

  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      <PuffLoader size={40} />
      <br />
      <ButtonDark>Hello</ButtonDark>
      <ButtonDark loading>Hello</ButtonDark>
      <ButtonOverlay
        onClick={() =>
          setToast({
            label: 'loading...',
            loading: true,
            closeOnClick: true,
          })
        }
      >
        2113
      </ButtonOverlay>
    </Box>
  );
};

export default GettingStartedPage;
