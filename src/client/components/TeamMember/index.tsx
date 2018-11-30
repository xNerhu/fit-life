import * as React from 'react';

import { Root, Avatar, Name } from './styles';

export interface Props {
  avatar?: string;
  name: string;
  url: string;
}

export default class TeamMember extends React.Component<Props, {}> {
  render() {
    const { avatar, name, url } = this.props;

    return (
      <Root href={url} target="_blank">
        <Avatar url={avatar} />
        <Name>{name}</Name>
      </Root>
    );
  }
}
