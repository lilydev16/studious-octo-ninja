/*
"I love you, a little , a lot, passionately ... not at all" is a 8kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/

--------------------------------------------------------------
Description:

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, 
saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"

If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal 
for a flower of a given number of petals. The number of petals is always greater than 0.

--------------------------------------------------------------
*/

// ---------- Solution A ----------
function howMuchILoveYou(petals) {
  const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ];
  return phrases[(petals - 1) % 6];
}

// ---------- Solution B ----------
function howMuchILoveYou(petals) {
  let phrases = {
    0: 'I love you',
    1: 'a little',
    2: 'a lot',
    3: 'passionately',
    4: 'madly',
    5: 'not at all',
  };

  return phrases[(petals - 1) % 6];
}
