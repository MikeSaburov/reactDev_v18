export const Card = ({ children }) => {
  return (
    <div className="border border-gray-500 inline-flex flex-col p-5 rounded-3xl items-center justify-center text-center">
      {children}
    </div>
  );
};
