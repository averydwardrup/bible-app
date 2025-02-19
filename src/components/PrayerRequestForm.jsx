import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import TextInput from "./form/TextInput";
import TextArea from "./form/TextArea";

// TODO: Add form validation
// TODO: Add form submission
// TODO: Add other form fields as reusable components

export default function PrayerRequestForm() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  const [Request, setRequest] = useState("");
  const [isSumitted, setIsSubmitted] = useState(false);

  /**
   * Handles the form submission event.
   * Prevents the default form submission behavior and constructs
   * a data object containing the prayer request details.
   * Attempts to add the data to the "PrayerRequests" collection
   * in the database. Alerts the user upon successful submission
   * or logs an error if the submission fails.
   *
   * @param {Event} event - The form submission event.
   */

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      FirstName: FirstName,
      LastName: LastName,
      Request: Request,
    };
    try {
      const docRef = await addDoc(collection(db, "PrayerRequests"), data);
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
      setIsSubmitted(false);
    }
  };

  const prayerForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="columns is-2 mt-5">
          <div className="column">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input is-medium is-primary"
                  type="text"
                  placeholder="Your Name"
                  id="firstName"
                  onInput={(event) => setFirstName(event.target.value)}
                />
              </div>
            </div>
            {/* <TextInput
              label="First Name"
              id="firstName"
              onInput={(event) => setFirstName(event.target.value)}
              required
            /> */}
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input
                  className="input is-medium is-primary"
                  type="text"
                  placeholder="Your Last Name"
                  id="lastName"
                  onInput={(event) => setLastName(event.target.value)}
                />
              </div>
            </div>
            {/* <TextInput
              label="Last Name"
              id="lastName"
              onInput={(event) => setLastName(event.target.value)}
              required
            /> */}
          </div>
        </div>
        <div className="columns is-2 mt-5">
          <div className="column">
            <TextInput
              type="email"
              label="Your Email"
              id="yourEmail"
              required
            />
          </div>
          <div className="column">
            <TextInput type="tel" label="Phone Number" id="phoneNumber" />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea is-medium is-primary"
              placeholder="Your Prayer Request"
              id="prayerRequest"
              onInput={(event) => setRequest(event.target.value)}
            ></textarea>
          </div>
        </div>
        {/* <TextArea
          label="Prayer Request"
          id="prayerRequest"
          onInput={(event) => setRequest(event.target.value)}
          required
        /> */}
        <div className="field is-grouped mt-5 mb-5">
          <div className="control">
            <button className="button is-primary is-medium">
              Submit A Prayer Request
            </button>
          </div>
        </div>
      </form>
    );
  };

  const viewFeed = () => {
    history.push("/prayer-feed");
  };

  const successMessage = () => {
    return (
      <div className="has-background-dark rounded shadowed p-5 mb-5">
        <h3>Thank you for submitting a prayer request.</h3>
        <div className="is-flex is-align-items-center is-justify-content-center">
          <div className="px-2">
            <button className="button is-primary is-medium" onClick={viewFeed}>
              View Prayer Feed
            </button>
          </div>
          <div className="px-2">
            <button
              className="button is-primary is-medium"
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Prayer Request
            </button>
          </div>
        </div>
      </div>
    );
  };
  return <div>{isSumitted ? successMessage() : prayerForm()}</div>;
}
