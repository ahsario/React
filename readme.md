маска разделяющая пробелами разряды в числе

import createNumberMask from 'text-mask-addons/dist/createNumberMask'

export const currencyMask = (value: string): RegExp[] => {
  const numberMask = createNumberMask({
    prefix: '',
    suffix: ' ₽',
    thousandsSeparatorSymbol: ' ',
    includeThousandsSeparator: true,
    allowDecimal: true,
    requireDecimal: false,
    allowLeadingZeroes: true,
  })
  const mask = numberMask(value)
  return mask
}
///////////////////////////////////////
