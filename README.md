# WEB103 Project 3 - *Hack Map Connect*

Submitted by: **Farnaz Zinnah**

About this web app:
      
    Introducing "Hack Map Connect": The Future of Student Networking and Innovation!

        Ever felt the buzz of curiosity about hackathons near you but didn't know where to start? Enter "Hack Map Connect" – the ultimate platform designed especially for budding Computer Science, Software Engineering, and Cybersecurity enthusiasts. As a student-driven initiative, this platform is more than just an app; it's a bridge that connects young innovators to a world of limitless possibilities!
    
          🎓 For the Students, By the Students: Whether you're an open-source newbie, a hackathon first-timer, or someone eager to explore the expansive tech landscape, "Hack Map Connect" has got you covered!
    
          🔍 Filter & Find: With our comprehensive event page, sort and filter through an array of hackathons, making your search as smooth as a breeze.
    
          💡 Robust Tech Stack: Built on React and backend by PostgreSQL, the project stands as a testament to integrating front-end charm with back-end robustness.

        Why "Hack Map Connect"? 
          In today's fast-paced tech world, knowing isn't enough; it's about networking, collaborating, and innovating. "Hack Map Connect" doesn’t just list events; it fosters a community, nurtures curiosity, and fuels passion.

Time spent: **11** hours

## Required Features

The following **required** functionality is completed:
- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x] **NOTE: Your GIF or a screenshot added to this README must include a view of your Railway database that shows the contents of the table used by your app**
- [x] **The web app displays the title of the app**
- [x] **A visual interface allows the user to select a Location they would like to view**
- [x] **Clicking on a Location shows a list of all items from the Events table that corresponds to that Location**
- [x] **Each Location detail page should have its own unique URL**

The following **optional** features are implemented:

- [x] An additional page shows all possible `Events` that the user can sort and filter by `Location`
- [x] `Events` display a countdown showing the time remaining before that event and appears with different formatting when the event has passed

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/fzinnah17/HackMapConnect/blob/main/Zinnah-Farnaz-HackMapConnect.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with LICEcap

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add:
    
    1. Countdown Timing Issue: One of the initial challenges I faced was ensuring the accuracy of the countdown timer for each event. The timer wasn't reflecting the correct time remaining until the event. Resolving this issue required revisiting the logic and ensuring the correct calculation and display of the remaining time.
    
    2. URL Routing Issues: When navigating to individual location URLs like "http://localhost:5173/location/1", the page rendered blank. I realized the problem stemmed from the absence of specific URLs for each location. Implementing individual routes and ensuring proper data fetching for each location was necessary to solve this issue.
    
    3. Database Connection Closure: During the application setup phase, the `createTables` function was prematurely ending the pool connection to the database using `pool.end()`. This caused unintended disruptions when trying to interact with the database. The solution was to remove the premature pool closure and ensure connections were only ended when necessary.
    
    4. Module Export Issues: I encountered an `Uncaught SyntaxError` pertaining to module exports. Specifically, the error highlighted that there was no default export in '/src/services/LocationsAPI.jsx'. After revisiting the mentioned module, I ensured proper export syntax was in place to fix this.
    
    5. React Router DOM Version Differences: An additional challenge came up with the `react-router-dom` library, specifically in versions 6 and onwards. The newer version introduced the `element` property in place of the previously used `component` property. Adapting to this change meant restructuring how routes were defined and rendered in the app.


## License

Copyright [2023] [Farnaz Zinnah]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
