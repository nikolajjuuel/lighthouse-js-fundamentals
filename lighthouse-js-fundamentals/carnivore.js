/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

// your code goes here



switch (education) {
    case "no high school diploma":
      salary = 25636;
    case "a high school diploma":
        salary = 35256;
    case "an Associate's degree":
        salary += 41496;
    case "a Bachelor's degree":
        salary = 59124;
    case "a Master's degree":
        salary = 69732;
    case "a Professional degree":
        salary = 89960;
    case "a Doctoral degree":
        salary = 84396;
    default:
        output += `In 2015, a person with ${education} earned an average of $${salary}/year.`;
  }

  switch (tier) {
    case "deck of legends":
      output += "a custom card, ";
    case "collector's deck":
      output += "a signed version of the Exploding Kittens deck, ";
    case "nsfw deck":
      output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
    default:
      output += "one copy of the Exploding Kittens card game.";
  }