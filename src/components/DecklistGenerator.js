import React, { useState, useEffect } from "react";

// Databases

const yugipedia = `https://yugipedia.com/api.php`;
const parseDB = `?action=parse&format=json&page=`;
const deckArg = `%27s_Decks`
const decklist = `&prop=wikitext&formatversion=2`;
const decklistRegex = /(?<=Decklist)(\|?)[^\}]*/gi;  //*Busca los decklist = Anime y su contenido. Manga y su contenido.
const deckNameRegex = /(?<=Decklist)(\|?)([^\n])*/gi; //*Retorna solo el nombre del Decklist. Anime Deck. Manga Deck.
const deckRegex = /(?<=\*\s\[\[)([^\]]*)/gi;  //*Busca cada carta en el decklist. [[Nombre de Carta (anime)|Nombre de Carta]]

const copyRegex = /([^\n]+)(?=\sx\d)/gi;
const qtyRegex = /(?<=\]\]\sx)(\d)/gi;

//TODO DECK REPETIDIOS (Jaden Yuki)
//TODO FETCH Manga (Yusei, Jaden, y varios mas)

let input = 'Yami Marik'

const camelCase = s => s
    .replace(/(?<!\p{L})\p{L}|\s+/gu,
        m => +m === 0 ? "" : m.toUpperCase())
    .replace(/^./,
        m => m?.toLowerCase());


function DecklistGenerator() {

    const [deck, setDeck] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            var res = await fetch(yugipedia + parseDB + input + deckArg + decklist);
            var resJson = await res.json()
            if (resJson.hasOwnProperty('error')) {
                res = await fetch(yugipedia + parseDB + input + decklist);
                resJson = await res.json();
            }
            var content = resJson.parse.wikitext;
            // Add the copies before creating array.
            let copyQty = content.match(qtyRegex);
            let copy = content.match(copyRegex);
            let copiedCards = () => {
                copyQty.map((qty, index) => {
                    for (let i = 1; i < qty; i++) {
                        content = content.slice(0, content.indexOf(copy[index])) + copy[index] + '\n' + content.slice(content.indexOf(copy[index]))
                    }
                })
            }

            copyQty != null ? copiedCards() : copyQty = null;

            let decklists = content.match(decklistRegex);
            console.log(decklists)
            let tempNames = content.match(deckNameRegex);
            let deckNames = tempNames.map((e, index) => index.toString() + camelCase(e))
            let decks = {};
            console.log(`ESTO ES ${deckNames}`)
            if (deckNames !== null) {
                deckNames.map((e, index) => {
                    let tempAr = decklists[index].match(deckRegex);
                    decks[e] = tempAr.map(e => e.slice(e.indexOf('|') + 1))
                })
            }
            setDeck(decks);
            // Compare with Database
            let dbRequest = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name='
            let searchCards = ''
            let joinArray = () => {
                Object.keys(decks).map(key =>
                    searchCards += deck[key].join('|') + '|'
                )
            }
            joinArray();
            console.log(dbRequest+searchCards)
            var DBcontent = []
            var fetchDB = async () => {
                var resDB = await fetch(dbRequest + searchCards);
                var resDBJson = await resDB.json()
                DBcontent = resDBJson.data
            }
            fetchDB();
        }
        fetchData();

    }, [])
    return (
        <>
            <h1>{input}</h1>
            {
                Object.keys(deck).map((key, index) =>
                    <div>
                        <h3>{key}</h3>
                        <table key={index.toString() + key}>
                            <tbody>
                                {deck[key].map(e => <tr><td>{e}</td></tr>)}
                            </tbody>
                        </table>
                    </div>
                )}
        </>
    )
}

var progressBar = '';

export default DecklistGenerator