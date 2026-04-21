interface PlaceholderProps {
  title?: string;
  subtitle?: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ title = "Placeholder", subtitle = "Future content goes here" }) => {
  return (
    <div className="w-full h-full flex items-center justify-center text-white bg-[url('/assets/Images/cartographer.png')]">
      <div className="text-center px-10">
        <h2 className="text-4xl sm:text-5xl 2xl:text-8xl font-bold mb-4">{title}</h2>
        <p className="text-xl sm:text-2xl 2xl:text-4xl text-white/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default Placeholder;
