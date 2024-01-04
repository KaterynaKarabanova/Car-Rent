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
      <textarea type="text" {...register('description', { required: true })} />
      {errors.description && <p>Description is required</p>}
    </form>
  );
};
export default AddDescription;
