import "./storno.css"

export const Storno = (props) => {
    { }
    return (
        <>
            <div className="summary__cancel">

            <h3>Storno podmínky</h3>
                <div className="summary__cancel-text">
                    <p>Pokud zrušíte rezervaci do 14 dní před příjezdem, nebude Vám účtována žádná částka.</p>
                    <p className="summary__cancel-charge">{props.cancelCharge}</p>
                </div>
            </div>       
        </>
    )
}
