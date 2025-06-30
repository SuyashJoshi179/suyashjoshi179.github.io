import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Image from "next/image";

const VerticalCarousel = ({ data = [], dir, dur }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 115;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = useCallback((direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }

      return prevIndex - 1;
    });
  }, [data.length]);

  useEffect(() => {
    const timeout = setTimeout(() => {
        handleClick(dir);
        const loop = setInterval(() => handleClick(dir), 4000);
        return () => clearInterval(loop);
    }, dur);
  
    return () => {
      clearTimeout(timeout);
    }
  }, [dir, dur, handleClick])

  return (
    <div className="container">
      <section className="outer-container">
        <div className="carousel-wrapper">
          <div className="carousel">
            <div className="slides">
              <div className="carousel-inner">
                {data.map((item, i) => (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={cn("carousel-item", {
                      active: activeIndex === i,
                      visible:
                        Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                    })}
                    key={item.name}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`,
                      borderColor: item.color
                    }}
                  >
                    <Image src={item.url} alt={item.name} width={100} height={70} loading="eager" />
                    <div style={{ fontSize: "0.9rem", color: item.color }}>{item.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

VerticalCarousel.defaultProps = {
  data: []
};

export default VerticalCarousel;
