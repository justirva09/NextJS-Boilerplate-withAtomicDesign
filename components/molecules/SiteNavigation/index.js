import { React, PropTypes } from 'libraries';
import Link from 'next/link';

const SiteNavigation = ({ data }) => (
  <nav style={{float: 'right'}}>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <a target="blank" href="https://github.com/justirva09/NextJS-Boilerplate-withAtomicDesign">
      Documentation
    </a>
  </nav>
);

export default SiteNavigation;