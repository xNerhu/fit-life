import * as React from 'react';

import {
  Root,
  SocialLinks,
  FacebookIcon,
  InstagramIcon,
  GithubIcon,
  Copyright,
  Link,
} from './styles';

export default class Footer extends React.Component {
  render() {
    return (
      <Root>
        <SocialLinks>
          <FacebookIcon
            href="https://www.facebook.com/pfitlife/"
            target="_blank"
          />
          <InstagramIcon
            href="https://www.instagram.com/projket_fit_life/"
            target="_blank"
          />
          <GithubIcon
            href="https://github.com/xnerhu/fit-life"
            target="_blank"
          />
        </SocialLinks>
        <Copyright>
          &copy; 2018&nbsp;
          <Link href="https://github.com/xnerhu/">Mikołaj Palkiewicz</Link>
        </Copyright>
      </Root>
    );
  }
}
