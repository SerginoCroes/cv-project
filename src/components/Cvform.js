const Cvform = ({ attr }) => {
    return (
        <div className="cvfield">
            {Object.keys(attr).map((field, i) => <p key={i}>{field}: {attr[field]}</p>)}
        </div>
    )
}

export default Cvform;