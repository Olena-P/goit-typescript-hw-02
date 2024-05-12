interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
