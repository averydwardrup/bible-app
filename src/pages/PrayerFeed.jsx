import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import SlimHero from "../components/SlimHero";
import Card from "../components/Card";

export default function PrayerFeed() {
  const [prayers, setPrayers] = useState([]);

  const fetchPrayers = async () => {
    await getDocs(collection(db, "PrayerRequests")).then((querySnapshot) => {
      const prayers = querySnapshot.docs.map((doc) => doc.data());
      setPrayers(prayers);
    });
  };
  useEffect(() => {
    if (!prayers) return;
    fetchPrayers();
  }, [prayers]);
  return (
    <div>
      <SlimHero
        title="Prayer Feed"
        subtitle="As Christians our greatest weapon is prayer"
      />
      <section className="container is-max-tablet pt-5 mt-5 pb-5 mb-5 is-clearfix">
        <div className="has-3-cols is-8 is-multiline">
          <div className="prayer-feed-wrapper">
            {prayers.map((prayer) => (
              // <div className="cell mb-5" key={prayer.id}>
              //   <div className="card">
              //     <div className="card-content">
              //       <p>{prayer.Request}</p>
              //     </div>
              //   </div>
              // </div>
              <Card
                key={prayer.id}
                request={prayer.Request}
                name={prayer.FirstName + " " + prayer.LastName}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
