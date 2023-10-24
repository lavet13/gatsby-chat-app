import { Box, Container } from '@chakra-ui/react';
import React, { FC, PropsWithChildren } from 'react';

import { Slice } from 'gatsby';
import useIsClient from '../common/hooks/use-is-client';
import Header from './header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container maxW='container.lg' py='2'>
      <Header />
      <Box as='main'>{children}</Box>
    </Container>
  );
};

export default Layout;
