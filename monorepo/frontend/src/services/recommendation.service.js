// getRecommendations.js

function scoreMatches(productItems = [], selectedItems = []) {
  return selectedItems.filter(item => productItems.includes(item)).length;
}

const getRecommendations = (
  formData = {},
  products = []
) => {

  /**
   * Crie aqui a lógica para retornar os produtos recomendados.
   */

  if(!products?.length) return [];

  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType
  } = formData;

  const scoredProducts = products.map(product => {
    const preferenceScore = scoreMatches(product.preferences, selectedPreferences);
    const featureScore = scoreMatches(product.features, selectedFeatures);

    return {
      ...product,
      score: preferenceScore + featureScore
    };
  });

  const bestProducts = scoredProducts.filter(p => p.score > 0);

  if (selectedRecommendationType === "SingleProduct") {
    const lastProduct = [bestProducts.at(-1)];
    return lastProduct;
}


return bestProducts;

};

export default { getRecommendations };
