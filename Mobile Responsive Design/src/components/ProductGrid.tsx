import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "미니멀 화이트 머그컵",
    price: "12,000",
    originalPrice: "15,000",
    discount: "20%",
    image: "https://images.unsplash.com/photo-1648912916310-d398d7eb5336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG9tZSUyMHByb2R1Y3QlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzU3NzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=400",
    isNew: true
  },
  {
    id: 2,
    name: "스테인리스 전기포트",
    price: "45,000",
    image: "https://images.unsplash.com/photo-1630699144994-8342162d81f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxob21lJTIwYXBwbGlhbmNlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc3ODM2OTV8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 3,
    name: "모던 데스크 오거나이저",
    price: "28,000",
    originalPrice: "35,000",
    discount: "20%",
    image: "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrJTIwc2V0dXB8ZW58MXx8fHwxNzU3Njc0MTgxfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 4,
    name: "인테리어 플랜터",
    price: "18,000",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU3NzgzNzAwfDA&ixlib=rb-4.1.0&q=80&w=400",
    isNew: true
  },
  {
    id: 5,
    name: "우드 키친 트레이",
    price: "22,000",
    image: "https://images.unsplash.com/photo-1648912916310-d398d7eb5336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG9tZSUyMHByb2R1Y3QlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzU3NzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    id: 6,
    name: "실리콘 주방용품 세트",
    price: "32,000",
    originalPrice: "40,000",
    discount: "20%",
    image: "https://images.unsplash.com/photo-1630699144994-8342162d81f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxob21lJTIwYXBwbGlhbmNlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc3ODM2OTV8MA&ixlib=rb-4.1.0&q=80&w=400"
  }
];

export function ProductGrid() {
  return (
    <section className="py-8">
      <div className="max-w-[480px] mx-auto px-4">
        <div className="grid grid-cols-3 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative aspect-square">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {product.discount && (
                  <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                    -{product.discount}
                  </span>
                )}
              </div>
              <div className="p-3">
                <h3 className="text-sm mb-1 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">{product.price}원</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      {product.originalPrice}원
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}