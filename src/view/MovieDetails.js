import Button from '../components/MovieDetails/Button'
import Trailer from '../components/MovieDetails/Trailer'
import Description from '../components/MovieDetails/Description'
import Image from '../components/MovieDetails/Image'
import Rating from '../components/MovieDetails/Rating'
import Labels from '../components/MovieDetails/Labels'

const MovieDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Movie Details</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <Image />
        </div>
        <div className="col-4">
          <Trailer />
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <Labels />
        </div>
        <div className="col"></div>
        <div className="col-4">
          <Rating />
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <Description />
        </div>
        <div className="col"></div>
        <div className="col-4">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
