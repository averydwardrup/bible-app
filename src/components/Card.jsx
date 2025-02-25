import PropTypes from "prop-types";

Card.propTypes = {
  name: PropTypes.string,
  request: PropTypes.string.isRequired,
};

export default function Card({ name, request }) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-2by1">
            <img
              src="https://bulma.io/assets/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-32x32">
                <img
                  src="https://bulma.io/assets/images/placeholders/96x96.png"
                  alt="Placeholder image"
                  className="is-rounded"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{name}</p>
              {/* <p className="subtitle is-6">@johnsmith</p> */}
            </div>
          </div>
          <div className="content">
            {request}
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </>
  );
}
