export interface IChangeLanguageComponent {
  children?: React.ReactNode;
}

const ChangeLanguageComponent: React.FC<IChangeLanguageComponent> = () => {
  return (
    <div className="absolute top-0 right-full mr-2 bg-white max-w-[240px] min-w-[180px] px-2 py-2 rounded-md overflow-hidden flex flex-col gap-2">
      <button
        className="w-full text-sm font-medium py-2 px-2 text-left text-black bg-gray-100 hover:bg-gray-200 rounded-md"
        onClick={() => {}}
      >
        English
      </button>
      <button
        className="w-full text-sm font-medium py-2 px-2 text-left text-white bg-black hover:bg-gray-800 rounded-md"
        onClick={() => {}}
      >
        Spanish
      </button>
    </div>
  );
};

export default ChangeLanguageComponent;
