import { useState } from "react";

const Dropdown  = ({title, text}) => {

const [showContent, setShowContent] = useState(false);

const toggleContent = () => {
    setShowContent(!showContent);
};


    return (
        <div>
            <div className="elementTitle" onClick={toggleContent}>{title}</div>
            <div className={`elementText ${showContent ? 'show' : ''}`}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Dropdown;