import MuseumCard from "../../components/Museum/MuseumCard";
import TicketingButton from "../../components/TicketingButton/TicketingButton";
import "../HomePage/HomePage.css";
import { Link } from "react-router-dom";
import CardCollection from "../../components/Card/CardCollection";
import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [happenings, setHappenings] = useState([]);
  const [exhibitions, setExhibitions] = useState([]);

  useEffect(() => {
    const fetchHappenings = async () => {
      try {
        const response = await fetch('/exhibition/search?status=current');
        const data = await response.json();
        setHappenings(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHappenings();
  }, []);

  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        const response = await fetch('/exhibition');
        const data = await response.json();
        setExhibitions(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExhibitions();
  }, []);

  return (
    <div className="page-container">
      <div className="section-container">
        <MuseumCard />
        <TicketingButton />
      </div>

      <div className="section-container">
        <h2>Happening Now</h2>
        <CardCollection data ={happenings} />
        <Link to="/itinerary">
          <button>ITINERARY PLANNER</button>
        </Link>
      </div>

      <div className="section-container">
        <h2>Exhibitions</h2>
        <CardCollection data ={exhibitions} />
        <Link to="/map">
          <button>MUSEUM MAP</button>
        </Link>
      </div>
    </div>
  );
}
