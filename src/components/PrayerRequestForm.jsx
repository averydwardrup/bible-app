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
        <TextArea label="Prayer Request" id="prayerRequest" required />
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
