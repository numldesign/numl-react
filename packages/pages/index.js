import Layout from '../layouts/Main';

/** Numl Imports */
import { Block } from '@numl-react/core';

export default function Home() {
  return (
    <Layout>
      <Block padding="4x 0 12x" grow="1" order="1|||2" is-responsive="root">
        <nu-article size="lg||||md" role="article" is-responsive="root">
          <nu-attrs for="table" size="md"></nu-attrs>
          <nu-attrs for="gridtable" size="md"></nu-attrs>
          <Block>Introduction</Block>
          Get to know how to create high-quality websites using Numl Latest Release Numl v1.0.1 is
          the latest version released. This documentation is a work-in-progress. If you get stuck,
          reach out for help in our Discord channel for chat support. Numl is a library of Web
          Components and a Runtime CSS Framework for rapidly building UI that follows your Design
          System. Blazing-fast prototyping using only HTML Works with popular JS-Frameworks Don’t
          require a build step, works with CDNs Don’t require writing CSS, fully customizable in
          runtime with HTML or JS Style mapping to state or screen width Runtime theme generator
          with Dark Scheme and High Contrast Mode Comprehensive Design System with dozens of tokens
          out-of-the-box Compatible with Static Site Generators Built with accessibility in mind
          Free and Open source
        </nu-article>
      </Block>
    </Layout>
  );
}
