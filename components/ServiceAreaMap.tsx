'use client'

import { useState, useCallback, useMemo } from 'react'
import { GoogleMap, LoadScript, Polygon, Marker, InfoWindow } from '@react-google-maps/api'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa'

// RGV area polygon coordinates (simplified boundary)
const rgvBoundary = [
  { lat: 26.5, lng: -98.5 },  // Northwest
  { lat: 26.5, lng: -97.14 }, // Northeast  
  { lat: 25.85, lng: -97.14 }, // Southeast
  { lat: 25.85, lng: -98.5 },  // Southwest
  { lat: 26.5, lng: -98.5 },   // Close polygon
]

// Service locations
const serviceLocations = [
  { 
    id: 1, 
    name: 'Brownsville', 
    position: { lat: 25.9017, lng: -97.4975 },
    info: 'Serving all of Brownsville and surrounding areas'
  },
  { 
    id: 2, 
    name: 'McAllen', 
    position: { lat: 26.2034, lng: -98.2300 },
    info: 'Central RGV coverage from our McAllen team'
  },
  { 
    id: 3, 
    name: 'Harlingen', 
    position: { lat: 26.1906, lng: -97.6961 },
    info: 'Quick response times in Harlingen area'
  },
  { 
    id: 4, 
    name: 'Edinburg', 
    position: { lat: 26.3018, lng: -98.1633 },
    info: 'Professional service in Edinburg'
  },
  { 
    id: 5, 
    name: 'Mission', 
    position: { lat: 26.2159, lng: -98.3253 },
    info: 'Complete coverage in Mission'
  }
]

const mapContainerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '16px'
}

// Center on RGV
const center = {
  lat: 26.1747,
  lng: -97.8211
}

// Map options to lock the view
const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  restriction: {
    latLngBounds: {
      north: 26.6,
      south: 25.75,
      west: -98.6,
      east: -97.0
    },
    strictBounds: true
  },
  minZoom: 9,
  maxZoom: 15,
  styles: [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [{ color: '#f5f5f5' }, { lightness: 20 }]
    }
  ]
}

export default function ServiceAreaMap() {
  const [selectedLocation, setSelectedLocation] = useState<typeof serviceLocations[0] | null>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  const polygonOptions = {
    fillColor: '#fbbf24',
    fillOpacity: 0.15,
    strokeColor: '#f59e0b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1
  }

  // Only render if API key is provided
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  
  if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
    return (
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Map Coming Soon</h3>
            <p className="text-gray-600">
              Interactive service area map will be available once deployed.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              We proudly serve: Brownsville, McAllen, Harlingen, Edinburg, Mission, and all surrounding RGV areas
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Service Area
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly serving the entire Rio Grande Valley with professional fence installation and repair services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={10}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                  options={mapOptions}
                >
                  {/* RGV Area Highlight */}
                  <Polygon
                    paths={rgvBoundary}
                    options={polygonOptions}
                  />

                  {/* Service Location Markers */}
                  {serviceLocations.map((location) => (
                    <Marker
                      key={location.id}
                      position={location.position}
                      onClick={() => setSelectedLocation(location)}
                      icon={{
                        url: '/images/map-marker.png',
                        scaledSize: new google.maps.Size(40, 40)
                      }}
                    />
                  ))}

                  {/* Info Window */}
                  {selectedLocation && (
                    <InfoWindow
                      position={selectedLocation.position}
                      onCloseClick={() => setSelectedLocation(null)}
                    >
                      <div className="p-2">
                        <h3 className="font-bold text-lg">{selectedLocation.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{selectedLocation.info}</p>
                      </div>
                    </InfoWindow>
                  )}
                </GoogleMap>
              </LoadScript>
            </div>
          </div>

          {/* Service Info */}
          <div className="space-y-6">
            <div className="bg-secondary-50 rounded-xl p-6">
              <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">
                Coverage Areas
              </h3>
              <ul className="space-y-3">
                {serviceLocations.map((location) => (
                  <li key={location.id} className="flex items-start gap-2">
                    <FaMapMarkerAlt className="text-secondary-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">{location.name}</span>
                      <p className="text-sm text-gray-600">{location.info}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <FaClock className="text-yellow-600 text-xl" />
                <h4 className="font-bold text-gray-800">Response Times</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Same-day estimates available</li>
                <li>• 24-48 hour installation scheduling</li>
                <li>• Emergency repairs within 2-4 hours</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <FaPhone className="text-green-600 text-xl" />
                <h4 className="font-bold text-gray-800">Call for Service</h4>
              </div>
              <a href="tel:+1-956-854-0899" className="text-2xl font-bold text-secondary-600 hover:text-secondary-700">
                +1 (956) 854-0899
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Free estimates • Licensed & Insured
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4 text-center">
            Why Choose Local RGV Contractors?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">15+ Years</div>
              <div className="text-gray-700">Serving the Valley</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">1000+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">100%</div>
              <div className="text-gray-700">Local & Licensed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}