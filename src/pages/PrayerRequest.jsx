import PrayerRequestForm from "../components/PrayerRequestForm";

export default function PrayerRequest() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="py-5 container">
          <p className="title">Submit a Prayer Request</p>
          <p className="subtitle">
            As Christians our greatest weapon is prayer
          </p>
        </div>
      </section>
      <section className="container is-max-desktop pt-5 mt-5 pb-5 mb-5 is-clearfix">
        <h2 className="title is-3 is-left mt-5">Prayer submission form</h2>
        <p className="mb-2">
          Prayer is powerful and essential, not just for yourself but for
          others. The Bible urges us in{" "}
          <strong>
            James 5:16,{" "}
            <em>
              "Confess your faults one to another, and pray one for another,
              that ye may be healed. The effectual fervent prayer of a righteous
              man availeth much."
            </em>{" "}
          </strong>
          When you pray for others, you can bring healing and blessings into
          their lives.
        </p>
        <p>
          <strong>
            Don’t hesitate—pray for those around you with faith, love, and
            compassion, trusting that God’s power will move.
          </strong>
        </p>
      </section>
      <section className="container is-max-desktop mt-5 pb-5mb-5 is-clearfix">
        <PrayerRequestForm />
      </section>
    </div>
  );
}
