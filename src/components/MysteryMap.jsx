import { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import { CATEGORY_BY_ID } from '../data/categories.js';

// Tile sources, both from CARTO's keyless basemaps (no API key needed): a light
// "atlas" tone for light mode and a dark tone for dark mode. An optional
// VITE_MAP_TILE_URL env var overrides both (see .env.example). Anything exposed
// to the browser is public by definition.
const TILE_OVERRIDE = import.meta.env.VITE_MAP_TILE_URL;
const TILE_URLS = {
  light: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
};

/**
 * Build a Leaflet divIcon for a pin. We use divIcon (not the default image
 * marker) so each pin is a CSS-styled dot tinted by its category colour — which
 * also sidesteps the well-known Leaflet bundler issue where the default marker
 * PNGs fail to resolve under Vite.
 */
function makePinIcon(color, featured) {
  return L.divIcon({
    className: `mystery-pin ${featured ? 'mystery-pin--featured' : ''}`,
    html: `<span class="mystery-pin__dot" style="background:${color}"></span>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

/**
 * The world map (design.md: styled like an old atlas). Tiles come from CARTO's
 * keyless basemaps — warmed into sepia (light) or used dark (dark) by CSS
 * filters in index.css. Pins are clickable and open the full case file via
 * `onSelect`.
 */
export default function MysteryMap({ mysteries, onSelect, featuredId, theme = 'light' }) {
  const tileUrl = TILE_OVERRIDE || TILE_URLS[theme] || TILE_URLS.light;
  // Memoise icons so we don't recreate them on every render.
  const icons = useMemo(() => {
    const cache = {};
    for (const m of mysteries) {
      const key = `${m.category}-${m.id === featuredId}`;
      if (!cache[key]) {
        cache[key] = makePinIcon(CATEGORY_BY_ID[m.category].color, m.id === featuredId);
      }
    }
    return cache;
  }, [mysteries, featuredId]);

  return (
    <MapContainer
      center={[30, 0]}
      zoom={2}
      minZoom={2}
      maxZoom={10}
      scrollWheelZoom
      worldCopyJump
      className="h-full w-full"
      // Keep the atlas inside one world copy and out of the grey void.
      maxBounds={[
        [-85, -180],
        [85, 180],
      ]}
      maxBoundsViscosity={1}
    >
      <TileLayer
        // Remount on url change so tiles refresh immediately when the theme flips.
        key={tileUrl}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url={tileUrl}
      />

      {mysteries.map((m) => (
        <Marker
          key={m.id}
          position={[m.location.lat, m.location.lng]}
          icon={icons[`${m.category}-${m.id === featuredId}`]}
          eventHandlers={{ click: () => onSelect(m) }}
          keyboard
          title={m.title}
        >
          <Tooltip direction="top" offset={[0, -8]} opacity={1} className="mystery-tooltip">
            <span className="font-display text-title-sm">{m.title}</span>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
