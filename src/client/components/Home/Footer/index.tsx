import * as React from 'react';

import { icons } from '@client/constants';
import { Root, SocialLinks, Copyright, Link, Icon } from './styles';

export default class Footer extends React.Component {
  render() {
    return (
      <Root>
        <SocialLinks>
          <Icon
            href="https://www.facebook.com/pfitlife/"
            src={icons.facebook}
            target="_blank"
          />
          <Icon
            href="https://www.instagram.com/projket_fit_life/"
            src={icons.instagram}
            target="_blank"
          />
          <Icon
            href="https://www.youtube.com/channel/UCCLHgbnnKU_3wZzvLLHP4nw?view_as=subscriber"
            src={icons.youtube}
            target="_blank"
          />
          <Icon
            href="https://github.com/xnerhu/fit-life"
            src={icons.github}
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
