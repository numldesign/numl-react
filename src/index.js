window.addEventListener('nudeReady', () => {
  const { Nude } = window;

  Nude.define('nu-headingwrapper', {
    contents: '*',
    styles: {
      display: 'block',
      color: 'current',
      padding: '0',
    },
    css({ tag, css }) {
      return [css, `${tag}:not([space]) > * { margin: 0; }`];
    },
  });
});
