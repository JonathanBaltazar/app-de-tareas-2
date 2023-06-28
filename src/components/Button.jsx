// CUSTOM STYLES
import "../css/styles.css";

function Button({ nameBtn, setShowNotDone, listState, btnStyles }) {
    return (
        <button
            className={`font-bold mr-4 mb-1 ${btnStyles}`}
            onClick={() => {
                setShowNotDone(listState);
            }}
        >
            {nameBtn}
        </button>
    );
}

export default Button;
