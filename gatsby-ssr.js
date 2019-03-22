const React = require(`react`);

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="dns-prefetch"
      key="dns-prefetch-google-analytics"
      href="https://www.google-analytics.com"
    />,
    <link
      rel="dns-prefetch"
      key="dns-prefetch-google"
      href="https://www.google.com"
    />,
    <link
      rel="dns-prefetch"
      key="dns-prefetch-marketingplatform"
      href="https://marketingplatform.google.com"
    />,
    <link
      rel="preconnect"
      key="preconnect-typekit"
      href="https://use.typekit.net"
      crossorigin="anonymous"
    />
  ]);
};
