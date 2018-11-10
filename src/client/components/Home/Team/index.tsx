import * as React from 'react';

import Section from '@client/components/Section';
import TeamMember from '@client/components/TeamMember';
import { Root } from './styles';

export default class Team extends React.Component {
  render() {
    return (
      <Section title="Zespół" style={{ marginTop: 64 }}>
        <Root>
          <TeamMember
            name="Michał Ćwikła"
            avatar="https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/42111772_2144814845758736_8576482737249058816_n.jpg?_nc_cat=110&_nc_ht=scontent.fktw1-1.fna&oh=3d04cb81e7897d2b4d592de8afdba290&oe=5C414CBF"
            socials={[
              {
                type: 'facebook',
                url:
                  'https://www.facebook.com/profile.php?id=100006907245664&ref=br_rs',
              },
            ]}
          />
          <TeamMember
            name="Martyna Wiej"
            avatar="https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/34838362_1052769738205144_1484576482612215808_n.jpg?_nc_cat=106&_nc_ht=scontent.fktw1-1.fna&oh=3b69bbd93f48970fa852bf17dc9f8b33&oe=5C82D8B9"
            socials={[
              {
                type: 'facebook',
                url:
                  'https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/',
              },
            ]}
          />
          <TeamMember
            name="Mikołaj Palkiewicz"
            avatar="https://avatars3.githubusercontent.com/u/12050791?s=460&v=4"
            socials={[
              {
                type: 'facebook',
                url: 'https://www.facebook.com/mikolaj.palkiewicz',
              },
              {
                type: 'github',
                url: 'https://www.github.com/xNerhu',
              },
            ]}
          />
        </Root>
      </Section>
    );
  }
}
