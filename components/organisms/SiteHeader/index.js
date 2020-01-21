import { React, Component, Fragment } from 'libraries';
import { SiteNavigation } from 'components/molecules';

class SiteHeader extends Component {
  render(){
    return(
      <Fragment>
        <header className="header-wrapper">
          <div className="container">
            <div className="row">
              <div className="brandTitle">
                <h1>Boileplate NextJS</h1>
              </div>
              <div className="navigation">
                <SiteNavigation />
              </div>
            </div>
          </div>
        </header>
        <style jsx>
          {`
          .header-wrapper {
            padding-top: 20px;
          }
            .navigation {
              width: 70%;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default SiteHeader;