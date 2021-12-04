import * as React from "react";

import Header from "./components/Header"
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
  // Filter display = done
  // Change state for when add to cart = done
  // Work out the state management = done

// Stage 2 - Cart
  // Display cart on the right = done
  // Check if cart exists ? Check if robot exists ? Check if max robot exists = done
  // Remove one stock from product, add to cart = done
  // Increase, decrease for robot, add back to cart = done
  // Account total, price = done

// Stage 3 - Other
  // Pagination of products = Nice to have
  // Tidy display of products = done
  // Header = done
  // Test
  // Optimise images

*/

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{padding: `10px 0 0 30px`, display: `flex`,  flexDirection: `row`}}>
      <h3>
        Buy Your Favourite Robot
      </h3>
      
      <h5 style={{padding: `8px`, color: `red`}}>
        While Stocks last!
      </h5>
      </div>

      <Home />
      {/* <Router>

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
      </Router> */}
    </div>
  );
}

export default App;
