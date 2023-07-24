let months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",];

let zodiacSign = ["Cancer", "Gemini", "Taurus", "Aries", "Pisces", "Aquarius", "Capricorn",
        "Sagritarius", "Sagittarius", "Scopius", "Libra", "Virgo", "Leo",];

let advice = ["take a walk at the beach", "express your thoughts to others", "be active and flexible",
        "take a break from your usual emotional intensity",
        "get your heart rate up and pumping", "engage in teram sports"];
const getRandNum = (arr) => {
        return Math.floor(Math.random() * arr.length)
}
console.log(getRandNum(months));
function getMonth(arr1) {
        return arr1[getRandNum(arr1)]
        
      };
      function getzodaicSign(arr2) {
        return arr2[getRandNum(arr2)]
        
      };
      function getMessage(arr3) {
        return arr3[getRandNum(arr3)]
      };
      function acsiiArt() {
        return ` 
                  -   -
                - 0   0 -
                  -   -           
                    - `
      }      
      function mixedMessage(arr1, arr2, arr3) {
        let myMonth = getMonth(arr1);
        let myZodiacSign = getzodaicSign(arr2);
        let myAdvice = getMessage(arr3);
        let myascii = acsiiArt();
        console.log(`Hi,your palm says: You love the month of ${myMonth}. You will make great friends with ${myZodiacSign}.You should ${myAdvice}. ${myascii}`)
      }
      mixedMessage(months, zodiacSign, advice)