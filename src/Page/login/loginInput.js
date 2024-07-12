import { useState } from "react";

function LoginInput(props) {
const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
      };
    return <input
        type="text"
        value={props.inputValue}
        onChange={props.handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`text-field ${isFocused || props.inputValue ? "active" : ""}`} />;
}

export default LoginInput;
