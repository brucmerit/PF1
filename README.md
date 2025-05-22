# PF1

My Holiday PH Finder is a simple and helpful travel tool designed to assist all kinds of travellers in planning their trips more effectively.

Whether you are:

- a spontaneous traveller looking for the most happening periods to visit,
- a laid-back explorer trying to avoid peak seasons,
- or a first-time visitor curious about your destination's local culture,

this app offers a one-stop solution to get essential information quickly.

🔖 What’s in Version 1.0?
For our first release, we focused on delivering a unique travel insight often overlooked by other platforms — Public Holidays around the world. These can impact your trip in surprising ways, from closed attractions to lively festivals or increased crowds.

By tapping into data from the Ninja APIs and stunning visuals from Pexels, we bring you a lightweight and easy-to-use app to explore major holidays and images from your chosen destination.

# Test Plans

1. input box
    test case: load the app and inspect the UI.

    expectation:
   - box size is able to display the instructions fully
   - able to enter and display the inputs clearly

2. click button
    test case: load the app and inspect the UI.

    expectation:
   - button size is not out of position when app is loaded
   - instruction is shown clearly within the button
   - click function is able to trigger the script to run

3. search functionality
    test case: input a valid country and see the results

    expectation:
   - correct result is displayed
   - result is displayed in ascending dates
   - images displayed are correct

# Design Rationale

Objective
The main goal of My Holiday PH Finder is to help travellers make better-informed decisions when planning trips. By showing major public holidays in different countries, the app gives users insight into peak travel periods, cultural events, and long weekends—factors that often impact travel experiences but are not commonly highlighted in mainstream travel platforms.

Target Users
- a spontaneous traveller looking for the most happening periods to visit,
- a laid-back explorer trying to avoid peak seasons,
- or a first-time visitor curious about your destination's local culture,

Design Considerations
1. Simplicity & Accessibility
Clean and minimal UI so users can get the information they need without distractions.

Clear placeholder text and instructions for ease of input.

2. Visual Engagement
Integrated the Pexels API to provide relevant, eye-catching photos of each destination.

Images are positioned right below the search bar to grab attention and set the tone of the search results.

Font styling (e.g. Lobster for headers) adds a touch of personality and travel-friendly feel.

3. Meaningful Data
Utilized the API Ninjas Holiday API to retrieve up-to-date and reliable holiday information.

Highlighted holidays that fall on Fridays and Mondays as long weekends to help users spot extended break opportunities.

4. Application of what i had learnt in module 1: Programming Fundermentals
Applying knowledge learnt during my lessons to enhance my mini app

using arrays to sort my search results
 - Public holiday results are sorted by date in ascending order to help with travel planning.

using GET to retreive images from opensource 
The image section automatically refreshes with each new country search to avoid clutter.

Applying For..Loop
 - to enhance the user experience by identifying and highlighting the long weekends to our users.

 Documentation
 - proper housekeeping of project
 - commit and push
 - readme file

# Resources 

This project utilizes a range of tools and libraries to deliver its functionality and user experience. Below are the key resources:

🔗 APIs
API Ninjas - Holidays API
Used to fetch public holiday data for different countries.

Pexels API
Used to retrieve high-quality images related to the destination entered by the user.

🎨 Fonts & Styling
Google Fonts - Lobster
Applied for the project’s main title to give a stylish and fun travel vibe.

🛠️ Tools & Environment
HTML5 / CSS3 / JavaScript (Vanilla)
Core technologies used to build the app.

Visual Studio Code (VS Code)
Code editor used during development.

GitHub
For version control and project hosting.

Web Browser (Chrome / Firefox)
For testing and running the app.

Microsoft teams
For playback of recorded lessons on demos

# Credits
This project wouldn’t be possible without the support and resources provided by the following:

API Ninjas – For the reliable and easy-to-use Holiday API.
Pexels – For providing beautiful, royalty-free images to enhance user experience.
Google Fonts – For the elegant Lobster font used in the project header.
Malcolm Yam - for the lessons and demos to make this assignment happen.