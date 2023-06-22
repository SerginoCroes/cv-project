import Field from "./Field";

const Form = (props) => {
    const { index, formtype, attr, del } = props;

    const changeText = (field, value) => {
        const { index, formtype, changeText } = props;
        changeText(formtype, index, field, value);
    }

    return (
        <>
            <div className="form">
                {Object.keys(attr).map((field, i) => <Field key={i} fieldName={field} value={attr[field]} changeText={changeText} />)}
            </div>
            {(formtype !== 'personal') && <input type="button" value="Delete" onClick={() => del(formtype, index)} />}
        </>
    )
}

export default Form;