function shout(string){
    return string.toUpperCase();
}

console.log(shout("HELLO"))

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(data){
    switch(data){
        case 'hello':
            return "I can't hear you!";
        case 'HELLO':
            return "YES INDEED!";
        case "Let's have dinner together!":
            return "I would love to!";
        default:
        return 'wrong';
    }
}