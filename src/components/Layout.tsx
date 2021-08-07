import * as React from 'react';

export const LayoutComponent: React.FC = ({ children }) => {
  // React.useEffect(() => {
  //   // TODO: Create env variable for node_env
  //   const isProd =
  //     window?.origin.startsWith('https://cleprivee.com') ||
  //     window?.origin.startsWith('https://lesembellisseurs.com/') ||
  //     window?.origin.startsWith('https://stg.');
  //   Sentry.setTag('env', isProd ? 'production' : 'development');
  //
  //   // @ts-ignore
  //   window.checkSentry = (text?: string) => {
  //     const msg = `Sentry successfully connected. Config: ${JSON.stringify(process.env) ||
  //       'Empty'} ${new Date()}. Test string: ${text}`;
  //     console.log('Go to slack channel and check an error with message: ');
  //     console.log(msg);
  //     console.log('SENTRY_DSN', process.env.SENTRY_DSN);
  //     console.log('REACT_APP_SENTRY_DSN', process.env.REACT_APP_SENTRY_DSN);
  //     // @ts-ignore
  //     console.log('window.sentry_dsn', window.sentry_dsn);
  //     Sentry.captureException(msg);
  //   };
  // }, []);

  return (
    <>
      {/*<LayoutHeader />*/}

      <div>{children}</div>
    </>
  );
};

export const Layout = LayoutComponent;
