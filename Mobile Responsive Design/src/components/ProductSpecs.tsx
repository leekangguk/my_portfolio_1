export function ProductSpecs() {
  const specs = [
    { label: "소재", value: "스테인리스 스틸" },
    { label: "용량", value: "1.7L" },
    { label: "전력", value: "1500W" },
    { label: "크기", value: "20×15×25cm" },
    { label: "무게", value: "1.2kg" },
    { label: "색상", value: "실버, 블랙" },
    { label: "보증", value: "1년" },
    { label: "원산지", value: "대한민국" },
    { label: "인증", value: "KC, FCC" }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-[480px] mx-auto px-4">
        <h3 className="mb-4 text-center">상품 상세 정보</h3>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <table className="w-full">
            <tbody>
              {specs.map((spec, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-4 py-3 text-sm font-medium text-gray-600 border-b">
                    {spec.label}
                  </td>
                  <td className="px-4 py-3 text-sm border-b">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}