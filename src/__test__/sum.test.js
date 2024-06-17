import sum from "../components/sum"

test('sum should return sum of 2 params', () => { 
  let resp = sum(3,4);
  expect(resp).toBe(7); // Assertion

  resp = sum(3,2);
  expect(resp).toBe(5);
 })