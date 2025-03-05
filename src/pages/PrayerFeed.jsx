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
      <section className="container pt-5 mt-5 pb-5 mb-5 is-clearfix">
        <div className="is-max-tablet has-2-cols is-8 is-multiline">
          <div className="prayer-feed-wrapper  columns">
            <div className="cell profile mb-5 column is-one-third">
              <figure className="image px-5">
                <img
                  src="https://bulma.io/assets/images/placeholders/480x480.png"
                  alt="Placeholder image"
                  className="is-rounded"
                />
              </figure>
              Welcome, Avery
            </div>
            <div className="feed column">
              {prayers.map((prayer) => (
                <Card
                  key={prayer.id}
                  request={prayer.Request}
                  name={prayer.FirstName + " " + prayer.LastName}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
