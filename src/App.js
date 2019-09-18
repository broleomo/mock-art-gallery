import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="form__heading">This is Antreo's Sister's Cool Art Gallery</h1>
        <form action="https://docs.google.com/forms/d/e/1FAIpQLSfA1sgQSFHpCWcXK6NMw0wS_oLOGqQeCFw3TaKp4xcgvtuGvQ/formResponse" target="_self" method="POST">
        <div className="form__container">
        <label className="form__label">What is art?</label>
          <input className="form__input" name="entry.668016936">
          </input>
          <button className="form__submit-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
