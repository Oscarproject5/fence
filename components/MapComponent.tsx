'use client'

import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

export default function MapComponent() {
  useEffect(() => {
    // Check if map already exists
    const container = L.DomUtil.get('map')
    if (container != null) {
      (container as any)._leaflet_id = null
    }

    // Initialize map centered on RGV
    const map = L.map('map', {
      center: [26.175, -97.8],
      zoom: 9,  // Zoomed out to show full boundary
      maxZoom: 14,
      minZoom: 9,
      maxBounds: [
        [25.75, -98.6], // Southwest
        [26.6, -97.0]   // Northeast
      ],
      maxBoundsViscosity: 1.0
    })

    // Add OpenStreetMap tiles (free)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map)

    // Define RGV boundary polygon
    const rgvBoundary = [
      [26.5, -98.5],
      [26.5, -97.14],
      [25.85, -97.14],
      [25.85, -98.5],
      [26.5, -98.5]
    ] as L.LatLngTuple[]

    // Add highlighted polygon for RGV area
    L.polygon(rgvBoundary, {
      color: '#f59e0b',
      weight: 2,
      opacity: 0.8,
      fillColor: '#fbbf24',
      fillOpacity: 0.2
    }).addTo(map)

    // Service locations with custom markers
    const locations = [
      { name: 'Brownsville', coords: [25.9017, -97.4975] as L.LatLngTuple },
      { name: 'McAllen', coords: [26.2034, -98.2300] as L.LatLngTuple },
      { name: 'Harlingen', coords: [26.1906, -97.6961] as L.LatLngTuple },
      { name: 'Edinburg', coords: [26.3018, -98.1633] as L.LatLngTuple },
      { name: 'Mission', coords: [26.2159, -98.3253] as L.LatLngTuple }
    ]

    // Add markers for each location
    locations.forEach(location => {
      L.marker(location.coords)
        .addTo(map)
        .bindPopup(`<strong>${location.name}</strong><br>Service Available Here`)
    })

    // Cleanup on unmount
    return () => {
      map.remove()
    }
  }, [])

  return <div id="map" style={{ height: '264px', width: '100%', borderRadius: '8px' }} />
}