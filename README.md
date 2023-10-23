# Sprint3 Learnyounode

## Level 1

This level can be tested with the learnyounode package (Everything of interest about said package and the installing steps can be found here: github.com/workshopper/learnyounode). Once being inside the respective folder for every exercise (For example: Sprint3\hello-world\level-1) execute the code "learnyounode verify hello-world" and learnyounode should verify that specific exercise and give a pass score. 

## Level 2

For this specific level you must follow an specific set of steps that will vary depending on the exercise your gonna execute, this will be write exactly as they must be follow and will go in the same order as the learnyounode tutorial suggest, the names of every exercise have been change to avoid confusion and ensure a more fast pacing while checking them. To check the funtionality of every excercise you must open the terminal iside the respective folder "(For example: Sprint3\hello-world\level-2) before following the steps bellow.".

1. **Hello World:** To execute in terminal you must simply write in the terminal "node app.js".

2. **Baby Steps:** You must execute the app in node but adding at least two more more arguments in the form of numbers to perform an addition.
  - "node app.js 20 20" should return 40.

3. **My First I/O:** Execute the app in node and pass an extra argument with the path of the text that is inside the same folder.
  - "node app.js ../../text-sample.txt" should return "30".

4. **My First Async I/O:** Execute the app in node and pass an extra argument with the path of the text that is inside the same folder.
  - "node app.js ../../text-sample.txt" should return "30".

5. **Filtered LS:** Execute the app in node and pass two extra arguments, the path and the file extention, the same folder will be enough.
  - "node app.js ./ js" should return the only file that it is inside the folder aka app.js.

6. **Make It Modular:** Execute the app in node and pass two extra arguments, the path and the file extention, the same folder will be enough.
  - "node app.js ./ js" should return the only file that it is inside the folder aka app.js and module.js.

7. **HTTP Client:** First execute the server.js file with node, this should iniate the server and pass back an url "http://127.0.0.1:8080/". Now you can (in another terminal) open the client.js with node passing that url as the second argument, this should return a plain text string, remember to close the server or kill the terminal once you've finished.

8. **HTTP Client:** First execute the server.js file with node, this should iniate the server and pass back an url "http://127.0.0.1:8080/". Now you can (in another terminal) open the client.js with node passing that url as the second argument, this should return first a number that is the number of characters in a string, and then the string itself, remember to close the server or kill the terminal once you've finished.

9. **Juggling Async:** First excute every server in node, every server should return an url that you'll pass IN ORDER as arguments when executing the client.js file.
  - "node client.js http://127.0.0.1:6060/ http://127.0.0.1:5050/ http://127.0.0.1:4040/" should return three different strings, if they are in order the first should have 4 lines, the second 2 and the last one 3.

10. **Time Server:** First execute the server.js file, this will return a port number, next you must execute the client.js file with node passing as an extra argument the port number, this should return the current data and hour in a specific "YYYY-MM-DD hh:mm" format.

11. **HTTP File Server:** Execute the server.js file with an extra agument, a file path for a file that is "../../text-sample.txt", this should return a port number, now go into local host in your browser with the port you gave as an argument
  - In "localhost:8000" you should see the contents of the file in the browser.

12. **HTTP uppercaserer:** Execute the server.js file in node, this should return a port number, next execute the client.js file in node passing as an extra argument the port number the server returned to you. This should return a json object in all caps.

13. **HTTP Json Api Server:** Execute the server.js file in node with a port number extra argument, "8080", this should return two already made url's, copy and paste them in your browser.
  - _parse/time:_ The JSON response should contain only 'hour', 'minute' and 'second' properties.
  - _/api/unixtime:_ returns UNIX epoch time in milliseconds (the number of  milliseconds since 1 Jan 1970 00:00:00 UTC)

## Level 3

This level uses jest to test every exercise, it also contains typescript. Jest is added as a dev dependency so it should only need a npm install inside the project to be able to perform the test. All the tests have pass in my pc but one specific test have not been pass inside the github actions, specifically the **HTTP Json Api Server** test.
