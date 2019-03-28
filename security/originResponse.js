exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  if (request.uri.startsWith('/static/')) {
    headers['cache-control'] = [{key: 'Cache-Control', value: 'public, max-age=31536000, immutable'}];
  } else {
    headers['cache-control'] = [{key: 'Cache-Control', value: 'public, max-age=0, must-revalidate'}];
  }
  
  headers['strict-transport-security'] = [{key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubdomains; preload'}]; 
  headers['content-security-policy'] = [{key: 'Content-Security-Policy', value: "default-src 'self';" +
  "script-src 'self' 'unsafe-inline' www.google-analytics.com use.typekit.net;" +
  "style-src 'self' 'unsafe-inline';" +
  "img-src 'self' p.typekit.net www.google-analytics.com data:;" +
  "child-src 'self' www.youtube.com usvna.ocius.com.au;" +
  "font-src 'self' use.typekit.net;"}]; 
  headers['x-content-type-options'] = [{key: 'X-Content-Type-Options', value: 'nosniff'}]; 
  headers['x-frame-options'] = [{key: 'X-Frame-Options', value: 'DENY'}]; 
  headers['x-xss-protection'] = [{key: 'X-XSS-Protection', value: '1; mode=block'}]; 
  headers['referrer-policy'] = [{key: 'Referrer-Policy', value: 'same-origin'}]; 
    
  callback(null, response);
};