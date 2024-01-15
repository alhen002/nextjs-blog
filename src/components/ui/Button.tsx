interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, type, onSubmit }: ButtonProps) {
  return (
    <button type={type} onSubmit={onSubmit} className={""}>
      {children}
    </button>
  );
}

export default Button;
