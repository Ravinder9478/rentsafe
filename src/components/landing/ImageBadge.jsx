function ImageBadge({ icon, text, position = "top-left" }) {
  const positionClasses = {
    "top-left": "top-[-20px] sm:top-[-20px] left-3 sm:left-4",
    "bottom-right": "bottom-3 sm:bottom-[10rem] right-3 sm:right-[-50px]"
  };

  // Split text into main and subtitle
  const parts = text.split(' ');
  const mainText = parts[0]; // "100%" or "10,000+"
  const subtitle = parts.slice(1).join(' '); // "Free for Renters" or "Active Users"

  return (
    <div className={`absolute ${positionClasses[position]} bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3`}>
      {/* Purple square with icon */}
      <div className="bg-primary-gradient rounded-2xl p-2.5 flex-shrink-0 w-10 h-10 flex items-center justify-center">
        <span className="text-white">
          {icon}
        </span>
      </div>
      
      {/* Text content */}
      <div className="flex flex-col">
        <span className="text-text-primary font-bold text-base sm:text-2xl leading-tight">
          {mainText}
        </span>
        <span className="text-text-secondary text-xs sm:text-sm leading-tight">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export default ImageBadge;
