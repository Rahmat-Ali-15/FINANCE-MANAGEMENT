import "./Loader.css";

export const Loader = () => {
    return (
        <>
            <div className="loader-container">
                <div className="loader-circle">
                    <div className="loader-inner"></div>
                </div>

                <h2 className="loader-logo">
                    F<span>M</span>
                </h2>
            </div>
        </>
    )
}