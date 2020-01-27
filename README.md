# [Milzer coding challenge](https://github.com/simonmilz/challenge) by [CoPe](https://github.com/cope)

## My estimation for the task below is: 1 hour

Read the below description of our coding challenge carefully and put in an estimation in the headline above.

- Fork this repository into your Github-Account
- Install the current dependencies via `yarn` or `npm i`
- Choose any frontend javascript framework you want
- Create a listing of all persons coming from the endpoint `/api/persons`
- List all attributes defined in the phone model (except ID)
- Push your work and create a pull-request into our base repository

## My actual time I spent for implementation was: 1 hour

## RUN
First run `yarn start` in root.

Then go to the `client/` folder and run `yarn start` there.
This should open http://localhost:1338/ in your browser automatically.

#### Problems
I was unable to yarn the root of the challenge.

I had to remove `fomantic-ui`.
```
error fomantic-ui@2.8.3: The engine "node" is incompatible with this module. Expected version ">=10.15.3".
error Found incompatible module
```