const wordList = [
    {
        word: "abberation",
        definition: "A departure from what is normal, unexpected",
        example:"The Fed will probably need convincing that the latest labour-market report was an aberrationbefore tightening policy."
    },
    {
        word: "Abreast",
        definition: "Up to date with the latest news, information",
        example:"These daily updates were designed to help readers keep abreast of the markets..."
    },
    {
        word: "Agog",
        definition: "Very eager or curious to hear something",
        example:"We are now agog to know when, on the basis of its forecasts, the Bank will push up interest rates..."
    },
    {
        word: "amenable",
        definition: "Easily persuaded",
        example:"Parents who have had easy babies and amenable children"
    },
    {
        word: "Arbiter",
        definition: "A person who settles a dispute or has authority in the matter",
        example:"The viewer is, ultimately, the arbiter of influence: either partaking in the objectification, or actively challenging the power dynamic"
    },
    {
        word: "Austere",
        definition: "Having an extremely plain or simple style",
        example:"Not all Western airports have austere arrival concourses à la Heathrow; many have eateries and bars..."
    },
    {
        word: "Blight",
        definition: "A thing that spoils or damages something",
        example:"Yet the USFS predicts that within a couple of decades, because of slowing growth and climate-related blights, the forests will become an emissions source"
    },
    {
        word: "Blithe",
        definition: "Showing a casual and cheerful indifference considered to be callous or improper.",
        example:"Mr. Cameron’s government was too posh, too cocky, too blithe about globalization’s merits, too metropolitan. Too Notting Hill."
    },
    {
        word: "Burlesque",
        definition: "A variety show, skit, farce",
        example:"Madame JoJo’s, a burlesque bar in London’s Soho, had its license revoked in 2014 after two bouncers brandished a baseball bat at a rowdy crowd"
    },
    {
        word: "Confound",
        definition: "Prove a theory wrong",
        example:"Yet in another sense, the Fed has confounded predictions—at least, those it made itself"
    },
    {
        word: "Deign",
        definition: "Do something that one considers to be beneath one's dignity",
        example:"If the Senate deigns to consider and confirm a nominee, do not expect changes overnight."
    },
    {
        word: "Doff",
        definition: "To remove an item of clothing",
        example:"To don shoes, to doff shoes."
    },
    {
        word: "Ephemeral",
        definition: "Lasting for a very short time",
        example:"One was Song Dong, just 19 and styding oil painting which he quickly abandoned. Now he is known for his performances and his ephemeral-sometimes edible-installations."
    },
    {
        word: "Deign",
        definition: "Do something that one considers to be beneath one's dignity",
        example:"If the Senate deigns to consider and confirm a nominee, do not expect changes overnight."
    },
    {
        word: "Fallow",
        definition: "Dormant, quiet, slack",
        example:"Their fickle attention might waver for a few fallow years of rebuilding, but Angel Stadium will still be standing."
    },
    {
        word: "Fringe",
        definition: "The unconventional, extreme, or marginal wing of a group of sphere of activity.",
        example:"Fring beliefs reinforced in these ways can establish themselves and persist long after outsiders deem them debunked."
    },
    {
        word: "Garner",
        definition: "Gather or collect, accumulate, amass",
        example:"Labs that garnered more pay-offs were more likely to pass on their methods to other, newer labs."
    },
    {
        word: "Gossamer",
        definition: "Used to refer to something very light, thin, and insubstantial or delicate. Gauzy, Fine, gossamery",
        example:"Like a saintly relic, the gossamer threads that tie the two halves offer promise."
    },
    {
        word: "Harangue",
        definition: "A lengthy and aggressive speech, rant",
        example:"They broadcasted harsh criticisms, including an absurd harangue over Starbuck's prices."
    },
    {
        word: "Impetuous",
        definition: "Acting or done quickly and without thought or care, impuslive, rash, hasty.",
        example:"The report holds many lessons, including for this newspaper, which supported the invasion of Iraq: about the danger of impetuous decision-making."
    },
    {
        word: "Lurid",
        definition: "Presented in vividly shocking or sensational terms, exaggerated",
        example:"Their absence from the public eye, especially in a Western country with an abuundant supply of good hospitals, tends to spark lurid rumours of illness and even death."
    },
    {
        word: "Mar",
        definition: "Impair the quality or appearance of, spoil",
        example:"These oversights mar an otherwise engaging and interesting account, but perhaps it is natual that a history of space should have a few gaping holes."
    },
    {
        word: "Mince",
        definition: "Use polite or moderate expressions to indicate disapproval.",
        example: "Obama didn't mince his words in tweets."
    },
    {
        word: "Mirth",
        definition: "Amusement, especially as expressed in laughter, high spirits",
        example: "A further proposal, to cut the salaries of senior public managers by 25%, has caused both anger and mirth."
    },
    {
        word: "Oblique",
        definition:"Not explicit or direct in addressing a point, indirect",
        example: "Fire as Sea' has been praised for offering an oblique, poetic alternative."
    },
    {
        word: "Reticence",
        definition:"The quality of not revealing one's thoughts or feelings readily, reserve",
        example: "Mr. Harding is more comfortable with facts;with classic English reticence, he buries his family's responses in footnotes and summaries."
    },
    {
        word: "Ruminate",
        definition:"Think deeply about something",
        example: "The thinker would worry that the first world would become a society of old people ruminating about ideas."
    },
    {
        word: "Vapid",
        definition:"Offering nothing that is stimulating or challenging; bland",
        example: "Mr. Silver delighted in savagining commentators who relied on vapid cliches."
    },
    {
        word: "Abasement",
        definition:"Action or fact of abasing, humilation or degradation",
        example: "But of course, Europe needs more than humility or self-abasement if it is to absorb the migrants."
    },
    {
        word: "Acumen",
        definition:"The ability to make good judgements and quick decisions, typically in a particular domain; awareness",
        example: "Literary critics admire his summer reading selections, musicians his playlists, scientists and tech entrepreneurs his acumen and curiosity."
    },
    {
        word: "Bucolic",
        definition:"Relating to the pleasant aspects of the countryside and country life, rural",
        example: "General Electric...is now swapping its bucolic site for a collection of warehouses on the Boston waterfront."
    },
    {
        word: "Canonical",
        definition:"Belonging to the ltierary or artistic canon, established",
        example: "The medium now mostly consists of recycling the same canonical works by men from centuries past."
    },
    {
        word: "Capricious",
        definition:"Given to sudden and unaccountable changes of mood or behavior, inconstant",
        example: "But there is a body of academic work that supports the idea that elections often misfire. For one thing, voters can be capricious."
    },
    {
        word: "Chauvinism",
        definition:"Excessive or prejudiced oyalty or supports for one's own cause, group or gender.",
        example: "Germany found that xenophobia, chauvinism, andti-Semitism and authoritarian longings were declining."
    },
    {
        word: "Demur",
        definition:"Raise doubts or obejections or show reluctance",
        example: "Mr. Sasse demurs. He does not want less fighting between the left and right."
    },
    {
        word: "Diatribe",
        definition:"Forceful and bitter verbal attack against someone or something.",
        example: "CNN and other outlets were wrong to turn one disgruntled passenger's Facebook diatribe into headline news."
    },
    

    
    
]
console.log(wordList)

let word = document.getElementById("word");
let definition = document.getElementById("definition");
let example = document.getElementById("example");
let hidden = document.getElementById("hidden");

function changeWord(){
    let ranNum = Math.floor(Math.random() * wordList.length);
    // let previous = ranNum;
    word.innerHTML = wordList[ranNum].word;
    definition.innerHTML = wordList[ranNum].definition;
    example.innerHTML = wordList[ranNum].example;
    hidden.style.visibility = "hidden"
    
}

function clearWord(){
    word.innerHTML = "Word"
    definition.innerHTML = "Definition"
}

function showDef(){
    if(hidden.style.visibility == "hidden"){
        hidden.style.visibility = "visible"
    }
    else {
        hidden.style.visibility = "hidden"
    }
}

