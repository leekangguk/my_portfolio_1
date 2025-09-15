export function LivingIdeaShop() {
  return (
    <section className="py-12 bg-yellow-50">
      <div className="max-w-[480px] mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">💡</span>
            </div>
          </div>
          <h2 className="text-2xl mb-2">THE Living IDEA SHOP</h2>
          <p className="text-gray-600 text-sm">
            생활 속 아이디어가 담긴 특별한 상품들
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-8">
          {[
            { icon: "🏠", title: "홈데코", desc: "인테리어" },
            { icon: "🍴", title: "키친", desc: "주방용품" },
            { icon: "💻", title: "오피스", desc: "사무용품" },
            { icon: "🛁", title: "배스", desc: "욕실용품" }
          ].map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="text-sm font-medium mb-1">{category.title}</div>
              <div className="text-xs text-gray-500">{category.desc}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="mb-4">특별한 혜택</h3>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-yellow-600 text-lg font-medium mb-2">
              🎁 첫 구매 20% 할인
            </div>
            <p className="text-sm text-gray-600 mb-4">
              신규 회원 가입시 모든 상품 20% 할인 혜택
            </p>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-medium w-full">
              지금 가입하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}