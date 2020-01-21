import { React, Component, Fragment } from 'libraries';

class SiteSidebar extends Component {
  render(){
    return(
      <Fragment>
        <aside className="sidebar-wrapper">
          <div className="sidebar-inner">
              SIDEBAR
          </div>
        </aside>
        <style jsx>
          {`
            .sidebar-wrapper {
              width: 30%;
              padding:14px;
            }
            .sidebar-inner{
              padding-bottom: 20px;
              box-shadow:0px 2px 15px 0.5px rgba(0,0,0,0.1);
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default SiteSidebar;