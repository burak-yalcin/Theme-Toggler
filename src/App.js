import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";
import LIBRARY_DB from "./data/LIBRARY_DB";

export default function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />

      <div className="container">
        <div className="row mt-5 justify-content-center text-center">
          {LIBRARY_DB.map(item => (
            <Card
              title={item.title}
              content={item.content}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
