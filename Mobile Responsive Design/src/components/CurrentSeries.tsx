import { ImageWithFallback } from './figma/ImageWithFallback';

export function CurrentSeries() {
  const seriesProducts = [
    {
      id: 1,
      name: "파스텔 컬렉션",
      color: "핑크",
      image: "https://images.unsplash.com/photo-1648912916310-d398d7eb5336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG9tZSUyMHByb2R1Y3QlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzU3NzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=400",
      bgColor: "bg-pink-100"
    },
    {
      id: 2,
      name: "민트 컬렉션",
      color: "민트",
      image: "https://images.unsplash.com/photo-1630699144994-8342162d81f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxob21lJTIwYXBwbGlhbmNlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc3ODM2OTV8MA&ixlib=rb-4.1.0&q=80&w=400",
      bgColor: "bg-green-100"
    },
    {
      id: 3,
      name: "라벤더 컬렉션",
      color: "퍼플",
      image: "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrJTIwc2V0dXB8ZW58MXx8fHwxNzU3Njc0MTgxfDA&ixlib=rb-4.1.0&q=80&w=400",
      bgColor: "bg-purple-100"
    },
    {
      id: 4,
      name: "스카이 컬렉션",
      color: "블루",
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU3NzgzNzAwfDA&ixlib=rb-4.1.0&q=80&w=400",
      bgColor: "bg-blue-100"
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-[480px] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="mb-2">Current Series</h2>
          <p className="text-gray-600 text-sm">
            컬러풀한 시즌 한정 컬렉션
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {seriesProducts.map((product) => (
            <div key={product.id} className={`${product.bgColor} rounded-lg p-4`}>
              <div className="aspect-square mb-3 bg-white rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-medium mb-1">{product.name}</h3>
              <p className="text-xs text-gray-600">{product.color} 시리즈</p>
              <button className="mt-3 bg-white text-gray-900 px-4 py-2 rounded-full text-xs w-full">
                자세히 보기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}