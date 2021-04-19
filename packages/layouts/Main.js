import Head from 'next/head';
import { Block, NumlProvider, Flow, Grid, PropsProvider, ThemeProvider } from '@numl-react/core';
import * as React from 'react';

import LayoutTheme from './LayoutTheme';
import NavigationBar from '../components/NavigationBar';
import Sidebar from '../components/Sidebar.js';
import MobileBar from '../components/MobileBar.js';
import TableOfContent from '../layouts/TableOfContent';

/** Numl Imports */
import {} from '@numl-react/core';

const sidebar = [
  {
    heading: 'Introduction',
    children: [
      {
        link: '/',
        value: 'Getting Started',
      },
    ],
  },
  {
    heading: 'Basic',
    children: [
      {
        link: '/',
        value: 'Core Concepts',
      },
      {
        link: '/',
        value: 'Basic Styling',
      },
      {
        link: '/',
        value: 'Syntax in-depth',
      },
    ],
  },
  {
    heading: 'Features',
    children: [
      {
        link: '/',
        value: 'Responsiveness',
      },
      {
        link: '/',
        value: 'States',
      },
      {
        link: '/',
        value: 'Themes',
      },
    ],
  },
];

export default function ({ children }) {
  React.useEffect(() => {
    window.addEventListener('nudeReady', function () {
      window.Nude.scheme('dark');
      // OPTIONAL: define custom units
      window.Nude.units.define('gp', 'var(--grid-gap)');
      window.Nude.units.define('cp', 'var(--content-padding)');
    });
  }, []);
  return (
    <NumlProvider
      responsive="100rem|90rem|65rem|40rem|30rem"
      height="min 100vh"
      box="n"
      theme="main"
    >
      <Head>
        <html nu-scheme="auto" nu-contrast="auto" nu-scheme="dark" />
        <title>Head tag</title>
      </Head>

      <LayoutTheme />
      <NavigationBar />

      <Flow fill="#page-bg">
        <PropsProvider
          main-width="--content-width - 2 - (2 * --sidebar-width)"
          grid-gap="8x||4x"
          transition="120ms"
        />
        <nu-attrs for="list" position="inside" />
        <nu-attrs for="cd" fill="^root diff :dark[#dark]" shadow=".5"></nu-attrs>
        <nu-attrs for="code" size="md"></nu-attrs>
        <Grid
          space="around"
          width="--content-width"
          columns="--sidebar-width 1fr|||1fr"
          gap="1gp"
          height="min 100vh"
          is-responsive="root"
        >
          <Block
            fill="#page-bg"
            place="static|||fixed top --topbar-offset"
            width="auto|||100%"
            height="auto|||stretch"
            z="no|||10000"
            show="y|||n"
            is-responsive="root"
          >
            <MobileBar />
            <Sidebar data={sidebar} />
          </Block>
          <Block>
            <nu-spacer height="--topbar-offset"></nu-spacer>
            <Grid
              gap="1gp"
              columns="1pr --sidebar-width|||1pr"
              flow="row"
              content="start stretch"
              is-responsive="root"
            >
              <Block>{children}</Block>
              <TableOfContent></TableOfContent>
            </Grid>
          </Block>
        </Grid>
      </Flow>
    </NumlProvider>
  );
}
