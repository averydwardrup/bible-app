import TextInput from "./form/TextInput";
import TextArea from "./form/TextArea";

// TODO: Add form validation
// TODO: Add form submission
// TODO: Add other form fields as reusable components

function PrayerRequestForm() {
  return (
    <div>
      <form>
        <div className="columns is-2 mt-5">
          <div className="column">
            <TextInput label="First Name" id="firstName" required />
          </div>
          <div className="column">
            <TextInput label="Last Name" id="lastName" required />
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
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>
        <TextArea label="Prayer Request" id="prayerRequest" required />
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />I agree to the{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary is-medium">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PrayerRequestForm;
