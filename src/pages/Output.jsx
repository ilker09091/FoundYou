import { useEffect, useRef } from "react";
import SearchSection from "../components/SearchSection";
import { IoIosHeart } from "react-icons/io";
import { useLocation } from "react-router-dom";

function Output() {
  const videoRef = useRef(null);
  const location = useLocation();
  const query = location.state?.query || "dünyanın en güzel kızı";

  const text = [
    { id: 1, text: "Tümü", bold: true },
    { id: 2, text: "Görseller" },
    { id: 3, text: "Videolar" },
    { id: 4, text: "Kısa Videolar" },
    { id: 5, text: "Haberler" },
    { id: 6, text: "Haritalar" },
  ];

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(() => {
        alert("Kameraya erişim reddedildi");
      });
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="sticky top-0 bg-white z-50 ">
        <div className="flex items-center space-x-4 px-4 py-3">
          <img src="/images/Google-logo.png" className="w-20 md:w-24" alt="" />
          <div className="flex-1">
            <SearchSection defaultQuery={query} />
          </div>
        </div>

        {/* Sekmeler */}
        <div className="overflow-x-auto scrollbar-hide">
          <ul className="flex items-center gap-6 px-4 pb-2 min-w-max">
            {text.map((item) => (
              <li
                key={item.id}
                className={`whitespace-nowrap cursor-pointer text-sm ${
                  item.bold
                    ? "text-black font-semibold border-blue-600 pb-2"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-start mt-6 gap-4 px-4 md:ml-6">
        <p className="text-lg md:text-xl font-medium flex items-center gap-1">
          Aradığın sonuç burada
          <IoIosHeart className="text-red-700" />
        </p>

        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-64 h-64 md:w-80 md:h-80 rounded-xl shadow-lg object-cover"
        />
      </div>

      <p className="text-base md:text-lg mt-4 px-4 md:ml-6 text-gray-700">
        Senden Başka Bir Dünya Güzeli Daha Var Olamaz!
      </p>
    </div>
  );
}

export default Output;
