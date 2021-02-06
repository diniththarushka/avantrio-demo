import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import "./livemap.style.css";
import "leaflet/dist/leaflet.css";
import Arrow from './assets/Path86.png';

const position = [51.505, -0.09]
export default function LiveMap() {
    return (
        <div className="p-2 map card border-0 shadow-sm map-container">
            <MapContainer style={{filter: 'saturate(0) opacity(40%)', height: '100%'}} center={position} zoom={13}
                          scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            <div className="hint">
                Live location map here
                <br/>
                <span><img className="arrow" src={Arrow} width={20} alt={'Expand'}/></span>
            </div>
        </div>
    );
}
