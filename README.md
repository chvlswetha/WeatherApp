**Assignment Details**

Developed a web application that interacts with the OpenWeather API  to display weather information. 

**Requirements**

1) GitHub Repository

  > Create a public GitHub repository for your project.
   ---------Here is the GitHub link for the Weather Application project. https://github.com/chvlswetha/WeatherApp

 > Include a comprehensive README.md file with clear instructions on how to set up and run the application locally.
  ---------README included
 > Ensure all your commits have meaningful messages.
 ---------I completed the project with Visual studio IDE in my local machine and committed to git and made the final version of the repository public.

2) User Interface.
 > Design a simple and intuitive UI.
 --------I designed a single page application with a simple user interface, based on Html and CSS stylesheets. I added a Weather image background to the page and attributed the image source within the app.

> Implement a search functionality where users can input a city name to retrieve weather data.
---------The App takes a city name as the input and retrieves the weather data for the current date.
The App calls OpenWeather map Api for the current day temperature and renders it with the help of java script code. Additionally, the App displays the Hourly forecast in 3-hour intervals for the current day.

> Include a date range filter that allows users to view weather information for specific dates (historical data).
--------------The application passes the city name context to fetch the Historical weather data for that city. The app has two date pickers to allow for a date range filter – ‘From Date’ and ‘To Date’.
Since the OpenWeather API charges for Historical data, I called Visual Crossing API for History data which allows to query for the past days though it has a daily usage limit.

> Display the weather data in a user-friendly format (e.g., temperature, humidity, wind speed).
------------The Temperature, Humidity and Windspeed are displayed for a given city for both the current day and the past days that are queried for.

3) Functionality
   
> Use the OpenWeather API to fetch weather data based on user input.
 --------I used the OpenWeather API. Based on the city name and the API Key, the API fetches the Json response and the underlying code displays the data on the App.

> Handle API responses and errors gracefully.
 --------I added basic error handling for both the city name and the date range filters for the historical weather. The error handling for city name includes a check for empty/blank city name. For Date range, I added error handling – 1) ‘From’ date should be earlier than ‘To’ date. 2) ‘From’ Date and ‘To’ date range should be within one week for easy readability.

>Ensure the application is responsive and works across different devices and screen sizes.
---------Yes, the app is responsive and works across different devices as JavaScript frameworks are compatible with Windows, Android, and iOS devices.

3) Technical Specifications
> You may use any programming language and frameworks/libraries you are comfortable with.
---------I used the front-end tech stack of HTML,CSS and Javascript for designing the application. 

> Manage API keys securely (do not hard-code them into your source files).
----------For a quick turnaround, I had to hardcode the API keys in JS script file. But I am checking on the possibilities for handling the API keys securely.

> Follow best practices for code structure and organization.
------------I used meaningful, intuitive and consistent names for variables, functions, and classes aimed at easing readability.
------------I broke down large code sections into smaller, reusable modules or classes.
------------The code is version controlled as I added it to GitHub. 

4) Documentation
> The README should include:
> Introduction to the project.
---------- Developed a web application that interacts with the OpenWeather API to display current weather information and Visual crossing Weather api to get Historical Weather information.
-----------When tried OpenWeather ApI for Historical It asked me to purchase subscription, so I used alternative visual crossing Api which provide historical API for given city and date range.
> Technologies used.
------------Used HTML,CSS and Javascript to input city and date ranges, call API and renders API Json response to display on the HTML page.

> Step-by-step instructions to set up and run the application locally.
------------Fetch the repository from GitHub link provided and just open index.html page from the source.
-------------It asks for city input and displays the current data.
-------------For Historical data in that city, the app asks for From and To dates.
-------------Displayed only Historical data and thrown error if the date ranges falls in future.
-------------Displays only 7-day data on the application for easy readability.

> Any prerequisites or dependencies.
-----------Since these are plain front end code file, no need to download any software to run the code.

>Instructions on how to obtain and configure the API key.
>-------------Please sign up for OpenWeather and Visual Crossing to obtain API Keys and place them in the script file in the below places.
           https://home.openweathermap.org/users/sign_up

         Api Key from this to be copied here in the js code

        function getWeather() {
             const apiKey = 'Your-API-Key';

        For Historical data
           https://www.visualcrossing.com/sign-up

            Api Key from this to be copied here in the js code
           function getHistory() {
             const hiskey = 'Your-API-Key';



**Optional Enhancements (These are not mandatory but will be considered favorably)**
-------Since this is time sensitive submission, I submitted the project without the optional enhancements. 
--------However, I am working to expand for the below ones and the timelines to do so is given against each requirement. 
---------I can revert with all but caching mechanism in the next 2-3 days.

1) Allow users to switch between different units of measurement (e.g., Celsius and Fahrenheit).
    ----- Easily expandable - can revert in 2 days
2) Implement caching mechanisms to reduce API calls and improve performance.
    ---------- Not sure how to achieve in the current source code. Need to research further. May be if done in my current Tech stack with ASP.Net
3) Add support for multiple languages/localization.
  ----- Easily expandable - can revert in 2 days
4) Include weather forecasts for upcoming days.
  ----- Easily expandable - can revert in 2 days

