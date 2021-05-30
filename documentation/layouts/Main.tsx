import { MDXProvider } from '@mdx-js/react';
import { El, NumlProvider, PropsProvider } from '@numl-react/core';
import Head from 'next/head';
import * as React from 'react';
import MobileBar from '../components/MobileBar';
import NavigationBar from '../components/NavigationBar';
import Sidebar from '../components/Sidebar';
import Components from '../mdx-provider';
import LayoutTheme from './LayoutTheme';
import TableOfContent from './TableOfContent';

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

export default function Layout({ children }) {
  React.useEffect(() => {
    window.addEventListener('nudeReady', function () {
      window.Nude.scheme('dark');
      // OPTIONAL: define custom units
      window.Nude.units.define('gp', 'var(--grid-gap)');
      window.Nude.units.define('cp', 'var(--content-padding)');
    });
  }, []);
  return (
    <El.NumlProvider responsive="100rem|90rem|65rem|40rem|30rem" height="min 100vh" box="n" theme="main">
      <Head>
        <title>Head tag</title>
      </Head>

      <LayoutTheme></LayoutTheme>
      <NavigationBar></NavigationBar>

      <El.Flow fill="#page-bg">
        <PropsProvider main-width="--content-width - 2 - (2 * --sidebar-width)" grid-gap="8x||4x" transition="120ms" />
        <El.AttributeProvider for="list" position="inside" />
        <El.AttributeProvider for="cd" fill="^root diff :dark[#dark]" shadow=".5"></El.AttributeProvider>
        <El.AttributeProvider for="code" size="md"></El.AttributeProvider>
        <El.Grid
          space="around"
          width="--content-width"
          columns="--sidebar-width 1fr|||1fr"
          gap="1gp"
          height="min 100vh"
          is-responsive="root"
        >
          <El.Block
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
          </El.Block>
          <El.Block>
            <El.Spacer height="--topbar-offset"></El.Spacer>
            <El.Grid
              gap="1gp"
              columns="1pr --sidebar-width|||1pr"
              flow="row"
              content="start stretch"
              is-responsive="root"
            >
              <El.Block>
                <MDXProvider components={Components}>{children}</MDXProvider>
              </El.Block>
              <TableOfContent></TableOfContent>
            </El.Grid>
          </El.Block>
        </El.Grid>
      </El.Flow>
    </El.NumlProvider>
  );
}
