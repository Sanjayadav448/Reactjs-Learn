const Card = (props) => {
    // console.log(props);
    return (
        <>

            <div className="card w-48 ml-2">
                <img src={props.img} className="card-img-top w-80" alt="..." />
                <div className="card-body">
                    <p className="card-text">{props.desc}</p>
                </div>
            </div>


        </>

    )

}

export default Card