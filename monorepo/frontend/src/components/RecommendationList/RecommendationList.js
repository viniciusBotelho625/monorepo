
import { ArrowLeft } from "lucide-react"
function RecommendationList({ recommendations, onBack }) {
  
  return (
    <div>

      <button
        onClick={onBack}
        className="mb-4 text-sm text-gray-400 hover:text-gray-900  flex items-center"
      >
        <ArrowLeft size={18}/>
        Voltar às preferências
      </button>

      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <div className="grid grid-cols-3 gap-2">
        {recommendations.map((recommendation, index) => (
          <div key={index} className="mb-2 border-gray-200 bg-white shadow-sm  px-4 py-4 rounded-lg">
            {recommendation.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationList;
