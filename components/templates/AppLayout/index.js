import { React, Component, Fragment, PropTypes } from 'libraries';
import { SiteHeader, SiteSidebar, SiteFooter } from '../../organisms';
import { MainSection } from '../../molecules';
import { DefaultSeo, NextSeo } from 'next-seo';
import { appConfig } from 'config';

class AppLayout extends Component {
  static propTypes = {
    showSidebar: PropTypes.bool,
    children: PropTypes.any,
    url: PropTypes.string,
    images:PropTypes.array,
    title: PropTypes.any,
    description: PropTypes.string
  };

  static defaultProps = {
    url: '',
    title: '',
    description: '',
    images: [],
    showSidebar: false
  }
  render(){
    const { children, title, description, url, images, showSidebar } = this.props;
    return(
    <Fragment>
      <DefaultSeo openGraph={appConfig.openGraph}/>
      <NextSeo 
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description,
          images
        }}
      />
      <SiteHeader />
        <MainSection>
          <div className="container">
              <div className="row">
                <div className={showSidebar ? 'main-content' : 'full-mainContent'}>{children}</div>
                {showSidebar && <SiteSidebar />}
              </div>
          </div>
        </MainSection>
      <SiteFooter />
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          .row {
            display:flex;
            flex-wrap:wrap;
          }
          .container {
            width:1020px;
            margin: auto;
          }
          .section-container {
            padding: 40px 0;
          }
          .full-mainContent {
            width:100%;
            padding:14px;
          }
          .main-content {
            width:70%;
            padding:14px;
          }
        `}
      </style>
    </Fragment>
    )
  }
}

export default AppLayout;