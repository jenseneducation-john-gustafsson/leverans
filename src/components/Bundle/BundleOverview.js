/*css*/
import "./bundle.css";

import GetBundleOverView from "./GetBundleOverview"

export default function BundleOverview() {

  // eslint-disable-line react-hooks/exhaustive-deps 

  return (
    <div className="main-fluid">
      <h2>Bundle Of movies</h2>
      <h4>
        Get the best movie bundles deals so that you can enjoy the movie to the
        fullest!
      </h4>
      <h3>Horror</h3>
      <div className="row2">
        <GetBundleOverView start={0} end={4} />
      </div>

      <h3>Action</h3>
      <div className="row2">
        <GetBundleOverView start={4} end={8} />
      </div>

      <h3>Drama</h3>
      <div className="row2">
        <GetBundleOverView start={8} end={12} />
      </div>
      <h3>Animation</h3>
      <div className="row2">
        <GetBundleOverView start={12} end={16} />
      </div>
    </div>
  );
}
