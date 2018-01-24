# BuildNG
## Pre-interview Technical Challenge 
### **Repository push access will close after 11:59pm Jan 28**

Thank you for applying for our pilot software engineer development program! This challenge will be the focus of the technical conversation we'll have during your interview. It consists of two parts:

* [A development challenge](#the-challenge)
* [A few technical questions](#technical-questions)

Please clone this repo on your machine and make a branch named **{yourname}-pilot-interview** containing:

1. Your application code
2. An APP_README.md file detailing the key architectural and UX decisions you made (including language(s), frameworks, and paradigms you utilized/implemented and why) as well as instructions for running and using the app. 
 
You'll be walking us through your code and running app during the technical part of your interview, so this will help you prepare. It's encouraged to start fleshing this out prior to even coding––we care first and foremost about your thoughtful approach, then clean and clear code, then a working app, then a fine looking UI.

## The Challenge

Zomato has a [public API](https://developers.zomato.com/api#headline1) that you can use to get restaurant information, including restaurant details, reviews, and menu information.

As an example, [https://developers.zomato.com/api/v2.1/cuisines?city_id=280](https://developers.zomato.com/api/v2.1/cuisines?city_id=280) returns a list of all cuisines that can be found in New York City restaurants.

The API requires you authenticate using a `user_key` which you can instantly [generate for free](https://developers.zomato.com/api#headline2).

The task is to create an application that presents the data from at least two endpoints. For example, an app that lists all sushi restaurants in New York City (using the `/search` [endpoint](https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&cuisines=177&sort=cost&order=asc)), and upon clicking on a restaurant takes you to a detail page that includes its info and reviews (using the `/reviews` endpoint). 

### Platform Choice

You can create the application as either a web application or a mobile application in any of the following languages or platforms

- .NET (Full Framework or Core), PHP, Ruby, Python and/or JavaScript for web applications
- iOS, Android or Windows Mobile for mobile applications

### Task requirements

Feel free to spend as much or as little time on the exercise as you like as long as the following requirements have been met.  

- Please complete the user story below.
- Your code should compile and run in one step.
- Feel free to use whatever frameworks / libraries / packages you like.

#### Extra credit
- include tests
- implement a search/filter for users to narrow down the results your app returns

### User Story

As a **user running the application**  
I can **view a list of restaurants**  
So that **I know which restaurants are currently available**

As a **user running the application**  
I can **view each restaurant listed individually**  
So that **I can view details about the restaurant**

## Technical questions

Please include answers to the following questions in your `APP_README.md` markdown file.

1. How long did you spend on this technical challenge? What would you add to your solution if you had more time?
2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
3. How would you track down a performance issue in production? Have you ever had to do this?
4. How would you improve the Zomato API that you just used?
5. Please describe yourself using JSON.


#### Thanks for your time, we look forward to meeting with you!
- The [BuildNG team](http://github.com/BuildNG)
