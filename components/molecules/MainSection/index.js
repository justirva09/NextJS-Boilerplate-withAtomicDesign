import { React, PropTypes } from 'libraries';

const MainSection = ({ children, className, style, ...props }) => (
  <section id="MainSection" style={{ ...style }} className="section-container" {...props}>
    {children}
  </section>
);
MainSection.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  className: PropTypes.any
};

export default React.memo(MainSection);
