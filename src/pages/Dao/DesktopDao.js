import React from 'react';
import { Stack, Typography, Box, Grid } from '@mui/material';

export default function DesktopDao() {
  return (
    <Box maxWidth="xl" mx="auto">
      <Grid container alignItems="center" spacing={10} mt={20}>
        <Grid item md={4}>
          <Typography fontSize={48} fontWeight={700} textTransform="uppercase">
            Dao
          </Typography>

          <Typography fontSize={20} mt={5}>
            The DAO will be a self-sustaining ecosystem, which means that a large portion of the profits generated by Dripping Dino’s and others collections will be reinvested in the main and future Dino projects. The remaining profits will be split up into multiple branches which will include the Charity funds, Future giveaways (NFT’s consisting of DD and other trending projects!), designing/producing Dripping Dino’s merch (based on the NFT’s!) and much more.
          </Typography>
        </Grid>

        <Grid item md={8}>
          <Box>
            <Grid container columns={7} spacing={8} alignItems="stretch">
              <Grid item md={3}>
                <Box component="img" alt="dao_hero" src="/assets/images/dao_hero.png" fullWidth />
              </Grid>

              <Grid item md={2}>
                <Stack justifyContent="space-between" height="100%">
                  <Box component="img" alt="dao_1" src="/assets/images/dao_1.png" fullWidth />
                  <Box component="img" alt="dao_cross" src="/assets/images/dao_cross.png" fullWidth />
                </Stack>
              </Grid>

              <Grid item md={2}>
                <Stack justifyContent="space-between" height="100%">
                  <Box component="img" alt="dao_2" src="/assets/images/dao_2.png" fullWidth />
                  <Box component="img" alt="dao_3" src="/assets/images/dao_3.png" fullWidth />
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}