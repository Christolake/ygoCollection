import React, { useState, useEffect } from "react";

// Databases

const yugipedia = `https://yugipedia.com/api.php`;
const parseDB = `?action=parse&format=json&page=`;
const deckArg = `%27s_Decks`
const decklists = `&prop=wikitext&formatversion=2`;
const regexDecklist = `/{{Decklist|/`;
const regex = /(?<=\*\s\[\[)([^\]]*)/g
let input = 'Yusei Fudo'

const YUGIPEDIA = {
    "parse": {
    "title": "Yami Marik's Decks",
    "pageid": 176528,
    "wikitext": "[[Yami Marik]] runs an '''Immortality-Torture Deck''', which focuses on slowly torturing his opponents and watching them squirm. In the theme of pain Yami Marik's cards slowly drain an opponent's strength, such as [[discard]]ing their [[hand]] with \"[[Helpoemer (anime)|Helpoemer]]\", lowering [[ATK]] with \"[[Dark Jeroid (anime)|Dark Jeroid]]\" and \"[[Plasma Eel]]\", and inflicting [[effect damage]] with \"[[Coffin Seller (anime)|Coffin Seller]]\" and \"[[Bowganian (anime)|Bowganian]]\". Some of his cards, like \"[[Nightmare Wheel (anime)|Nightmare Wheel]]\", \"[[Viser Shock (manga)|Viser Shock]]\" and \"[[Viser Des (manga)|Viser Des]]\", are based on torture machines. Yami Marik's Deck otherwise relies on a variety of powerful [[Trap Card]]s and [[Fiend]]-[[Type]] monsters. With \"[[The Winged Dragon of Ra (anime)|The Winged Dragon of Ra]]\" as his trump card, Yami Marik uses a variety of cards to discard it, then revive it with \"[[Monster Reborn (anime)|Monster Reborn]]\" to devastate opponents. He further relies on retrieving \"Monster Reborn\" to his hand after using it initially to continue to revive \"Ra\" again and again, using cards such as \"[[Left Arm Offering (anime)|Left Arm Offering]]\" and \"[[Mining for Magical Stones (anime)|Mining for Magical Stones]]\". Yami Marik also uses some of the cards previously used by [[Rare Hunters]] such as \"[[Revival Jam (anime)|Jam Defender]]\" and in the anime \"[[Masked Beast Des Gardius (anime)|Masked Beast Des Gardius]]\".\n\n==Anime==\n{| style=\"float:right; margin-bottom:5px;\" border=\"1\" width=\"50%\"\n! colspan=\"3\" style=\"background: #00FF00; text-align: center;\" | Record\n|-\n! Opponent(s) || Episode(s) || Outcome(s)\n|-\n| [[Mai Valentine]] || [[Yu-Gi-Oh! - Episode 090|90]]-[[Yu-Gi-Oh! - Episode 092|92]] || Win\n|-\n| [[Yami Bakura]]|| [[Yu-Gi-Oh! - Episode 096|96]]-[[Yu-Gi-Oh! - Episode 097|97]] || Win\n|-\n| [[Yami Yugi]], [[Joey Wheeler]], [[Seto Kaiba]] || [[Yu-Gi-Oh! - Episode 122|122]]-[[Yu-Gi-Oh! - Episode 124|124]] || Lose\n|-\n| [[Joey Wheeler]] || [[Yu-Gi-Oh! - Episode 125|125]]-[[Yu-Gi-Oh! - Episode 128|128]] || Win (default)\n|-\n| [[Yugi Muto]]/[[Yami Yugi]] || [[Yu-Gi-Oh! - Episode 138|138]]-[[Yu-Gi-Oh! - Episode 142|142]] || Lose (Duel taken over by [[Marik Ishtar]])\n|}\n\n{{Decklist|Anime Deck\n|normal monsters =\n* [[Drillago (anime)|Drillago]]\n* [[Gil Garth (anime)|Gil Garth]]\n* [[Juragedo (anime)|Juragedo]]\n* [[Lekunga (anime)|Lekunga]]\n* [[Lord Poison (anime)|Lord Poison]]\n* [[Melchid the Four-Face Beast (anime)|Melchid the Four-Face Beast]]\n|effect monsters =\n* [[Bowganian (anime)|Bowganian]]\n* [[Dark Jeroid (anime)|Dark Jeroid]]\n* [[Helpoemer (anime)|Helpoemer]]\n* [[Holding Arms (anime)|Holding Arms]]\n* [[Holding Legs (anime)|Holding Legs]]\n* [[Lava Golem (anime)|Lava Golem]]\n* [[Legendary Fiend (anime)|Legendary Fiend]]\n* [[Makyura the Destructor (anime)|Makyura the Destructor]]\n* [[Masked Beast Des Gardius (anime)|Masked Beast Des Gardius]]\n* [[Newdoria (anime)|Newdoria]]\n* [[Plasma Eel]] x3\n* [[Revival Jam (anime)|Revival Jam]]\n* [[Sacred Stone of Ujat]]\n* [[Swallowtail Spike Lizard]]\n* [[The Winged Dragon of Ra (anime)|The Winged Dragon of Ra]]<ref group=Notes name=ra>He lost this card to [[Yami Yugi]] during [[Yu-Gi-Oh! - Episode 142|episode 142]].</ref>\n* [[Vampiric Leech]]\n|fusion monsters =\n* [[Immortal Egyptian God Slime]]\n|magic =\n* [[Bait Doll (anime)|Bait Doll]]<ref group=Notes name=hand>This card can be seen in his hand during [[Yu-Gi-Oh! - Episode 139|episode 139]] after he activates \"[[Zombie's Jewel]]\" to return \"[[Monster Reborn (anime)|Monster Reborn]]\" to his hand.</ref>\n* [[Black Pendant (anime)|Black Pendant]]\n* [[Card of Sanctity (anime)|Card of Sanctity]]\n* [[Class System]]\n* [[Dark Spell Regeneration (anime)|Dark Spell Regeneration]]\n* [[Dark Wall of Wind]]\n* [[Jam Breeding Machine (anime)|Jam Breeding Machine]]\n* [[Machine Duplication (anime)|Machine Duplication]]\n* [[Mining for Magical Stones (anime)|Mining for Magical Stones]]\n* [[Monster Reborn (anime)|Monster Reborn]]\n* [[Polymerization (anime)|Polymerization]]\n* [[Pot of Greed (anime)|Pot of Greed]]\n* [[Premature Burial (anime)|Premature Burial]]\n* [[Remove Trap (anime)|Remove Trap]]\n* [[Spell of Pain (anime)|Spell of Pain]]\n* [[Surprise Attack from Beyond]]\n* [[The Mask of Remnants (anime)|The Mask of Remnants]]\n* [[Tribute Burial (anime)|Tribute Burial]]\n* [[Vengeful Bog Spirit (anime)|Vengeful Bog Spirit]]\n|traps =\n* [[Card of Last Will (anime)|Card of Last Will]]\n* [[Coffin Seller (anime)|Coffin Seller]]\n* [[Hidden Soldiers (anime)|Hidden Soldiers]]\n* [[Jam Defender (anime)|Jam Defender]]\n* [[Joyful Doom]]\n* [[Left Arm Offering (anime)|Left Arm Offering]]\n* [[Malevolent Catastrophe (anime)|Malevolent Catastrophe]]\n* [[Metal Reflect Slime (anime)|Metal Reflect Slime]]\n* [[Mirror Force (anime)|Mirror Force]]\n* [[Nightmare Mirror]]\n* [[Nightmare Wheel (season 2)|Nightmare Wheel]] (later played [[Nightmare Wheel (season 3)|with a different effect]]).\n* [[Relieve Monster (anime)|Relieve Monster]]\n* [[Rope of Life (anime)|Rope of Life]]\n* [[Zombie's Jewel]]\n}}\n\n==Manga==\n{{Decklist|Manga Deck\n|normal monsters =\n* [[Drillago (manga)|Drillago]]\n* [[Gil Garth (manga)|Gil Garth]]\n* [[Juragedo (manga)|Juragedo]]\n* [[Rekunga (manga)|Rekunga]]\n* [[Lord Poison (manga)|Lord Poison]]\n|effect monsters =\n* [[Bowganian (manga)|Bowganian]]\n* [[Dark Jeroid (manga)|Dark Jeroid]]\n* [[Granadora (manga)|Granadora]]\n* [[Helpoemer (manga)|Helpoemer]]\n* [[Lava Golem (manga)|Lava Golem]]\n* [[Legend Devil (manga)|Legend Devil]]\n* [[Makyura the Destructor (manga)|Makyura the Destructor]]\n* [[Newdoria (manga)|Newdoria]]\n* [[Revival Jam (manga)|Revival Jam]]\n* [[The Winged Dragon of Ra (manga)|The Winged Dragon of Ra]]\n* [[Vampiric Leech (manga)|Vampiric Leech]]\n* [[Viser Des (manga)|Viser Des]] x3\n* [[Viser Shock (manga)|Viser Shock]]\n|fusion monsters =\n* [[Immortal God Slime (manga)|Immortal God Slime]]\n|spells =\n* [[Card of Sanctity (manga)|Card of Sanctity]]\n* [[Dark Wall of Wind (manga)|Dark Wall of Wind]]\n* [[Left Arm Offering (manga)|Left Arm Offering]]\n* [[Machine Duplication (manga)|Machine Duplication]]\n* [[Magical Stone Excavation (manga)|Magical Stone Excavation]]\n* [[Monster Reborn (manga)|Monster Reborn]]\n* [[Polymerization (manga)|Polymerization]]\n* [[Remove Trap (manga)|Remove Trap]]\n* [[Spell of Pain (manga)|Spell of Pain]]\n* [[Surprise Attack from Beyond]]\n|traps =\n* [[Card of Last Will (manga)|Card of Last Will]]\n* [[Coffin Seller (manga)|Coffin Seller]]\n* [[Hidden Soldiers (manga)|Hidden Soldiers]]\n* [[Jam Defender (manga)|Jam Defender]]\n* [[Malevolent Catastrophe (manga)|Malevolent Catastrophe]]\n* [[Metal Reflect Slime (manga)|Metal Reflect Slime]]\n* [[Mirror Force (manga)|Mirror Force]]\n* [[Nightmare Mirror (manga)|Nightmare Mirror]]\n* [[Nightmare Wheel (manga)|Nightmare Wheel]]\n* [[Monster Relief (manga)|Monster Relief]]\n* [[Revival of the Dark]]\n* [[Rope of Life (manga)|Rope of Life]]\n* [[Zombie's Jewel (manga)|Zombie's Jewel]]\n}}\n\n==Video games==\n===Worldwide Edition: Stairway to the Destined Duel===\n{{Decklist|\n|normal monsters =\n* [[Summoned Skull]] x2\n* [[Vorse Raider]] x3\n|effect monsters =\n* [[Cyber Jar]]\n* [[Magician of Faith]] x3\n* [[Man-Eater Bug]] x3\n* [[Morphing Jar]] x2\n* [[Morphing Jar 2|Morphing Jar #2]]\n* [[Slate Warrior]] x3\n* [[The Bistro Butcher]] x3\n* [[White Magical Hat]] x2\n|spells =\n* [[Card Destruction]]\n* [[Change of Heart]]\n* [[Dark Hole]]\n* [[Delinquent Duo]] x2\n* [[Monster Reborn]]\n* [[Mystical Space Typhoon]] x2\n* [[Premature Burial]] x2\n* [[Raigeki]]\n* [[Restructer Revolution]]\n* [[Snatch Steal]]\n|traps =\n* [[Ring of Destruction|Bell of Destruction]]\n* [[Just Desserts]] x2\n* [[Magic Cylinder]]\n* [[Magic Jammer]] x2\n* [[Magical Thorn|Magic Thorn]] x2\n* [[Mirror Force]]\n}}\n\n{{Decklist|Deck (Phantom Pyramid)\n|effect monsters =\n* [[Cyber Jar]]\n* [[Magician of Faith]] x2\n* [[Man-Eater Bug]] x3\n* [[Mask of Darkness]] x3\n* [[Morphing Jar]] x3\n* [[Morphing Jar 2|Morphing Jar #2]] x2\n* [[Muka Muka]] x3\n* [[White Magical Hat]] x3\n|spells =\n* [[Card Destruction]] x3\n* [[Change of Heart]]\n* [[Dark Hole]]\n* [[Delinquent Duo]] x2\n* [[Gravekeeper's Servant]] x3\n* [[Harpie's Feather Duster]]\n* [[Infinite Cards]] x2\n* [[Monster Reborn]]\n* [[Mystical Space Typhoon]] x2\n* [[Raigeki]]\n* [[Snatch Steal]]\n|traps =\n* [[Ring of Destruction|Bell of Destruction]] x2\n* [[Call of the Haunted]]\n* [[Fairy Box]] x2\n* [[Gravity Bind]] x2\n* [[Magic Cylinder]]\n* [[Mirror Force]]\n* [[Torrential Tribute]]\n}}\n\n===The Falsebound Kingdom===\n{{Decklist|Monster\n|effect monsters =\n* [[The Winged Dragon of Ra (original)|The Winged Dragon of Ra]] Lv. 99\n}}\n\n===The Sacred Cards===\n{{Decklist\n|normal monsters =\n* [[Beast of Talwar]] x2\n* [[Garnecia Elefantis]] x2\n* [[Ryu-Kishin Powered]] x3\n* [[Temple of Skulls]]\n|effect monsters =\n* [[Ancient Lamp]] x3\n* [[Exarion Universe]] x3\n* [[Makyura the Destructor|Executor - Makyura]] x3\n* [[Legendary Fiend]] x3\n* [[The Bistro Butcher]] x3\n* [[Viser Des]] x3\n* [[The Winged Dragon of Ra (original)|Winged Dragon of Ra]]\n<u>Fusion Monsters</u>\n* [[The Last Warrior from Another Planet]] x2\n* [[Thousand-Eyes Restrict]] x3\n|spells =\n* [[Harpie's Feather Duster]] x2\n* [[Monster Reborn]] x2\n* [[Revival of Dokurorider]]\n* [[Yami]]\n|traps =\n* [[Anti Raigeki]]\n* [[Torrential Tribute]]\n}}\n\n===The Dawn of Destiny===\nYami Marik's [[signature card]] is shown to be [[Dark Hole]].\n\n{{Decklist|\n|normal monsters =\n* [[Summoned Skull]] x2\n* [[Vorse Raider]] x2\n|effect monsters =\n* [[Cyber Jar]]\n* [[Magician of Faith]] x2\n* [[Man-Eater Bug]] x2\n* [[Mask of Darkness]] x2\n* [[Morphing Jar 2|Morphing Jar #2]]\n* [[Muka Muka]] x2\n|spells =\n* [[Axe of Despair]] x2\n* [[Black Pendant]] x2\n* [[Change of Heart]]\n* [[Dark Hole]]\n* [[Delinquent Duo]]\n* [[Gravekeeper's Servant]] x2\n* [[Harpie's Feather Duster]]\n* [[Infinite Cards]] x2\n* [[Monster Reborn]]\n* [[Mystical Space Typhoon]] x2\n* [[Pot of Greed]]\n* [[Raigeki]]\n* [[Snatch Steal]]\n|traps =\n* [[Call of the Haunted]]\n* [[Gravity Bind]] x2\n* [[Jar of Greed]] x3\n* [[Mirror Force]]\n* [[Ring of Destruction]]\n}}\n\n===Reshef of Destruction===\n{{Decklist|\n|normal monsters =\n* [[Gil Garth]] x3\n|effect monsters =\n* [[Byser Shock]]\n* [[Dark Jeroid]] x3\n* [[Makyura the Destructor|Executor - Makyura]] x3\n* [[Helpoemer]]\n* [[Lava Golem]]\n* [[Legendary Fiend]]\n* [[Newdoria]] x3\n* [[The Winged Dragon of Ra (Phoenix Mode)]]\n* [[Viser Des]] x3\n|spells =\n* [[Change of Heart]] x3\n* [[Harpie's Feather Duster]] x3\n* [[Megamorph]] x3\n* [[Monster Reborn]] x3\n* [[Pot of Greed]] x3\n* [[Swords of Revealing Light]] x3\n|traps =\n* [[Torrential Tribute]] x3\n}}\n\n===Capsule Coliseum===\n{{Decklist|Corridors of Madness\n|normal monsters =\n* [[Blast Juggler]]\n* [[Megasonic Eye]]\n* [[Ryu-Kishin]]\n* [[Twin-Headed Behemoth]]\n* [[Two-Mouth Darkruler]]\n* [[Wicked Dragon with the Ersatz Head]]\n* [[Winged Dragon, Guardian of the Fortress 2]]\n}}\n\n{{Decklist|Fire Mountain\n|normal monsters =\n* [[Crawling Dragon]]\n* [[Crimson Sunbird]]\n* [[Firegrass]] x2\n* [[Megazowler]]\n* [[Molten Behemoth]]\n* [[Twin-Headed Behemoth]]\n}}\n\n==Notes==\n<references group=Notes />\n\n[[Category:Characters' Decks]]"
    }
    }


// Search should be made 'yugipedia'+'parseDB'+INPUT+'decklists'
let name = ''
function DecklistGenerator() {

    const [ deck, setDeck ] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            var res = await fetch(yugipedia+parseDB+input+deckArg+decklists);
            var resJson = await res.json()
            if (resJson.hasOwnProperty('error')) {
                res = await fetch(yugipedia+parseDB+input+decklists);
                resJson = await res.json();
            }
            let cards = resJson.parse.wikitext.match(regex);
            setDeck(cards);
        }
        fetchData();
    }, [])
    return (
        <>
            <h1>Deska</h1>
                <table>
                    <tbody>
                        {deck.map((e, index) => <tr key={index+e}><td>{e}</td></tr>)}
                    </tbody>
                </table>
        </>
    )
}

var progressBar = '';

export default DecklistGenerator