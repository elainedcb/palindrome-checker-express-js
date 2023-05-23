import { checkIfPalindrome } from "../../components/checkIfPalindrome";

describe("Component - Check If Palindrome test", () => {
  const cases = [
    { text: "dooernedeevrvn", expected: 1 },
    { text: "aabcba", expected: 0 },
    { text: "kayak", expected: 1 },
    { text: "yakya", expected: 1 },
    { text: "neveroddoreven", expected: 1 },
  ];

  test.each(cases)(
    "component - should test if $text will return if palindrome",
    ({ text, expected }) => {
      const answer = checkIfPalindrome(text);
      expect(answer).toEqual(expected);
    }
  );
});
