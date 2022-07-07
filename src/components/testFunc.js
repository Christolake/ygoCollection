let wiki =
"{Decklist|Anime Deck\n|normal monsters =\n* [[Drillago (anime)|Drillago]] x2\n* [[Gil Garth (anime)|Gil Garth]]\n* [[Juragedo (anime)|Juragedo]]\n* [[Lekunga (anime)|Lekunga]]\n* [[Lord Poison (anime)|Lord Poison]]\n* [[Melchid the Four-Face Beast (anime)|Melchid the Four-Face Beast]]\n|effect monsters =\n* [[Bowganian (anime)|Bowganian]]\n* [[Dark Jeroid (anime)|Dark Jeroid]]\n* [[Helpoemer (anime)|Helpoemer]]\n* [[Holding Arms (anime)|Holding Arms]]\n* [[Holding Legs (anime)|Holding Legs]]\n* [[Lava Golem (anime)|Lava Golem]]\n* [[Legendary Fiend (anime)|Legendary Fiend]]\n* [[Makyura the Destructor (anime)|Makyura the Destructor]]\n* [[Masked Beast Des Gardius (anime)|Masked Beast Des Gardius]]\n* [[Newdoria (anime)|Newdoria]]\n* [[Plasma Eel]] x3\n* [[Revival Jam (anime)|Revival Jam]]\n* [[Sacred Stone of Ujat]]\n* [[Swallowtail Spike Lizard]]\n* [[The Winged Dragon of Ra (anime)|The Winged Dragon of Ra]]<ref group=Notes name=ra>He lost this card to [[Yami Yugi]] during [[Yu-Gi-Oh! - Episode 142|episode 142]].</ref>\n* [[Vampiric Leech]]\n|fusion monsters =\n* [[Immortal Egyptian God Slime]]\n|magic =\n* [[Bait Doll (anime)|Bait Doll]]<ref group=Notes name=hand>This card can be seen in his hand during [[Yu-Gi-Oh! - Episode 139|episode 139]] after he activates \"[[Zombie's Jewel]]\" to return \"[[Monster Reborn (anime)|Monster Reborn]]\" to his hand.</ref>\n* [[Black Pendant (anime)|Black Pendant]]\n* [[Card of Sanctity (anime)|Card of Sanctity]]\n* [[Class System]]\n* [[Dark Spell Regeneration (anime)|Dark Spell Regeneration]]\n* [[Dark Wall of Wind]]\n* [[Jam Breeding Machine (anime)|Jam Breeding Machine]]\n* [[Machine Duplication (anime)|Machine Duplication]]\n* [[Mining for Magical Stones (anime)|Mining for Magical Stones]]\n* [[Monster Reborn (anime)|Monster Reborn]]\n* [[Polymerization (anime)|Polymerization]]\n* [[Pot of Greed (anime)|Pot of Greed]]\n* [[Premature Burial (anime)|Premature Burial]]\n* [[Remove Trap (anime)|Remove Trap]]\n* [[Spell of Pain (anime)|Spell of Pain]]\n* [[Surprise Attack from Beyond]]\n* [[The Mask of Remnants (anime)|The Mask of Remnants]]\n* [[Tribute Burial (anime)|Tribute Burial]]\n* [[Vengeful Bog Spirit (anime)|Vengeful Bog Spirit]]\n|traps =\n* [[Card of Last Will (anime)|Card of Last Will]]\n* [[Coffin Seller (anime)|Coffin Seller]]\n* [[Hidden Soldiers (anime)|Hidden Soldiers]]\n* [[Jam Defender (anime)|Jam Defender]]\n* [[Joyful Doom]]\n* [[Left Arm Offering (anime)|Left Arm Offering]]\n* [[Malevolent Catastrophe (anime)|Malevolent Catastrophe]]\n* [[Metal Reflect Slime (anime)|Metal Reflect Slime]]\n* [[Mirror Force (anime)|Mirror Force]]\n* [[Nightmare Mirror]]\n* [[Nightmare Wheel (season 2)|Nightmare Wheel]] (later played [[Nightmare Wheel (season 3)|with a different effect]]).\n* [[Relieve Monster (anime)|Relieve Monster]]\n* [[Rope of Life (anime)|Rope of Life]]\n* [[Zombie's Jewel]]\n}}\n\n==Manga==\n{{Decklist|Manga Deck\n|normal monsters =\n* [[Drillago (manga)|Drillago]]\n* [[Gil Garth (manga)|Gil Garth]]\n* [[Juragedo (manga)|Juragedo]]\n* [[Rekunga (manga)|Rekunga]]\n* [[Lord Poison (manga)|Lord Poison]]\n|effect monsters =\n* [[Bowganian (manga)|Bowganian]]\n* [[Dark Jeroid (manga)|Dark Jeroid]]\n* [[Granadora (manga)|Granadora]]\n* [[Helpoemer (manga)|Helpoemer]]\n* [[Lava Golem (manga)|Lava Golem]]\n* [[Legend Devil (manga)|Legend Devil]]\n* [[Makyura the Destructor (manga)|Makyura the Destructor]]\n* [[Newdoria (manga)|Newdoria]]\n* [[Revival Jam (manga)|Revival Jam]]\n* [[The Winged Dragon of Ra (manga)|The Winged Dragon of Ra]]\n* [[Vampiric Leech (manga)|Vampiric Leech]]\n* [[Viser Des (manga)|Viser Des]] x3\n* [[Viser Shock (manga)|Viser Shock]]\n|fusion monsters =\n* [[Immortal God Slime (manga)|Immortal God Slime]]\n|spells =\n* [[Card of Sanctity (manga)|Card of Sanctity]]\n* [[Dark Wall of Wind (manga)|Dark Wall of Wind]]\n* [[Left Arm Offering (manga)|Left Arm Offering]]\n* [[Machine Duplication (manga)|Machine Duplication]]\n* [[Magical Stone Excavation (manga)|Magical Stone Excavation]]\n* [[Monster Reborn (manga)|Monster Reborn]]\n* [[Polymerization (manga)|Polymerization]]\n* [[Remove Trap (manga)|Remove Trap]]\n* [[Spell of Pain (manga)|Spell of Pain]]\n* [[Surprise Attack from Beyond]]\n|traps =\n* [[Card of Last Will (manga)|Card of Last Will]]\n* [[Coffin Seller (manga)|Coffin Seller]]\n* [[Hidden Soldiers (manga)|Hidden Soldiers]]\n* [[Jam Defender (manga)|Jam Defender]]\n* [[Malevolent Catastrophe (manga)|Malevolent Catastrophe]]\n* [[Metal Reflect Slime (manga)|Metal Reflect Slime]]\n* [[Mirror Force (manga)|Mirror Force]]\n* [[Nightmare Mirror (manga)|Nightmare Mirror]]\n* [[Nightmare Wheel (manga)|Nightmare Wheel]]\n* [[Monster Relief (manga)|Monster Relief]]\n* [[Revival of the Dark]]\n* [[Rope of Life (manga)|Rope of Life]]\n* [[Zombie's Jewel (manga)|Zombie's Jewel]]\n}";
let input = 'Yami Marik'
const decklistRegex = /(?<=Decklist\|)[^\}]*/gi;  //*Busca los decklist = Anime y su contenido. Manga y su contenido.
const deckNameRegex = /(?<=Decklist\|)([^\n])*/gi; //*Retorna solo el nombre del Decklist. Anime Deck. Manga Deck.
const deckRegex = /(?<=\*\s\[\[)([^\]]*)/gi;  //*Busca cada carta en el decklist. [[Nombre de Carta (anime)|Nombre de Carta]]
const copyRegex = /([^\n]+)(?=\sx\d)/gi;
const qtyRegex = /(?<=\]\]\sx)(\d)/gi;

let decks = {
    duelist: input
}

const camelCase = s => s
.replace( /(?<!\p{L})\p{L}|\s+/gu,
           m => +m === 0 ? "" : m.toUpperCase() )
.replace( /^./, 
          m => m?.toLowerCase() );

let deckGenerator = () => {
    let copyQty = wiki.match(qtyRegex);
    let copy = wiki.match(copyRegex);

    let copiedCards = () => {
            copyQty.map((qty, index) => {
                for(let i=1; i<qty; i++) {
                wiki = wiki.slice(0, wiki.indexOf(copy[index]))+copy[index]+'\n'+wiki.slice(wiki.indexOf(copy[index]))
                }
            })
        }
    
    copiedCards();
    let decklists = wiki.match(decklistRegex);
    let tempNames = wiki.match(deckNameRegex);
    let deckNames = tempNames.map(e => camelCase(e))
    deckNames.map((e, index) => {
        let tempAr = decklists[index].match(deckRegex);
        decks[e] = tempAr.map(e => e.slice(e.indexOf('|')+1))
        }
    )
    console.log(decks)
}

deckGenerator()
