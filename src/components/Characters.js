export default function Characters(props) {
    const { characters, setCharacters } = props;

    const resetCharacters = () =>{
        setCharacters(null);
        console.log("Reseteando")
    }

    return (
        <div className='characters'>
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>Volver a Home</span>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>{character.status === "Alive" ? (
                                <>
                                    <span className="alive" />
                                    Alive
                                </>
                            ) : (
                                <>
                                    <span className="dead" />
                                    dead
                                </>
                            )}</h6>
                            <p>
                                <spa className="text-grey">Epidosiod:</spa>
                                <spa>{character.episode.length}</spa>
                            </p>
                            <p>
                                <spa className="text-grey">Especie:</spa>
                                <spa>{character.species}</spa>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <spa className="back-home"onClick={resetCharacters}>Volver a Home</spa>

        </div>
    );
}
