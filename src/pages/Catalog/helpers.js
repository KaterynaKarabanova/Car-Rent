export const optionsModel = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
].map(el => ({
  value: el,
  label: el,
}));
optionsModel.unshift({ value: 'All marks', label: 'All marks' });

export const optionsPrice = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 130, 140, 150, 160, 170, 180,
  190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320,
].map(el => ({
  value: el,
  label: el,
}));
optionsPrice.unshift({ value: 10000, label: 'All price' });
