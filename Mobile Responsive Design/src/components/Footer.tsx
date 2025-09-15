export function Footer() {
  return (
    <footer className="bg-teal-500 text-white py-8">
      <div className="max-w-[480px] mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="mb-2">LIVING IDEA와 함께하세요!</h3>
          <p className="text-sm text-teal-100 mb-4">
            새로운 소식과 특별한 혜택을 가장 먼저 받아보세요
          </p>
          
          <div className="flex gap-2 max-w-sm mx-auto">
            <input 
              type="email" 
              placeholder="이메일 주소"
              className="flex-1 px-4 py-2 rounded-full text-gray-900 text-sm"
            />
            <button className="bg-white text-teal-500 px-4 py-2 rounded-full text-sm font-medium">
              구독
            </button>
          </div>
        </div>

        <div className="border-t border-teal-400 pt-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-medium mb-3 text-sm">쇼핑</h4>
              <ul className="space-y-2 text-sm text-teal-100">
                <li><a href="#" className="hover:text-white">홈&리빙</a></li>
                <li><a href="#" className="hover:text-white">키친&푸드</a></li>
                <li><a href="#" className="hover:text-white">패션잡화</a></li>
                <li><a href="#" className="hover:text-white">디지털</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-sm">고객서비스</h4>
              <ul className="space-y-2 text-sm text-teal-100">
                <li><a href="#" className="hover:text-white">주문/배송</a></li>
                <li><a href="#" className="hover:text-white">교환/반품</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">고객센터</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center gap-4 mb-4">
              <a href="#" className="text-teal-100 hover:text-white text-sm">이용약관</a>
              <a href="#" className="text-teal-100 hover:text-white text-sm">개인정보처리방침</a>
            </div>
            <p className="text-xs text-teal-200">
              © 2024 LIVING IDEA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}