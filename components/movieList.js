import React, {Component} from 'react';
import { render } from 'react-dom';

class MovieList extends Component {

    render(){
      const {movies} = this.props

        return(
            <>
            { movies.map((movie) => 
                (
                 <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                   <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
                      <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">{movie.name}</a>
                      </h4>                      
                      <p className="card-text">{movie.description}</p>
                      </div>
                  <div className="card-footer">
                    <small className="text-muted">{movie.rating}</small>
                    </div>
                  </div>
                </div>
                )
              )      
            } 
            

          {/* <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">Item Two</a>
                </h4>
                <h5>$24.99</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>*/}
            </>
        )
    }
}

export {MovieList as default}