export const FormValidationError: React.FC<{
  errorText: string[];
}> = ({ errorText }) => {
  return (
    <div className={errorText.length > 0 ? "visible" : "hidden"}>
      <div className="mt-4 rounded-lg bg-red-100 px-14 py-3 text-center text-sm font-bold text-red-500 shadow-md">
        {errorText.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </div>
    </div>
  );
};
