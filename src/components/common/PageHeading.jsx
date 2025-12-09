function PageHeading({ children, className = "" }) {
  return (
    <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary ${className}`}>
      {children}
    </h1>
  );
}

export default PageHeading;

