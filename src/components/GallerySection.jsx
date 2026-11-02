import { useEffect, useRef, useState } from "react";
import {

  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "../style/GallerySection.css";

export default function GallerySection({ gallery = [] }) {
  const sliderRef = useRef(null);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // =================================
  // CHECK SLIDER POSITION
  // =================================

  const updateSliderButtons = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const { scrollLeft, scrollWidth, clientWidth } = slider;

    setCanScrollPrev(scrollLeft > 5);

    setCanScrollNext(
      scrollLeft + clientWidth < scrollWidth - 5
    );
  };

  // =================================
  // INITIAL SLIDER CHECK
  // =================================

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    updateSliderButtons();

    slider.addEventListener("scroll", updateSliderButtons);
    window.addEventListener("resize", updateSliderButtons);

    return () => {
      slider.removeEventListener(
        "scroll",
        updateSliderButtons
      );

      window.removeEventListener(
        "resize",
        updateSliderButtons
      );
    };
  }, [gallery]);

  // =================================
  // SLIDER NAVIGATION
  // =================================

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const firstItem = slider.querySelector(".gallery-item");

    if (!firstItem) return;

    const itemWidth = firstItem.offsetWidth;

    const computedStyle = window.getComputedStyle(slider);

    const gap = parseFloat(computedStyle.columnGap || computedStyle.gap) || 0;

    const scrollAmount = itemWidth + gap;

    slider.scrollBy({
      left:
        direction === "next"
          ? scrollAmount
          : -scrollAmount,
      behavior: "smooth",
    });
  };

  // =================================
  // EMPTY STATE
  // =================================

  if (!gallery.length) {
    return null;
  }

  return (
    <section className="gallery-section">
      <div className="gallery-container">

        {/* =================================
            HEADER
        ================================= */}

        <div className="gallery-header">

          <div className="gallery-heading-content">

            <p className="gallery-eyebrow">
              FOLLOW OUR JOURNEY
            </p>

            <h2 className="gallery-title">
              visit Our Gallery
            </h2>

            <p className="gallery-subtitle">
              Inspired by you, always —{" "}
              <span>#Delight  spa</span>
            </p>

          </div>


          {/* =================================
              NAVIGATION
          ================================= */}

          <div className="gallery-navigation">

            <button
              type="button"
              className="gallery-nav-btn gallery-prev"
              onClick={() => scrollSlider("prev")}
              disabled={!canScrollPrev}
              aria-label="Previous gallery image"
            >
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              className="gallery-nav-btn gallery-next"
              onClick={() => scrollSlider("next")}
              disabled={!canScrollNext}
              aria-label="Next gallery image"
            >
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>

          </div>

        </div>


        {/* =================================
            GALLERY SLIDER
        ================================= */}

        <div
          ref={sliderRef}
          className="gallery-slider"
        >

          {gallery.map((item, index) => (
            <article
              className="gallery-item"
              key={item.id || index}
            >

              <div className="gallery-image-wrapper">

                <img
                  src={item.image}
                  alt={item.alt || `Delight Spa gallery ${index + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="gallery-overlay" />

                {/* Instagram Icon */}
                <div className="gallery-instagram">
            
                </div>

                {/* Instagram Username */}
                <div className="gallery-username">

                  <span className="gallery-small-diamond">
                    ◇
                  </span>


                </div>

              </div>

            </article>
          ))}

        </div>


        {/* =================================
            BOTTOM LINE
        ================================= */}

        <div className="gallery-bottom-line">

          <span>Delight Spa</span>

          <div />

          <span>
            WELLNESS / MOMENTS / MEMORIES
          </span>

        </div>

      </div>
    </section>
  );
}