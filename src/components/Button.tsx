const Button = ({ onClick, style, children }) => {
    return (
      <button type="button" onClick={onClick} style={style}>
       {children}
      </button>
    );
  };

  export default Button;