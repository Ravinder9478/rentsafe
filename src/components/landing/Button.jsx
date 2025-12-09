function Button({ children, variant = "primary", onClick, className = "" }) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-200";
  
  const variants = {
    primary: "bg-primary-gradient hover:opacity-90 text-white shadow-md hover:shadow-lg",
    outline: "bg-white border border-primary text-primary hover:bg-primary-gradient hover:text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

