import React, { useState, useEffect } from "react";

// Databases

const yugipedia = `https://yugipedia.com/api.php`;
const parseDB = `?action=parse&format=json&page=`;
const deckArg = `%27s_Decks`
const decklist = `&prop=wikitext&formatversion=2`;
const decklistRegex = /(?<=Decklist\|)[^\}]*/gi;  //*Busca los decklist = Anime y su contenido. Manga y su contenido.
const deckNameRegex = /(?<=Decklist\|)([^\n])*/gi; //*Retorna solo el nombre del Decklist. Anime Deck. Manga Deck.
const deckRegex = /(?<=\*\s\[\[)([^\]]*)/gi;  //*Busca cada carta en el decklist. [[Nombre de Carta (anime)|Nombre de Carta]]

const copyRegex = /([^\n]+)(?=\sx\d)/gi;
const qtyRegex = /(?<=\]\]\sx)(\d)/gi;

//TODO DECK REPETIDIOS (Jaden Yuki)

let input = 'Declan Akaba'

const camelCase = s => s
.replace( /(?<!\p{L})\p{L}|\s+/gu,
           m => +m === 0 ? "" : m.toUpperCase() )
.replace( /^./, 
          m => m?.toLowerCase() );


function DecklistGenerator() {

    const [ deck, setDeck ] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            var res = await fetch(yugipedia+parseDB+input+deckArg+decklist);
            var resJson = await res.json()
            if (resJson.hasOwnProperty('error')) {
                res = await fetch(yugipedia+parseDB+input+decklist);
                resJson = await res.json();
            }
            var content = resJson.parse.wikitext;
            // Add the copies before creating array.
            let copyQty = content.match(qtyRegex);
            let copy = content.match(copyRegex);

            let copiedCards = () => {
                copyQty.map((qty, index) => {
                    for(let i=1; i<qty; i++) {
                    content = content.slice(0, content.indexOf(copy[index]))+copy[index]+'\n'+content.slice(content.indexOf(copy[index]))
                    }
                })
            }
    
            copiedCards();

        let decklists = content.match(decklistRegex);
        console.log(decklists)
        let tempNames = content.match(deckNameRegex);
        let deckNames = tempNames.map(e => camelCase(e))
        let decks = {};
        deckNames.map((e, index) => {
            let tempAr = decklists[index].match(deckRegex);
            decks[e] = tempAr.map(e => e.slice(e.indexOf('|')+1))
            }
    )
            setDeck(decks);
    }
        fetchData();
    }, [])
    return (
        <>
            <h1>{input}</h1>
                {
                    Object.keys(deck).map(key =>
                    <div>
                        <h3>{key}</h3>
                            <table key={key}>
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