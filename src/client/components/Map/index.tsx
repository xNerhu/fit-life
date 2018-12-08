import * as React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

import { GOOGLE_MAPS_API_KEY } from '@client/constants';

const Map = withScriptjs(
  withGoogleMap((props: any) => <GoogleMap {...props} />),
);

export interface Props {
  defaultCenter: {
    lat: number;
    lng: number;
  };
  defaultZoom?: number;
  googleMapURL?: string;
}

export default (props: Props) => {
  const apiURL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;

  return (
    <Map
      defaultZoom={18}
      containerElement={
        <div style={{ width: '100%', height: 'calc(100% - 92px)' }} />
      }
      loadingElement={<div style={{ height: '100%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
      googleMapURL={apiURL}
      {...props}
    />
  );
};
