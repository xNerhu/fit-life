import * as React from 'react';

import { Root, Avatar, Name, Socials, Social } from './styles';
import { SocialLink } from '~/interfaces';

export interface Props {
  avatar: string;
  name: string;
  socials?: SocialLink[];
}

export default class Organizator extends React.Component<Props, {}> {
  render() {
    const { avatar, name, socials } = this.props;

    return (
      <Root>
        <Avatar url={avatar} />
        <Name>{name}</Name>
        <Socials>
          {socials.map((data, key) => {
            return (
              <Social
                href={data.url}
                type={data.type}
                key={key}
                target="_blank"
              />
            );
          })}
        </Socials>
      </Root>
    );
  }
}
