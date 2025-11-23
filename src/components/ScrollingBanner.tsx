const ScrollingBanner = () => {
  const text = "Gatil Dixini MG • @bengal_sulmg";
  
  return (
    <div className="bg-secondary text-primary-foreground py-2 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="inline-flex items-center mx-8 text-sm font-medium">
            {text}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;
