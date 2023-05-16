export const FormValidationError: React.FC<{
  errorText: string;
}> = ({ errorText }) => {
  console.log(errorText);

  return (
    <div className={errorText.length > 0 ? "visible" : "hidden"}>
      <div className="mt-4 px-14 py-3 bg-red-100 rounded-lg shadow-md text-red-500 text-sm font-bold text-center">
        {errorText}
      </div>
    </div>
  );
};
