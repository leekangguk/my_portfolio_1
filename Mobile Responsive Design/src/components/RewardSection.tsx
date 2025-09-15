export function RewardSection() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-[480px] mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="mb-2">함께 하는 한 달의 리워드</h2>
          <p className="text-gray-600 text-sm">
            매일 새로운 혜택과 함께하는 특별한 한 달
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-6">
          <button className="px-4 py-2 bg-white rounded-full border text-sm">
            홈&리빙
          </button>
          <button className="px-4 py-2 bg-white rounded-full border text-sm">
            패션잡화
          </button>
          <button className="px-4 py-2 bg-white rounded-full border text-sm">
            키친&푸드
          </button>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">진행률</span>
            <span className="text-sm">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
          </div>
          <p className="text-sm text-gray-600">
            25% 더 구매하시면 다음 혜택을 받을 수 있어요!
          </p>
        </div>
      </div>
    </section>
  );
}