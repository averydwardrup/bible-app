import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import TextInput from "./form/TextInput";
import TextArea from "./form/TextArea";

// TODO: Add form validation
// TODO: Add form submission
// TODO: Add other form fields as reusable components

function PrayerRequestForm() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  const [Request, setRequest] = useState("");

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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="columns is-2 mt-5">
          <div className="column">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Text input"
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
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Text input"
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
              className="textarea"
              placeholder="Textarea"
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
    </div>
  );
}

export default PrayerRequestForm;
