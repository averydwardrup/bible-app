import PropTypes from "prop-types";

TextInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

/**
 * A TextInput component that renders a labeled input field.
 *
 * Props:
 *   - type (string): The type attribute for the input element (e.g., "text", "password", "email", etc.) defaults to "text".
 *   - label (string): The text to display as the label for the input field.
 *   - id (string): The id attribute for the input element, also used to associate the label with the input.
 *
 * Usage:
 * This component is used to create a text input form field with an associated label.
 */

// TODO: Make required help text only show when required is true
export default function TextInput({ type = "text", label, id, required }) {
  return (
    <>
      <div className="field">
        <label className="label" htmlFor={id}>
          {label}{" "}
          {required === true && <span className="has-text-danger">*</span>}
        </label>
        <div className="control">
          <input
            className="input is-medium is-primary"
            type={type}
            placeholder={label}
            id={id}
            {...(required && { required: true })}
          />
        </div>
        <p className="help is-danger is-hidden">{label} is required</p>
      </div>
    </>
  );
}
