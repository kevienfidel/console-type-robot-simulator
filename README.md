This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## How to use:

you can execute a command PLACE with this format:
`[PLACE][space][x-axis][,][y-axis][,][direction]`


example: 
`PLACE 0,0,NORTH`

other command than `PLACE`, just enter either, `MOVE`, `LEFT`, `REPORT` or `RIGHT`

if you want to clear or reset the report, just enter `CLEAR`


## You can use the test the application with the inputs listed below and verify the result with the output section

Example Input and Output  

**Input:**  
`PLACE 0,0,NORTH`  
`MOVE`  
`REPORT`   
 
**Output:**  
`0,1,NORTH`   

----------------  
**Input:**   
`PLACE 0,0,NORTH`   
`LEFT`  
`REPORT`  
 
**Output:**   
`0,0,WEST`  

----------------  
**Input:**   
`PLACE 1,2,EAST`   
`MOVE`  
`MOVE`  
`LEFT`  
`MOVE`  
`REPORT` 
 
**Output:**  
`3,3,NORTH`  

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
