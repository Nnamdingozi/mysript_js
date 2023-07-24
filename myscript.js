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