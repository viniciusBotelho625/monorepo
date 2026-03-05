import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';
import { ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast';

function Form({ setRecommendations }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { selectedPreferences, selectedFeatures, selectedRecommendationType } = formData;

    if (selectedPreferences.length === 0 && selectedFeatures.length === 0) {
      toast.error("Selecione ao menos uma preferência ou funcionalidade");
      return;
    }

    const dataRecommendations = getRecommendations(formData);

    const normalizedArray = Array.isArray(dataRecommendations) ? dataRecommendations : [dataRecommendations]

    setRecommendations(normalizedArray);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mb-10'
    >
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />

      <div className='border border-gray-300 mb-4'/>
      
      <SubmitButton text="Obter recomendação" icon={ArrowRight} className={"float-right"}/>
    </form>
  );
}

export default Form;
