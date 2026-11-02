import { ArrowUpRight, Check } from "lucide-react";
import "../style/AboutSection.css";

export default function AboutSection({ about }) {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-heading">
          <div className="about-heading-top">
            <span className="about-eyebrow">
              {about.eyebrow}
            </span>

       
          </div>

        </div>

        <div className="about-main-grid">
          <div className="about-image-area">
            <div className="about-image-wrapper">
              <img
                src="/images/hero/28.png"
                alt={about.imageAlt}
                className="about-image"
              />
            </div>

            <div className="about-image-caption">
              <span className="about-caption-line" />
              <span>A SPACE MADE FOR YOU</span>
            </div>
          </div>

          <div className="about-content">
            <span className="about-side-label">
              {about.sideLabel}
            </span>

            <h3 className="about-side-title">
              {about.sideTitle}
            </h3>

            <p className="about-description">
              {about.description}
            </p>

            <p className="about-side-description">
              {about.sideDescription}
            </p>

            <div className="about-features">
              <div className="about-feature">
                <span className="about-feature-icon">
                  <Check size={14} />
                </span>
                <span>Calm and welcoming environment</span>
              </div>

              <div className="about-feature">
                <span className="about-feature-icon">
                  <Check size={14} />
                </span>
                <span>Thoughtfully selected treatments</span>
              </div>

              <div className="about-feature">
                <span className="about-feature-icon">
                  <Check size={14} />
                </span>
                <span>Care focused on your comfort</span>
              </div>
            </div>

            <a
              href={about.buttonLink}
              className="about-button"
            >
              <span>{about.buttonText}</span>
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="about-bottom-line">
          <span>Delight Spa</span>
          <div />
          <span>RELAX / RESTORE / RENEW</span>
        </div>
      </div>
    </section>
  );
}