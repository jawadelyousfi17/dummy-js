const Dummy = require('./dummy')


// test 
function testAll() {
    console.log('paragraph : ', Dummy.paragraph())
    console.log('sentence : ', Dummy.sentence())
    console.log('sentence + ponctuation : ', Dummy.stringWithPonctuation())
    console.log('word : ', Dummy.word())
    console.log('object : ', Dummy.object())
    console.log('subject : ', Dummy.subject())
    console.log('verb : ', Dummy.verb())
    console.log('city : ', Dummy.city())
    console.log('country : ', Dummy.country())
    console.log('first name : ', Dummy.firstName())
    console.log('nick name : ', Dummy.nickName())
    console.log('full name : ', Dummy.fullName())
    console.log('product : ', Dummy.productName())
    console.log('email : ', Dummy.email())
    console.log('phone number : ', Dummy.phoneNumber())
    console.log('date : ', Dummy.date());
    console.log('id : ', Dummy.uniqueId());
}

function emails(numberOfemails) {
    const emails = []
    for (let index = 0; index < numberOfemails; index++) {
        emails.push(Dummy.email())
    }
    console.log(emails)
}
function testFunction(DummyFunction , repeatetion) {
    const result = []
    for (let index = 0; index < repeatetion; index++) {
        result.push(DummyFunction())
    }
    console.log(result)
}

testFunction(Dummy.date,5)
testAll()