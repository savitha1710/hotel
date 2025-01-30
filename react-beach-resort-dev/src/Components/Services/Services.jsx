import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Enjoy a refreshing selection of complimentary cocktails crafted by our expert bartenders, perfect for unwinding by the beach.",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Explore breathtaking trails with scenic views, from lush forests to stunning coastal paths, suitable for all adventure levels.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Travel hassle-free with our complimentary shuttle service, providing convenient transportation to nearby attractions and the airport.",
      },
      {
        icon: <FaBeer />,
        title: "storages beer",
        info:
          "Savor a variety of locally brewed craft beers, stored at the perfect temperature to ensure a delightful tasting experience.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
