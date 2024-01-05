import AddAccessories from 'components/AddAccessories/AddAccessories';
import AddCarInfo from 'components/AddCarInfo/AddCarInfo';
import AddDescription from 'components/AddDescription/AddDescription';
import Conditions from 'components/Conditions/Conditions';
import { StyledBack } from 'pages/Catalog/Catalog.styled';
import { useForm } from 'react-hook-form';
import { StyledBtn } from './Cooperation.styled';
const Cooperation = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    // const ingredientsArray = ingNumber.map((el, index) => ({
    //   [`title`]: data[`Ingredients${index}`].value,
    //   [`measure`]: data[`IngNumber${index}`],
    // }));
    // const dataToSend = new FormData();
    // ingredientsArray.forEach((ingredient, index) => {
    //   dataToSend.append(`ingredients[${index}][title]`, ingredient.title);
    //   dataToSend.append(`ingredients[${index}][measure]`, ingredient.measure);
    // });
    // if (data.photo) {
    //   dataToSend.append('drinkThumb', data.photo);
    // }
    // dataToSend.append('category', data.category.label);
    // dataToSend.append('glass', data.glass.label);
    // dataToSend.append('description', data.recipeDesc);
    // dataToSend.append('instructions', data.aboutRecipe);
    // dataToSend.append('alcoholic', data.alcohol);
    // dataToSend.append('drink', data.itemTitle);
  };
  return (
    <StyledBack>
      <h1>Cooperation</h1>
      <>
        <AddCarInfo
          register={register}
          control={control}
          setValue={setValue}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        />
        <AddAccessories
          register={register}
          control={control}
          setValue={setValue}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        />
        <AddDescription
          register={register}
          control={control}
          setValue={setValue}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        />
        <Conditions
          register={register}
          control={control}
          setValue={setValue}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        />
      </>
      <StyledBtn type="button" onClick={handleSubmit(onSubmit)}>
        Add
      </StyledBtn>
    </StyledBack>
  );
};
export default Cooperation;
