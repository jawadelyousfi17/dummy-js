

const englishData = require('./data/english.json')
const geolocationData = require('./data/geolocation.json')
const globalData = require('./data/global.json')
const shoppingData = require('./data/shopingData.json')

const emailProviders = [
    { name: "Gmail", domain: "gmail.com" },
    { name: "Outlook", domain: "outlook.com" },
    { name: "Yahoo Mail", domain: "yahoo.com" },
    { name: "iCloud Mail", domain: "icloud.com" },
    { name: "AOL Mail", domain: "aol.com" },
    { name: "ProtonMail", domain: "protonmail.com" },
    { name: "Zoho Mail", domain: "zoho.com" },
    { name: "GMX Mail", domain: "gmx.com" },
    { name: "Yandex.Mail", domain: "yandex.com" },
    { name: "Mail.com", domain: "mail.com" }
]
const emailSpecialChars = [
    '-',
    '_',
    '.',
    '',
    '',
    ''
]
const alphanumericChars = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
];


// const imagesData = require('./data/images-path/general.json')
// const productsImagesData = require('./data/images-path/products.json')
function getRandomItemFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


/**
 * A utility class for generating dummy data.
 * @author JAWAD EL YOUSFI jawadproqe@gmail.com
 */
class Dummy {
        /**
     * Generates random sentences.
     * @param {number} numberOfSentences - The number of sentences to generate. Defaults to 1 if not provided.
     * @returns {string} A string containing the generated sentences.
     * @example
     * // Returns a single random sentence
     * const singleSentence = Dummy.sentence();
     * console.log(singleSentence);
     * 
     * // Returns three random sentences
     * const multipleSentences = Dummy.sentence(3);
     * console.log(multipleSentences);
     */
    static sentence(numberOfSentences = 1) {
        let dummyString = ''
        for (let index = 0; index < numberOfSentences; index++) {
            dummyString += getRandomNumber(0, 10) > 2 ? getRandomItemFromArray(englishData.commonSubjects).toLowerCase() + ' ' : getRandomItemFromArray(globalData.names) + ' '
            dummyString += getRandomNumber(0, 10) > 4 ? getRandomItemFromArray(englishData.commonEnglishVerbs) + ' ' : getRandomItemFromArray(englishData.commonEnglishWords) + ' '
            dummyString += getRandomItemFromArray(englishData.commonEnglishObjects) + ' '
            dummyString += getRandomItemFromArray(englishData.commonEnglishWords) + ' '
            dummyString += getRandomNumber(0, 10) > 8 ? getRandomItemFromArray(englishData.commonEnglishWords) : getRandomItemFromArray(englishData.commonEnglishObjects)
            dummyString += ''
        }
        return dummyString
    }
    /**
     * Generate random sentences with ponctuation
     * @param {number} stringLength 
     * @returns {string}
     */
    static stringWithPonctuation(stringLength = 1) {
        let dummyString = ''
        let ponctuationMark = ''
        for (let index = 0; index < stringLength; index++) {
            dummyString += getRandomNumber(0, 10) > 2 ? getRandomItemFromArray(englishData.commonSubjects).toLowerCase() + ' ' : getRandomItemFromArray(globalData.names) + ' '
            dummyString += getRandomNumber(0, 10) > 4 ? getRandomItemFromArray(englishData.commonEnglishVerbs) + ' ' : getRandomItemFromArray(englishData.commonEnglishWords) + ' '
            dummyString += getRandomItemFromArray(englishData.commonEnglishObjects) + ' '
            dummyString += getRandomItemFromArray(englishData.commonEnglishWords) + ' '
            dummyString += getRandomNumber(0, 10) > 8 ? getRandomItemFromArray(englishData.commonEnglishWords) : getRandomItemFromArray(englishData.commonEnglishObjects)
            if (index != stringLength - 1) {
                dummyString += `${getRandomItemFromArray(englishData.commonPunctuation)} `
            }

        }
        return dummyString
    }

        /**
     * Generates random paragraphs.
     * @param {number} paragraphLength - The number of paragraphs to generate. Defaults to 1 if not provided.
     * @returns {string} A string containing the generated paragraphs.
     * @example
     * // Returns a single random paragraph
     * const singleParagraph = Dummy.paragraph();
     * console.log(singleParagraph);
     * 
     * // Returns three random paragraphs
     * const multipleParagraphs = Dummy.paragraph(3);
     * console.log(multipleParagraphs);
     */
    static paragraph(paragraphLength = 1) {
        let dummyParagraph = ''
        for (let index = 0; index < paragraphLength; index++) {
            dummyParagraph += capitalizeFirstLetter(this.stringWithPonctuation(getRandomNumber(10, 20)))
            dummyParagraph += `.\n`
        }
        return dummyParagraph
    }
    static word = () => {
        const randomNumber = getRandomNumber(0, 7)
        if (randomNumber === 0) return getRandomItemFromArray(globalData.names)
        if (randomNumber === 1) return getRandomItemFromArray(englishData.commonAdjectives)
        if (randomNumber === 2) return getRandomItemFromArray(englishData.commonEnglishObjects)
        if (randomNumber === 3) return getRandomItemFromArray(englishData.commonSubjects)
        if (randomNumber === 4) return getRandomItemFromArray(englishData.commonEnglishWords)
        if (randomNumber === 5) return getRandomItemFromArray(geolocationData.countries)
        if (randomNumber === 6) return getRandomItemFromArray(geolocationData.cities)
        if (randomNumber === 7) return getRandomItemFromArray(shoppingData.productNames)
    }
    static subject = () =>
        getRandomItemFromArray(englishData.commonSubjects)
    static verb = () =>
        getRandomItemFromArray(englishData.commonEnglishVerbs)
     /**
     * Generates a random first name.
     * @returns {string} A random first name.
     * @example
     * const firstName = Dummy.firstName()
     */
    static firstName = () =>
        getRandomItemFromArray(globalData.names)
        /**
     * Generates a random nick name.
     * @returns {string} A random nick name.
     * @example
     * const firstName = Dummy.nickName()
     */
    static nickName = () =>
        getRandomItemFromArray(globalData.nickNames)
        /**
     * Generates a random full name.
     * @returns {string} A random full name.
     * @example
     * const firstName = Dummy.fullName()
     */
    static fullName = () =>
        ` ${getRandomItemFromArray(globalData.names)} ${getRandomItemFromArray(globalData.nickNames)}`
    static object = () =>
        getRandomItemFromArray(englishData.commonEnglishObjects)
    static productName = () => getRandomItemFromArray(shoppingData.productNames)
    /**
     * Generates a random country.
     * @returns {string} A random country
     * @example
     * const firstName = Dummy.country()
     */
    static country = () => getRandomItemFromArray(geolocationData.countries)
    /**
     * Generates a random city.
     * @returns {string} A random city.
     * @example
     * const firstName = Dummy.city()
     */
    static city = () => getRandomItemFromArray(geolocationData.cities)
    // static image = () => `dummy/images/general/${getRandomItemFromArray(imagesData.images)}`
    // static productsImage = () => `dummy/images/products/${getRandomItemFromArray(productsImagesData.images)}`

        /**
     * Generates a random number within the specified range.
     * @param {object} options - Options for generating the random number.
     * @param {number} [options.start=0] - The start of the range. Defaults to 0 if not provided.
     * @param {number} [options.end=10] - The end of the range. Defaults to 10 if not provided.
     * @returns {number} A random number within the specified range.
     * @example
     * // Returns a random number between 0 and 10 (inclusive)
     * const randomNumber1 = Dummy.number();
     * console.log(randomNumber1);
     * 
     * // Returns a random number between 5 and 15 (inclusive)
     * const randomNumber2 = Dummy.number({ start: 5, end: 15 });
     * console.log(randomNumber2);
     */
    static number = ({start = 0, end = 10} = {}) => getRandomNumber(start, end)
    /**
   * Generates a random email address. like jawad_elyousi02\@gmail.com 
   * @returns {string} A random email address 
   * @example
   * const randomEmail = Dummy.email()
   * console.log(randomEmail)
   * 
   */
    static email = () => {
        return `${this.firstName().toLowerCase()}${getRandomItemFromArray(emailSpecialChars)}${this.nickName().toLowerCase()}${this.number(0, 199)}@${getRandomItemFromArray(emailProviders).domain}`
    }
    static phoneNumber = () => {
        const countryCode = "+1"; // Assuming US country code
        const areaCode = Math.floor(Math.random() * (999 - 200 + 1)) + 200; // Generating a random 3-digit area code between 200 and 999
        const firstPart = Math.floor(Math.random() * 1000); // Generating a random 3-digit number
        const secondPart = Math.floor(Math.random() * 10000); // Generating a random 4-digit number
        // Formatting the phone number
        const phoneNumber = `${countryCode} (${areaCode}) ${String(firstPart).padStart(3, '0')}-${String(secondPart).padStart(4, '0')}`;
        return phoneNumber;
    }


    /**
     * Generates a random date within the specified range.
     * @param {object} options - Options for generating the random date.
     * @param {string} options.startDate - The start date of the range in "YYYY-MM-DD" format. Defaults to '1900-01-01' if not provided.
     * @param {string} options.endDate - The end date of the range in "YYYY-MM-DD" format. Defaults to '2050-12-31' if not provided.
     * @returns {Date} A random date within the specified range.
     * @example
     * // Returns a random date between January 1, 1900 and December 31, 2050
     * const randomDate1 = Dummy.date();
     * console.log(randomDate1);
     * 
     * // Returns a random date between January 1, 2000 and December 31, 2010
     * const randomDate2 = Dummy.date({ startDate: '2000-01-01', endDate: '2010-12-31' });
     * console.log(randomDate2);
     */
    
    static date = ({ startDate = '1900-01-01', endDate = '2050-12-31' } = {}) => {
        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime();
        const randomTime = start + Math.random() * (end - start);
        return new Date(randomTime);
    }

        /**
     * Generates a unique identifier consisting of random alphanumeric characters.
     * @param {number} idLength - The length of the unique identifier. default 8 
     * @returns {string} A string containing random alphanumeric characters.
     * @example
     * // Returns a unique identifier with a default length of 8 characters
     * const id1 = Dummy.uniqueId();
     * console.log(id1);
     * 
     * // Returns a unique identifier with a length of 12 characters
     * const id2 = Dummy.uniqueId(12);
     * console.log(id2);
     */
    static uniqueId(idLength = 8) {
        if (idLength <= 0) throw new Error('must be 1+')
        let uid = ''
        for (let index = 0; index < idLength; index++) {
            uid += getRandomItemFromArray(alphanumericChars)
        }
        return uid
    }

}



module.exports = Dummy