//Discord
const Discord = require("v11-discord.js")
const client = new Discord.Client() 

//Kahoot
const Kahoot = require("kahoot.js-updated")

//Prefix
const Prefix = "-"

//Dotenv
require('dotenv').config()

//Noblox
const noblox = require("noblox.js")

//Other packages
const axios = require("axios")
const fs = require("fs")
const readline = require("readline")
const useragent = require("random-useragent")


//Main code
client.on("ready", () => {
    console.log("Ready")
    client.user.setActivity(`${Prefix}help`, {
        type: "IDLE"
    })
})

//Generate user
const doubleCharacter = [true, true, false]
const doubleCharacters = ["x", "a"]
const keywords = []

fs.readFileSync('keywords.txt', 'utf-8').split(/\r?\n/).forEach(function(line) {
    keywords.push(line);
})


const hasNumbers = [true, true, true, false]

const doubleRepeated = [1, 2, 3, 4]

const oppositeDouble = [true, true, false]
const underScoreAfterRepeat = [false, false, false, false, false, false, false, false, false, true]

const endsWithRepeated = [true, true, true, false]
const CapitalDouble = [true, false, false, false]
function generateUsername() {
    //Generate
    var hasDouble = pickRandom(doubleCharacter)
    var doubleCharacterPicked = pickRandom(doubleCharacters)
    var oneLowerOneCap = pickRandom(oppositeDouble)

    var timesRepeated = pickRandom(doubleRepeated)

    var keyword = pickRandom(keywords)
    var endedWithRepeatKeyword = pickRandom(endsWithRepeated)

    var firstCapThenLower = [true, true, false]
    firstCapThenLower = pickRandom(firstCapThenLower)

    var underscore = pickRandom(underScoreAfterRepeat)

    var numbersIncluded = pickRandom(hasNumbers)

    var allUpper = pickRandom(CapitalDouble)

    var username = ""
    if (hasDouble == true) {
        if (oneLowerOneCap == true) {
            if (firstCapThenLower == true) {
                username = username + doubleCharacterPicked.toUpperCase() + doubleCharacterPicked.repeat(timesRepeated - 1)
            } else {
                if (allUpper == true) {
                    username = username + doubleCharacterPicked.toUpperCase() + doubleCharacterPicked.toUpperCase()
                } else {
                    username = username + doubleCharacterPicked + doubleCharacterPicked.toUpperCase()
                }
            }
            if (underscore == true) {
                username = username + "_"
            }
        } else {
            username = username + doubleCharacterPicked.repeat(timesRepeated)
        }
    }
    if (endedWithRepeatKeyword == true) {
        username = username + keyword + keyword.slice(-1)
    } else {
        username = username + keyword
    }
    if (numbersIncluded == true) {
        username = username + Math.floor((Math.random() * 500) + 1);
    }
    return username
}

//V2 Generator
function V2() {
    var Xx = [false, true, true, false, true, true, false, false]
    var XxType = ["FirstCapThenLower", "FirstLowerThenCap", "BothLower", "BothCap"]
    var Underscores = [false, false, true, true, false, true]

    var Numbers = [false, false, true, true, true, false, true, false, true, false, false]
    var MaxNumber = 2000

    var RepeatingFirst = ["x", "j", "t", "y"]
    var StartingWithYT = [false, false, false, false, false, true, false, false, false, false, true, false, false]

    var YTLower = [false, false, true, false, false, true, true]
    var Yt = [false, false, true, false]

    var Keyword = pickRandom(keywords)

    var StartRepeated = [1, 2]

    var AllUppercase = [false, false, true, true, false, false, true]
    var LowercaseKeyword = [false, false, true, true, false, false]

    var EndsKeywordWithDouble = [false, true, false, true, true, false, true, true]

    //Pick all random
    var Xx_ = pickRandom(Xx)
    var Underscores_ = pickRandom(Underscores)

    var Numbers_ = pickRandom(Numbers)
    var StartRepeated_ = pickRandom(StartRepeated)

    var RepeatingLetter = pickRandom(RepeatingFirst)
    var AllUppercase_ = pickRandom(AllUppercase)
    var LowercaseKeyword_ = pickRandom(LowercaseKeyword)

    var XxType_ = pickRandom(XxType)

    var Username = ""
    var EndsKeywordDouble = pickRandom(EndsKeywordWithDouble)

    var StartsWithYT = pickRandom(StartingWithYT)
    var YTLower_ = pickRandom(YTLower)
    var Yt_ = pickRandom(Yt)

    if (StartsWithYT == true) {
        if (YTLower_ == true) {
            Username += "yt"
        } else {
            if (Yt_ == true) {
                Username += "Yt"
            }
        }
    }

    if (Xx_ == true) {
        if (XxType_ == "FirstCapThenLower") {
            Username += RepeatingLetter.toUpperCase() + RepeatingLetter
            if (Underscores_ == true) {
                Username += "_"
            }
        } else {
            if (XxType_ == "FirstLowerThenCap") {
                Username += RepeatingLetter + RepeatingLetter.toUpperCase()
                if (Underscores_ == true) {
                    Username += "_"
                }
            } else {
                if (XxType_ == "BothLower") {
                    Username += RepeatingLetter + RepeatingLetter
                    if (Underscores_ == true) {
                        Username += "_"
                    }
                } else {
                    if (XxType_ == "BothCap") {
                        Username += RepeatingLetter.toUpperCase() + RepeatingLetter.toUpperCase()
                        if (Underscores_ == true) {
                            Username += "_"
                        }
                    }
                }
            }
        }
    }


    if (LowercaseKeyword_ == true) {
        Username += Keyword.toLowerCase()
    } else {
        Username += Keyword
    }

    if (EndsKeywordDouble == true) {
        Username += Keyword.slice(-1)
    }

    if (Numbers_ == true) {
        Username += Math.floor((Math.random() * MaxNumber) + 1)
    }

    if (AllUppercase_ == true) {
        return Username.toUpperCase()
    } else {
        return Username
    }
}


//Shorten function
function shorten(a, b) {
    return a.toLowerCase().substring(b.length).split(" ")
}

//Upper
function shortenA(a, b) {
    return a.substring(b.length).split(" ")
}

//Pick random from array
function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)]
}

//String generator
const Numbers = [0, 1, 2, 3]
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

//Kahoot command
client.on("message", message => {
    if (message.content.startsWith(Prefix)) {
        let args = shorten(message.content, Prefix)
        switch(args[0]) {
            case "kahoot":
            if (args.length == 3) {
                if (args[2] > 5000) {
                    message.channel.send("We are sorry, but the max you can bot is 5000!").catch(err => {})
                } else {
                    message.channel.send("We are currently checking to see if the kahoot code you put is valid.").then(msg => {
                        const Checker = new Kahoot()
                        Checker.join(args[1], generateString(20)).then(() => {
                            Checker.leave()
                            msg.edit("The code is correct, we are now beginning to spam the kahoot").catch(err => {})
                        }).catch(err => {
                            msg.edit("You have provided an incorrect code.").catch(err2 => {})
                        })
                        for (let step = 0; step < args[2]; step ++) {
                            setTimeout(function() {
                                const Bot = new Kahoot()
                                Bot.join(args[1], generateString(20)).then(() => {
                                    Bot.on("QuestionStart", q => {
                                        setTimeout(function() {
                                            q.answer(Numbers[Math.floor(Math.random() * Numbers.length)]).catch(err => {})
                                        }, 100 * step)
                                    })
                                }).catch(err => {})
                            }, 100 * step)
                        }
                    }).catch(err => {})
                }
            } else {
                message.channel.send("Make sure you put the right arguments!\n\nCommand example: " + Prefix + "kahoot GameId Amount\nIf you need any other help, just type " + Prefix + "help").catch(err => {})
            }
        }
    }
})
//Proxy generator
client.on("message", message => {
    if (message.content.startsWith(Prefix)) {
        let args = shorten(message.content, Prefix)
        switch(args[0]) {
            case "proxy":
            axios({
                method: "get",
                url: "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=450&country=all&ssl=all&anonymity=all&simplified=true",
            }).then(res => {
                const str = generateString(4)
                fs.writeFile(message.author.username + ".txt", res.data, function(err) {
                    message.channel.send("Here are your proxies!", {
                        files: [
                            "./" + message.author.username +".txt"
                        ]
                    }).then(() => {
                        fs.unlinkSync(message.author.username + ".txt")
                    })
                })
            })
        }
    }
})

//User-agent generator
client.on("message", message => {
    if (message.content.startsWith(Prefix)) {
        let args = shorten(message.content, Prefix)
        switch(args[0]) {
            case "ua":
            message.channel.send(useragent.getRandom())
        }
    }
})

//Visit website test
client.on("message", message => {
    if (message.content.startsWith(Prefix)) {
        let args = shorten(message.content, Prefix)
        switch(args[0]) {
            case "grabify":
            axios({
                method: "get",
                url: "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all&simplified=true",
            }).then(res => {
                var Amount = res.data.split("\n")
                message.channel.send("Sending " + Amount.length + " to website. (or some)")
                
                for (let step = 0; step < Amount.length; step ++) {
                    setTimeout(function() {
                        axios({
                            method: "get",
                            url: "https://grabify.link/" + args[1],
                            proxy: {
                                host: Amount[step].split(":")[0],
                                port: Amount[step].split(":")[1]
                            },
                            headers: {
                                "user-agent": useragent.getRandom()
                            }
                        }).catch(e => {})
                    }, step * 300)
                }
            })
        }
    }
})



//Proxy generator v2
client.on("message", message => {
    if (message.content.startsWith(Prefix)) {
        let args = shorten(message.content, Prefix)
        switch(args[0]) {
            case "proxyv2":
                var proxiesCombined = ""
            axios({
                method: "get",
                url: "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=450&country=all&ssl=all&anonymity=all&simplified=true",
            }).then(res => {
                proxiesCombined += res.data.replace("\n", "").replace("/r", "") + "\n"
                axios({
                    method: "get",
                    url: "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=500&country=all&ssl=all&anonymity=all&simplified=true",
                }).then(res => {
                    proxiesCombined += res.data.replace("\n", "").replace("/r", "") + "\n"
                    axios({
                        method: "get",
                        url: "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=400&country=all&ssl=all&anonymity=all&simplified=true",
                    }).then(res => {
                        proxiesCombined += res.data.replace("\n", "").replace("/r", "") + "\n"
                        axios({
                            method: "get",
                            url: "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=600&country=all&ssl=all&anonymity=all&simplified=true",
                        }).then(res => {
                            proxiesCombined += res.data.replace("\n", "").replace("/r", "") + "\n"
                            axios({
                                method: "get",
                                url: "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=650&country=all&ssl=all&anonymity=all&simplified=true",
                            }).then(res => {
                                proxiesCombined += res.data.replace("\n", "").replace("/r", "") + "\n"
                            })
                        })
                    })
                })
            })

            setTimeout(function() {
                fs.writeFile(message.author.username + ".txt", proxiesCombined, function(err) {
                    message.channel.send("Here are your proxies!", {
                        files: [
                            "./" + message.author.username +".txt"
                        ]
                    }).then(() => {
                        fs.unlinkSync(message.author.username + ".txt")
                    })
                })
            }, 3000)
        }
    }
})

//Roblox cookie resetter
client.on("message", message => {
    if (message.content.startsWith(Prefix)) {
        let args = shorten(message.content, Prefix)
        switch(args[0]) {
            case "reset":
            if (args.length == 2) {
                message.channel.send("We are currently checking if the cookie is correct.").then(msg => {
                    noblox.setCookie(args[1]).then(() => {
                        var amount = 0
                        msg.edit("Hold on...")
                        noblox.refreshCookie(args[1]).then(e => {
                            msg.edit("We have successfully reset your cookie, your account may have logged out. Here is your new cookie incase you cant log back in.\n\n```" + e + "```")
                        })
                    }).catch(err => {
                        msg.edit("Invalid cookie provided.")
                    })
                }).catch(err => {})
            }
        }
    }
})

//V2
client.on("message", message => {
    if (message.content.startsWith(Prefix)) {
        let args = shorten(message.content, Prefix)
        switch(args[0]) {
            case "name":
            //Generate
            message.channel.send(V2())
        }
    }
})

//Kahoot command (Username random)
client.on("message", message => {
    if (message.content.startsWith(Prefix)) {
        let args = shorten(message.content, Prefix)
        switch(args[0]) {
            case "kahootr":
            if (args.length == 3) {
                if (args[2] > 5000) {
                    message.channel.send("We are sorry, but the max you can bot is 5000!").catch(err => {})
                } else {
                    message.channel.send("We are currently checking to see if the kahoot code you put is valid.").then(msg => {
                        const Checker = new Kahoot()
                        Checker.join(args[1], generateString(20)).then(() => {
                            Checker.leave()
                            msg.edit("The code is correct, we are now beginning to spam the kahoot").catch(err => {})
                        }).catch(err => {
                            msg.edit("You have provided an incorrect code.").catch(err2 => {})
                        })
                        for (let step = 0; step < args[2]; step ++) {
                            setTimeout(function() {
                                const Bot = new Kahoot()
                                Bot.join(args[1], V2()).then(() => {
                                    Bot.on("QuestionStart", q => {
                                        setTimeout(function() {
                                            q.answer(Numbers[Math.floor(Math.random() * Numbers.length)]).catch(err => {})
                                        }, 100 * step)
                                    })
                                }).catch(err => {})
                            }, 100 * step)
                        }
                    }).catch(err => {})
                }
            } else {
                message.channel.send("Make sure you put the right arguments!\n\nCommand example: " + Prefix + "kahoot GameId Amount\nIf you need any other help, just type " + Prefix + "help").catch(err => {})
            }
        }
    }
})

//Username checker
client.on("message", message => {
    if (message.content.startsWith(Prefix)) {
        let args = shortenA(message.content, Prefix)
        switch(args[0]) {
            case "check":
            if (args.length == 2) {
                var Roblox = ""
                var Minecraft = ""
                message.channel.send("Currently checking userrnames for " + args[1] + "\nRoblox: Checking...\nMinecraft: Checking...").then(msg => {
                    noblox.getIdFromUsername(args[1]).then(e => {
                        Roblox = "Taken"
                        msg.edit("Currently checking userrnames for " + args[1] + "\nRoblox: " + Roblox + "\nMinecraft: Checking...")
                    }).catch(err => {
                        Roblox = "Not taken"
                        msg.edit("Currently checking userrnames for " + args[1] + "\nRoblox: " + Roblox + "\nMinecraft: Checking...")
                    })
                    axios({
                        method: "get",
                        url: "https://namemc.com/search?q=" + args[1]
                    }).then(res => {
                        if (res.data.includes('content="Status: Available*') == true) {
                            Minecraft = "Not taken"
                            msg.edit("Currently checking userrnames for " + args[1] + "\nRoblox: " + Roblox + "\nMinecraft: " + Minecraft)
                        } else {
                            if (res.data.includes("<div>Unavailable</div>") == true) {
                                Minecraft = "Taken"
                                msg.edit("Currently checking userrnames for " + args[1] + "\nRoblox: " + Roblox + "\nMinecraft: " + Minecraft)
                            }
                        }
                    })
                })
            } else {
                message.channel.send("Make sure you have correct arguments! " + Prefix + "check USERNAME")
            }
        }
    }
})




//Login
client.login(process.env.TOKEN)
