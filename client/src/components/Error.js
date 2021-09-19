function Error(props) {
    let errorMsg;
    if (props.msg) errorMsg = (
        <div className="error-msg">
            <h3>Message:</h3>
            <p>{props.msg}</p>
        </div>
    );
    return (
        <div className="Error">
            <h2>Sorry, that page is not found!</h2>
            {errorMsg}
        </div>
    );
}

export default Error;