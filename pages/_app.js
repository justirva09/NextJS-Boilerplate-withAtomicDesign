import { React } from 'libraries';
import App from 'next/app';

class AppRoot extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
        <Component {...pageProps} />
    );
  }
}

export default AppRoot;
