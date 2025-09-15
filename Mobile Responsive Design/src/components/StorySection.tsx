import { ImageWithFallback } from "./figma/ImageWithFallback";

export function StorySection() {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-[480px] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="mb-2">This is from 20s story</h2>
          <h3 className="text-xl mb-4">2023</h3>
          <p className="text-gray-300 text-sm">
            젊은 감성으로 만들어가는 새로운 라이프스타일
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-gray-800 rounded-lg p-4 text-center"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-xs">{item}</span>
              </div>
              <div className="text-xs text-gray-300">
                {item === 1 && "디자인"}
                {item === 2 && "품질"}
                {item === 3 && "배송"}
                {item === 4 && "서비스"}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {item === 1 && "모던한"}
                {item === 2 && "프리미엄"}
                {item === 3 && "빠른"}
                {item === 4 && "친절한"}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium">
            더 알아보기
          </button>
        </div>
      </div>
    </section>
  );
}