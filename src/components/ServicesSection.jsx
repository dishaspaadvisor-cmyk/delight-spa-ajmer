import { Phone, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  services as defaultServices,
  contactData as defaultContactData,
} from "../data/siteData";

import "../style/ServicesSection.css";

export default function ServicesSection({
  services = defaultServices,
  contactData = defaultContactData,
}) {
  const handleWhatsApp = (service) => {
    const message = `Hello Delight Spa, I am interested in booking ${service.title}. Please share more details.`;

    const whatsappUrl = `https://wa.me/${
      contactData.whatsapp
    }?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="services-section">
      <div className="services-container">

        {/* =================================================
            SECTION INTRO
        ================================================= */}

        <div className="services-heading">

          <div className="services-symbol">
            <span>✦</span>
          </div>

          <p className="services-eyebrow">
            THE Delight Spa EXPERIENCE
          </p>

          <h2 className="services-main-title">
            Our services 
            <br />
         
          </h2>

          <p className="services-intro-text">
            Discover thoughtfully designed treatments created to
            help you slow down, restore your energy, and reconnect
            with yourself.
          </p>

        </div>


        {/* =================================================
            SERVICES GRID
        ================================================= */}

        <div className="services-grid">

          {services.map((service, index) => (
            <article
              key={service.id}
              className="service-card"
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="service-image-wrapper">

                <img
                  src={service.image}
                  alt={`${service.title} at Delight Spa`}
                  className="service-image"
                  loading={index < 3 ? "eager" : "lazy"}
                />

                <div className="service-image-overlay" />

                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="service-category">
                  {service.category}
                </span>

                <div className="service-image-badge">
                  Delight Spa
                </div>

              </div>


              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="service-content">

                <div className="service-title-row">

                  <h3 className="service-title">
                    {service.title}
                  </h3>

                  <span className="service-arrow">
                    <ArrowUpRight size={21} />
                  </span>

                </div>

                {/* =================================================
                    SERVICE META
                ================================================= */}

                <div className="service-meta">

                  <span className="service-meta-line" />

                  <span>
                    {service.duration || "Relax & Rejuvenate"}
                  </span>

                </div>


                {/* =================================================
                    ACTION BUTTONS
                ================================================= */}

                <div className="service-actions">

                  <a
                    href={`tel:${contactData.phone}`}
                    className="service-call-btn"
                    aria-label={`Call Delight Spa for ${service.title}`}
                  >
                    <Phone size={16} />

                    <span>
                      CALL NOW
                    </span>
                  </a>


                  <button
                    type="button"
                    onClick={() => handleWhatsApp(service)}
                    className="service-whatsapp-btn"
                    aria-label={`WhatsApp Delight Spa for ${service.title}`}
                  >
                    <FaWhatsapp size={18} />

                    <span>
                      WHATSAPP
                    </span>
                  </button>

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* =================================================
            BOTTOM LINE
        ================================================= */}

        <div className="services-bottom-line">

          <span>
            Delight Spa
          </span>

          <div />

          <span>
            RELAX / RESTORE / RECONNECT
          </span>

        </div>

      </div>
    </section>
  );
}