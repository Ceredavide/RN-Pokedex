

export default fetchPokedex = async () => {
    try {
        data = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
        console.log(data)
        user = data.json()
    } catch (error) {
        Alert.alert(error.toString());
        user = null
    } finally {
        return user
    }
}