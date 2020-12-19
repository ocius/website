exports.handler = (event, context, callback) => {
  const { request } = event.Records[0].cf;
  const { response } = event.Records[0].cf;
  const { headers } = response;

  if (request.uri.startsWith('/static/')) {
    headers['cache-control'] = [
      { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
    ];
  } else {
    headers['cache-control'] = [
      { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }
    ];
  }

  headers['strict-transport-security'] = [
    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubdomains; preload' }
  ];
  headers['content-security-policy'] = [
    {
      key: 'Content-Security-Policy',
      value:
        "default-src 'self' www.google-analytics.com www.google.com marketingplatform.google.com;" +
        "script-src 'self' 'unsafe-inline' www.google-analytics.com static.doubleclick.net stats.g.doubleclick.net www.googletagmanager.com;" +
        "style-src 'self' 'unsafe-inline';" +
        "img-src 'self' www.google-analytics.com stats.g.doubleclick.net data:;" +
        "frame-src 'self' *.youtube.com *.youtube-nocookie.com www.instagram.com twitter.com usvna.ocius.com.au;" +
        "object-src 'self' *.googlevideo.com *.ytimg.com *.youtube.com *.youtube-nocookie.com;" +
        "connect-src 'self' www.google-analytics.com www.googletagmanager.com stats.g.doubleclick.net qf498rjqnj.execute-api.us-east-1.amazonaws.com;" +
        "font-src 'self';"
    }
  ];
  headers['x-content-type-options'] = [{ key: 'X-Content-Type-Options', value: 'nosniff' }];
  headers['x-frame-options'] = [{ key: 'X-Frame-Options', value: 'DENY' }];
  headers['x-xss-protection'] = [{ key: 'X-XSS-Protection', value: '1; mode=block' }];
  headers['referrer-policy'] = [{ key: 'Referrer-Policy', value: 'same-origin' }];

  callback(null, response);
};
