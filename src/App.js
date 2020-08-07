import React, { Component } from "react";
import "./App.css";

// This URL can be combined with an photo id to fetch an photo.
const PHOTO_URL = (photoId) => `https://picsum.photos/id/${photoId}/200/200`;
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";

class App extends Component {
  // 1. Declare a state object that will be used to track an array of photos
  state = {
    photos: [],
  };

  // 2. Declare a life cycle method
  // This life cycle method should:
  //  - will be called after the component is initially

  // - will fetch an array of photos

  // - will add that array of photos to state once received
  componentDidMount() {
    const { photos } = this.state;

    fetch(PHOTO_LIST_URL)
      .then((res) => res.json())
      .then((json) => this.setState({ photos: json }));
  }

  render() {
    const { photos = [] } = this.state;
    {
      console.log(photos);
    }
    return (
      <React.Fragment>
        <header>
        <h1>Photo Wall</h1>

        </header>
        <div className="collage">

          {photos.map((photo) => (
            <>
              <img
                alt={photo.filename}
                key={photo.id}
                src={`https://picsum.photos/id/${photo.id}/200/200`}
              />
            </>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
