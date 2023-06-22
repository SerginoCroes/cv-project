const Field = (props) => {
    const { fieldName, value, changeText } = props;

    return (
        <div className="field">
            <label>{`${fieldName}: `}<input type={fieldName === 'Start' || fieldName === 'End' ? 'date' : 'text'} value={value} onChange={e => changeText(fieldName, e.target.value)}></input></label>
        </div>
    )
}

export default Field;