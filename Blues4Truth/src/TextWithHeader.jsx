function TextWithHeader ({mySubtitle,myText}) {
    return (
        <div>
            <div className="m-3 p-5 border ">
                <p className=" text-3xl font-bold " > {mySubtitle}</p>
                <p className=" text-l " > {myText}</p>
            </div>

        </div>
    )

};

export default TextWithHeader;