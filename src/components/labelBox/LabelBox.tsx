const LabelBox = ({textLabel}: {textLabel: string}) => {
    return(
        <div className="boxLabel">
            <p>
                {textLabel}
            </p>
        </div>
    )
}

export default LabelBox;