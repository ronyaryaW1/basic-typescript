let myName: string = 'Rony Arya Wijaya';
let age: number = 21;
let isDead: boolean = false;
// array 
let girlFriend: string[];
girlFriend = ['wulan', 'aprianingsih']
let idSosmed: number[];
idSosmed = [1101, 10900]

// tupple array 
let myMistress: [string, number, boolean];
myMistress = ['ga ada', 10920, true]

// custom type object
type FriendType = {
    name: string;
    debt: number;
    isMan: boolean
}

let myFriend: FriendType;

myFriend = {
    name: 'udin',
    debt: 750_000,
    isMan: true
}

// union type => type baru yang dideklare berisi type lainnya
type name = string;
type userName = number;

type idUser = name | userName;

let myIdGame: idUser;
myIdGame='bangwijay'
myIdGame=109202



console.log({myName})
console.log({age})
console.log({isDead})
console.log({girlFriend})
console.log({idSosmed})
console.log({myMistress})
console.log({myMistress})
console.log({myFriend})
console.log({myIdGame})