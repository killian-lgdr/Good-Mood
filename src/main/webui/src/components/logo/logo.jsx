import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const logo = (
    <Stack
      ref={ref}
      height={40}
      alignItems="center"
      direction="row"
      gap={2}
      sx={{
        ...sx,
      }}
      {...other}
    >
      <svg width="40" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_22_48)">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M100 45.8716C100 20.5374 79.4624 0 54.1284 0H45.8716C20.5374 0 0 20.5374 0 45.8715V83.3335C1.79581e-05 92.533 7.45358 99.9917 16.6512 100H16.6667H16.6821C25.8747 99.9917 33.3252 92.5413 33.3333 83.3486C33.3415 92.5463 40.8003 100 50 100C59.2046 100 66.6665 92.5381 66.6665 83.3335C66.6665 92.5381 74.1284 100 83.3335 100C92.5381 100 100 92.5381 100 83.3335V45.8716ZM66.6665 83.3335H33.3333H0H66.6665Z"
                fill="#C1E1D4" />
          <path fillRule="evenodd" clipRule="evenodd"
                d="M50 16.6667C46.3179 16.6667 43.3333 19.6515 43.3333 23.3334V43.3334H23.3333C19.6515 43.3334 16.6667 46.318 16.6667 50.0001C16.6667 53.6818 19.6514 56.6666 23.3333 56.6666H43.3333V76.6666C43.3333 80.3487 46.3179 83.3336 50 83.3336C53.6821 83.3336 56.6665 80.3487 56.6665 76.6666V56.6666H76.6665C80.3486 56.6666 83.3335 53.6818 83.3335 50.0001C83.3335 46.318 80.3486 43.3334 76.6665 43.3334H56.6665V23.3334C56.6665 19.6515 53.6821 16.6667 50 16.6667Z"
                fill="#389D74" />
        </g>
        <defs>
          <clipPath id="clip0_22_48">
            <rect width="100" height="100" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <Typography variant="h4">Good Mood</Typography>


    </Stack>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
