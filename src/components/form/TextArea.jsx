import PropTypes from "prop-types";

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  changeHandler: PropTypes.func,
};

export default function TextArea({ label, id, required, changeHandler }) {
  return (
    <>
      <div className="field">
        <label className="label" htmlFor={id}>
          {label}{" "}
          {required === true && <span className="has-text-danger">*</span>}
        </label>
        <div className="control">
          <textarea
            className="textarea is-medium is-primary"
            placeholder={label}
            id={id}
            onChange={changeHandler}
            defaultValue={""}
            {...(required && { required: true })}
          />
        </div>
        <p className="help is-danger is-hidden">{label} is required</p>
      </div>
    </>
  );
}
