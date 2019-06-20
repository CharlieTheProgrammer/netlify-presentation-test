import React, { Component } from "react";
import spaceCat from '../assets/images/space-traveling-cat.gif'

export default class CatDisplay extends Component {
  render() {
    return (
      <div>
        <p class="lead py-3">A simple site with cats because why not?</p>
        <div class="card text-white bg-secondary">
          <img
            class="card-img-top p-1 rounded"
            src={spaceCat}
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title display-4">Space Traveling Cat</h5>
            <p class="card-text lead" />
          </div>
        </div>
      </div>
    );
  }
}
