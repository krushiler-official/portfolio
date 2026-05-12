import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

// Fix for default marker icon in Leaflet + React
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
});

const LocationMap = () => {
    const position = [23.0338, 72.4633]; // Bopal, Ahmedabad

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-glow rounded-3xl overflow-hidden grid lg:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-heading font-bold text-text-light mb-6 flex items-center gap-3">
                                <MapPin className="text-primary" /> Where I'm <span className="text-gradient">Located</span>
                            </h2>
                            <p className="text-text-dim text-lg mb-8 leading-relaxed">
                                Based in the vibrant technology hub of Ahmedabad, Gujarat. Always open to global opportunities and collaborations in innovative tech projects.
                            </p>
                            <div className="space-y-4">
                                <div className="glass-elevated p-4 rounded-xl border-l-2 border-primary">
                                    <p className="text-xs font-mono text-primary tracking-widest uppercase">Location</p>
                                    <p className="text-text-light font-semibold font-heading text-sm">Bopal, Ahmedabad, Gujarat, India</p>
                                </div>
                                <p className="text-text-dim italic text-sm mt-4">
                                    "Currently based in Bopal,Ahmedabad, Gujarat."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="h-100 lg:h-auto min-h-100 relative z-0">
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full">
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    Krushil Prajapati is based here! <br /> Bopal, Ahmedabad.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;
