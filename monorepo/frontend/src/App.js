import{ useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import { Toaster } from 'react-hot-toast';

function App() {
  const [recommendations, setRecommendations ] = useState([])
  const hasRecomendations = recommendations.length > 0;

  return (
    <div className="min-h-screen bg-background">
      
      <header className="border-b border-gray-300 bg-[#2554B1]">
       <div className="mx-auto max-w-4xl px-6 py-10">
          <h1 className="text-2xl font-bold tracking-tight font-heading text-gray-200">
            Recomendador de Produtos RD Station
          </h1>
          <p className="mt-3 text-gray-200/75 leading-relaxed max-w-3xl">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode encontrar uma variedade de produtos, cada um projetado para atender às necessidades específicas do seu negócio. De CRM a Marketing, de Conversas a Inteligência Artificial, temos uma solução para ajudar você a alcançar seus objetivos. Use o formulário abaixo para selecionar suas preferências e funcionalidades desejadas e receba recomendações personalizadas de produtos que melhor atendam às suas necessidades.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10 space-y-10">
        {!hasRecomendations ? 
          <section>
            <Form setRecommendations={setRecommendations}/>
          </section>
          : 
          <section>
            <RecommendationList 
              recommendations={recommendations} 
              onBack={() => setRecommendations([])}
            />
          </section>
        }
      </main>
      
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
