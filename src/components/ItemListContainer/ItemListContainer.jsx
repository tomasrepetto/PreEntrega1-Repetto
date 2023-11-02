// eslint-disable-next-line react/prop-types
const ItemListContainer = ({greeting}) =>{
    const greetingStyles = {
        fontSize: '3rem',
        fontWeight: '600',
        textAlign: 'center',
        color: 'whitesmoke',
    }
    return (
        <div style={greetingStyles}>
            {greeting}
        </div>
    )
}

export default ItemListContainer;