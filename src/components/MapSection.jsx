import { MapPin } from "lucide-react";
import { contactData } from "../data/siteData";
import "../style/MapSection.css";

const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.9899644785687!2d74.62685547608415!3d26.48826797820094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be72206e2cffd%3A0xf7664c2732b04f12!2sDELIGHT%20SPA%20AJMER!5e0!3m2!1sen!2sin!4v1790234415396!5m2!1sen!2sin";

export default function MapSection() {
  return (
    <section className="map-section">
      <div className="map-container">
        <div className="map-header">
          <div>
            <span className="map-eyebrow">FIND YOUR WAY TO US</span>

            <h2>
              Visit <em>Delight Spa</em>
            </h2>
          </div>
        </div>

        <div className="map-frame-wrapper">
          <iframe
            title="Delight Spa Ajmer Location"
            src={googleMapsEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />

          <div className="map-location-card">
            <span className="map-location-icon">
              <MapPin size={19} />
            </span>

            <div>
              <strong>Delight Spa Ajmer</strong>
              <p>{contactData.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}