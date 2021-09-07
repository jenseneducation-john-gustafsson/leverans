import Button from '../src/components/MovieDetails/Button'
import Trailer from '../src/components/MovieDetails/Trailer'
import Description from '../src/components/MovieDetails/Description'
import Image from '../src/components/MovieDetails/Image'

const MovieDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Movie Details</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Image />
        </div>
        <div className="col-4">
          <Trailer />
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <Description />
        </div>
        <div className="col">

        </div>
        <div className="col-4">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
