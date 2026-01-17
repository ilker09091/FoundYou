import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";

function SearchSection({ defaultQuery = "" }) {
  const [query, setQuery] = useState(defaultQuery);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const value = query.toLowerCase().trim();

    if (value === "dünyanın en güzel kızı") {
      navigate("/search-dunyanin-en-guzel-kizi", {
        state: { query },
      });
    } else {
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-[90%] md:w-[50%] border border-gray-300 h-12 rounded-full px-4 shadow-sm hover:shadow-md transition"
    >
      <IoSearchSharp className="text-gray-500 w-5 h-5" />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="w-full outline-none px-4 text-sm"
        placeholder="Google'da ara"
      />
      <CiMicrophoneOn className="text-gray-500 w-5 h-5" />
    </form>
  );
}

export default SearchSection;
