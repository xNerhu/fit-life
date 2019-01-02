import * as React from 'react';
import GoogleMapReact from 'google-map-react';

const apiKey = process.env.GOOGLE_MAPS_API_KEY;

export interface Props {
  defaultCenter?: {
    lat: number;
    lng: number;
  };
  defaultZoom?: number;
  markers?: {
    lat: number;
    lng: number;
  }[];
  style?: any;
}

export default class Map extends React.Component<Props, {}> {
  static defaultProps: Props = {
    defaultZoom: 16,
    style: {},
  };

  private onGoogleApiLoaded = ({ map, maps }: any) => {
    const { markers } = this.props;
    for (const marker of markers) {
      new maps.Marker({
        map,
        position: marker,
      });
    }
  };

  render() {
    const { defaultCenter, defaultZoom, children, style } = this.props;

    return (
      <div style={{ width: '100%', height: '100%', ...style }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          onGoogleApiLoaded={this.onGoogleApiLoaded}
          yesIWantToUseGoogleMapApiInternals={true}
        >
          {children}
        </GoogleMapReact>
      </div>
    );
  }
}
