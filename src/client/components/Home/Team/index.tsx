import * as React from 'react';

import Section from '@client/components/Section';
import { TeamMemberRoot, Avatar, Name, Row } from './styles';

export interface TeamMemberProps {
  avatar?: string;
  name: string;
  url: string;
}

export class TeamMember extends React.Component<TeamMemberProps, {}> {
  render() {
    const { avatar, name, url } = this.props;

    return (
      <TeamMemberRoot href={url} target="_blank">
        <Avatar src={avatar} />
        <Name>{name}</Name>
      </TeamMemberRoot>
    );
  }
}

export default class Team extends React.Component {
  render() {
    return (
      <Section
        id="team"
        title="Nasz zespół"
        style={{ backgroundColor: '#fafafa' }}
      >
        <React.Fragment>
          <Row>
            <TeamMember
              name="Michał Ćwikła"
              avatar="https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/42111772_2144814845758736_8576482737249058816_n.jpg?_nc_cat=110&_nc_ht=scontent.fktw1-1.fna&oh=3d04cb81e7897d2b4d592de8afdba290&oe=5C414CBF"
              url="https://www.facebook.com/profile.php?id=100006907245664&ref=br_rs"
            />
            <TeamMember
              name="Martyna Wiej"
              avatar="https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/34838362_1052769738205144_1484576482612215808_n.jpg?_nc_cat=106&_nc_ht=scontent.fktw1-1.fna&oh=3b69bbd93f48970fa852bf17dc9f8b33&oe=5C82D8B9"
              url="https://www.facebook.com/profile.php?id=100004163835092"
            />
            <TeamMember
              name="Mikołaj Palkiewicz"
              avatar="https://avatars3.githubusercontent.com/u/12050791?s=460&v=4"
              url="https://www.facebook.com/mikolaj.palkiewicz"
            />
          </Row>
          <Row>
            <TeamMember
              name="Hania Szostak"
              avatar="https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/36745616_871989423003077_4152891263907004416_n.jpg?_nc_cat=103&_nc_ht=scontent.fktw1-1.fna&oh=0e8edeb5c351bad0b16fc63fe9726a95&oe=5CA2DFB5"
              url="https://www.facebook.com/hania.szostak"
            />
            <TeamMember
              name="Emilka Kucharska"
              avatar="https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/39993420_1121676141317207_7298168794852098048_n.jpg?_nc_cat=102&_nc_ht=scontent.fktw1-1.fna&oh=6752507f1aeeb56b060882f85e163515&oe=5C69BA77"
              url="https://www.facebook.com/emilka.kucharska.58"
            />
            <TeamMember
              name="Sara Eva"
              url="https://www.facebook.com/hania.szostak"
            />
          </Row>
        </React.Fragment>
      </Section>
    );
  }
}
