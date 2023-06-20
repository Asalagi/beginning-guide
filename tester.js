function PokemonInfo({pokemonName}) {
    const [status, setStatus] = React.useState('idle')
    const [pokemon, setPokemon] = React.useState(null)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        if (!pokemonName) {
            return 
        }
        setStatus('pending')
        fetchPokemon(pokemonName).then(
            pokemonData => {
                setStatus('resolved')
                setPokemon(pokemonData)
            },
            errorData => {
                setStatus('rejected')
                setError(errorData)
            },
        )
    }, [pokemonName])

    if (status === 'idle') {
        return 'Submit a pokemon'
    }

    if (status === 'rejected') {
        return 'Something went wrong...'
    }

    if (status === 'pending') {
        return '...loading'
    }

    if (status === 'resolved') {
        return <pre>{JSON.stringify(pokemon, null, 2)}</pre>
    }
}

function App() {
    const [pokemonName, setPokemonName] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault()
        setPokemonName(event.target.elements.pokemonName.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pokemonName">Pokemon Name</label>
                <div>
                    <input id="pokemonName" />
                    <button type="submit">Submit</button>
                </div>
            </form>
            <hr />
            <PokemonInfo pokemonName={pokemonName} />
        </div>
    )
}

function fetchPokemon(name) {
    const pokemonQuery = `
    query PokemonInfo($name: String) {
        pokemon(name: $name) {
            id
            number
            name
            attacks {
                special {
                    name
                    type
                    damage
                }
            }
        }
    }
    `

    return window
    .fetch('https://graphql-pokemon.now.sh', {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
            query: pokemonQuery,
            variables: {name},
        }),
    })
    .then(r => r.json())
    .then(response => response.data.pokemon)
}

ReactDOM.render(<App />, document.getElementById('root'))