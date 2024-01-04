export const getPlaceOptions = t => {
  return [
    { value: t('placesKyiv'), label: t('placesKyiv') },
    { value: t('placesLviv'), label: t('placesLviv') },
    { value: t('placesDnipro'), label: t('placesDnipro') },
    { value: t('placesZaporizhzhia'), label: t('placesZaporizhzhia') },
    { value: t('placesTernopil'), label: t('placesTernopil') },
    { value: t('placesIvanoFrankivsk'), label: t('placesIvanoFrankivsk') },
    { value: t('placesRivne'), label: t('placesRivne') },
    { value: t('placesVinnitsa'), label: t('placesVinnitsa') },
    { value: t('placesKhmelnytskyi'), label: t('placesKhmelnytskyi') },
    { value: t('placesMykolaiv'), label: t('placesMykolaiv') },
    { value: t('placesPoltava'), label: t('placesPoltava') },
    { value: t('placesLutsk'), label: t('placesLutsk') },
    { value: t('placesCherkasy'), label: t('placesCherkasy') },
    { value: t('placesZhytomyr'), label: t('placesZhytomyr') },
    { value: t('placesChernihiv'), label: t('placesChernihiv') },
    { value: t('placesChernivtsi'), label: t('placesChernivtsi') },
    { value: t('placesKropyvnytskyi'), label: t('placesKropyvnytskyi') },
    { value: t('placesSumy'), label: t('placesSumy') },
    { value: t('placesUzhhorod'), label: t('placesUzhhorod') },
    { value: t('placesKherson'), label: t('placesKherson') },
    { value: t('placesDonetsk'), label: t('placesDonetsk') },
    { value: t('placesLuhansk'), label: t('placesLuhansk') },
  ];
};
export const yearOptions = [];
for (let i = 1940; i < 2025; i++) {
  yearOptions.push({ label: `${i}`, value: `${i}` });
}
export const typeOptions = [
  { label: 'Sedan', value: 'Sedan' },
  { label: 'SUV', value: 'SUV' },
  { label: 'Coupe', value: 'Coupe' },
  { label: 'Convertible', value: 'Convertible' },
  { label: 'Hatchback', value: 'Hatchback' },
  { label: 'Wagon', value: 'Wagon' },
  { label: 'Van', value: 'Van' },
  { label: 'Truck', value: 'Truck' },
  { label: 'Electric', value: 'Electric' },
  { label: 'Hybrid', value: 'Hybrid' },
  { label: 'Luxury', value: 'Luxury' },
  { label: 'Sports', value: 'Sports' },
];
