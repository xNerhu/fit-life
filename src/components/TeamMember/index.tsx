import * as React from 'react';

import { Root, Avatar, Name, Socials, SocialIcon } from './styles';
import { ISocialLink } from '~/interfaces';

export interface Props {
  avatar: string;
  name: string;
  socials?: ISocialLink[];
}

export default class TeamMember extends React.Component<Props, {}> {
  render() {
    const { avatar, name, socials } = this.props;

    return (
      <Root>
        <Avatar url={avatar} />
        <Name>{name}</Name>
        <Socials>
          {socials.map((data, key) => {
            return (
              <SocialIcon
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
