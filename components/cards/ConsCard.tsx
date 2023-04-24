export default function ConsCard({ title, cons }) {
  return (
    <div className="border border-red-300 dark:border-red-700 bg-rose-100 dark:bg-red-900 rounded-xl p-6 my-6 w-full">
      <span className="text-lg font-bold font-sans">{`${title}`} ...</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <path d="M18 7L9.42857 17L6 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
