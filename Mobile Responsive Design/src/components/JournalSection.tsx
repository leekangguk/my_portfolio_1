import { ImageWithFallback } from './figma/ImageWithFallback';

export function JournalSection() {
  const articles = [
    {
      id: 1,
      title: "미니멀 라이프를 위한 5가지 팁",
      excerpt: "간소한 삶을 위한 실용적인 조언들",
      image: "https://images.unsplash.com/photo-1648912916310-d398d7eb5336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG9tZSUyMHByb2R1Y3QlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzU3NzgzNjkxfDA&ixlib=rb-4.1.0&q=80&w=400",
      date: "2024.01.15"
    },
    {
      id: 2,
      title: "주방을 더 효율적으로 사용하는 방법",
      excerpt: "작은 공간도 알차게 활용하기",
      image: "https://images.unsplash.com/photo-1630699144994-8342162d81f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxob21lJTIwYXBwbGlhbmNlJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTc3ODM2OTV8MA&ixlib=rb-4.1.0&q=80&w=400",
      date: "2024.01.12"
    },
    {
      id: 3,
      title: "홈 오피스 인테리어 아이디어",
      excerpt: "재택근무를 위한 공간 꾸미기",
      image: "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrJTIwc2V0dXB8ZW58MXx8fHwxNzU3Njc0MTgxfDA&ixlib=rb-4.1.0&q=80&w=400",
      date: "2024.01.10"
    },
    {
      id: 4,
      title: "계절별 인테리어 소품 활용법",
      excerpt: "작은 변화로 분위기 바꾸기",
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU3NzgzNzAwfDA&ixlib=rb-4.1.0&q=80&w=400",
      date: "2024.01.08"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[480px] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="mb-2">From The Journal</h2>
          <p className="text-gray-600 text-sm">
            라이프스타일 매거진
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-[4/3] relative">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <time className="text-xs text-gray-500 mb-1 block">{article.date}</time>
                <h3 className="text-sm font-medium mb-1 line-clamp-2">{article.title}</h3>
                <p className="text-xs text-gray-600 line-clamp-2">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm">
            더 많은 아티클 보기
          </button>
        </div>
      </div>
    </section>
  );
}