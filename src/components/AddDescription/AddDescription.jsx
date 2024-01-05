import { StyledTextarea } from './AddDescription.styled';

const AddDescription = ({
  register,
  control,
  handleSubmit,
  setValue,
  errors,
  onSubmit,
}) => {
  return (
    <form>
      <h2>AddDescription</h2>
      <StyledTextarea
        type="text"
        {...register('description', { required: true })}
      />
      {errors.description && <p>Description is required</p>}
    </form>
  );
};
export default AddDescription;
