import * as React from "react";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./routes/About";
import Home from "./routes/Home";

/*

NTH - Nice to Have - will fit in if time permits
// Stage 1 - Products
  // Set up the  main screen
  // Collect data from API - done
  // Render data into cards - done
  // Paginate the data - On Hold
  // Showcase items in the card - done
  // Format date, price = done
  // Card display  = done
  // Button to add to cart  = done
  // Button disactivate if no items = done
  // Filter display
  // Change state for when add to cart - To be decided
  // Work out the state management

// Stage 2 - Cart
  // Display cart on the right
  // Check if cart exists ? Check if robot exists ? Check if max robot exists
  // Remove one stock from product, add to cart
  // Increase, decrease for robot, add back to cart
  // Account total, price

// Stage 3 - Other
  // Pagination of products
  // Tidy display of products
  // Nav bar
  // Test
  // Optimise images

*/

function App() {
  return (
    <div className="App">
      <h1>Robot Market</h1>
      {/*Add your code here*/}
      <Router>
      {/*TODO: Add CSS for these*/}

        <div className="App-body">
          <div className="App-menu">
            <ul className="App-link">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <hr />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
