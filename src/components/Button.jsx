const Button = ({
  children,
  variant = "primary",
  onClick = () => console.log("button pressed"),
  icon
}) => {
  const baseClasses = "w-fit flex-none btn flex items-center gap-2";
  const variantClasses =
    variant === "secondary" ? "btn-secondary" : "btn-primary";

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;