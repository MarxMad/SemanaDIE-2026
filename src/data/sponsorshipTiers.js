export const TIER_BENEFIT_ROWS = [
  { key: 'webLogo', label: { es: 'Logo en Página del Evento', en: 'Logo on Event Website' } },
  { key: 'digitalChannels', label: { es: 'Logotipo en canales de comunicación digital (FI)', en: 'Logo on FI digital communication channels' } },
  { key: 'auditoriumPresence', label: { es: 'Presencia Digital al inicio de cada evento en auditorio', en: 'Digital presence at the start of each auditorium session' } },
  { key: 'emailFlyer', label: { es: 'Flyer de agradecimiento por correo', en: 'Thank-you flyer via email' } },
  { key: 'socialPost', label: { es: 'Posteo de agradecimiento en redes sociales', en: 'Thank-you post on social media' } },
  { key: 'stand2x1', label: { es: 'Stand de 2 x 1', en: '2 x 1 booth' }, noteKey: 'stand2x1Note' },
  { key: 'stand3x1', label: { es: 'Stand de 3 x 1', en: '3 x 1 booth' }, noteKey: 'stand3x1Note' },
  { key: 'keynote', label: { es: 'Espacio para una conferencia magistral', en: 'Keynote / panel session' }, noteKey: 'keynoteNote' },
  { key: '_hackathon', isSection: true, label: { es: 'HACKATHON', en: 'HACKATHON' } },
  { key: 'hackathonAddon', label: { es: 'Inversión Hackathon', en: 'Hackathon investment' } },
  { key: 'hackathonLogo', label: { es: 'Logo Hackathon CriptoUNAM', en: 'CriptoUNAM Hackathon logo' } },
  { key: 'workshop', label: { es: 'Taller', en: 'Workshop' } },
  { key: 'criptoThanks', label: { es: 'Agradecimiento en redes de CriptoUNAM', en: 'Thank-you on CriptoUNAM social media' } },
  { key: 'hackathonTrack', label: { es: 'Track de Hackathon', en: 'Hackathon track naming' } },
  { key: '_total', isSection: true, label: { es: 'TOTALES', en: 'TOTALS' } },
  { key: 'total', label: { es: 'Precio total paquete (IVA incl.)', en: 'Total package price (VAT incl.)' }, isTotal: true },
];

const dayFull = { es: 'Por 1 día completo', en: 'Full day' };
const dayComplete = { es: 'Por día completo', en: 'Full day' };
const panel = { es: 'PANEL', en: 'PANEL' };

export const IVA_RATE = 0.16;

export function parseMoney(value) {
  if (value == null || value === '') return null;
  const num = parseFloat(String(value).replace(/[^0-9.]/g, ''));
  return Number.isNaN(num) ? null : num;
}

function moneyDecimals(value) {
  const s = String(value);
  const dot = s.indexOf('.');
  return dot === -1 ? 0 : s.length - dot - 1;
}

export function formatMoney(amount, decimals = 0) {
  return `$${amount.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

export function withIva(priceString) {
  const amount = parseMoney(priceString);
  if (amount == null) return null;
  return formatMoney(amount * (1 + IVA_RATE), moneyDecimals(priceString));
}

export function formatPriceWithIva(priceString) {
  if (!priceString || priceString === 'A la medida') return priceString;
  const suffix = priceString.includes('MXN') ? ' MXN' : '';
  const base = priceString.replace(/\s*MXN$/, '').trim();
  const withIvaPrice = withIva(base);
  return withIvaPrice ? `${withIvaPrice}${suffix}` : priceString;
}

export const SPONSORSHIP_TIERS_MXN = [
  {
    id: 'goya',
    name: { es: 'Goya', en: 'Goya' },
    price: '$15,000',
    priceUsd: '$857',
    isCripto: false,
    benefits: {
      webLogo: true, digitalChannels: false, auditoriumPresence: true, emailFlyer: false,
      socialPost: false, stand2x1: false, stand3x1: false, keynote: true,
      hackathonAddon: false, hackathonLogo: true, workshop: false, criptoThanks: true, hackathonTrack: false,
      total: null, totalUsd: null,
    },
  },
  {
    id: 'puma',
    name: { es: 'Puma', en: 'Puma' },
    price: '$25,000',
    priceUsd: '$1,429',
    isCripto: false,
    benefits: {
      webLogo: true, digitalChannels: false, auditoriumPresence: true, emailFlyer: true,
      socialPost: false, stand2x1: true, stand2x1Note: dayFull, stand3x1: false, keynote: false,
      hackathonAddon: true, hackathonLogo: true, workshop: true, criptoThanks: true, hackathonTrack: false,
      total: '$26,500', totalUsd: '$1,514',
    },
  },
  {
    id: 'puma-plata',
    name: { es: 'Puma Plata', en: 'Puma Silver' },
    price: '$35,000',
    priceUsd: '$2,000',
    isCripto: false,
    benefits: {
      webLogo: true, digitalChannels: true, auditoriumPresence: true, emailFlyer: true,
      socialPost: false, stand2x1: false, stand3x1: true, stand3x1Note: dayFull, keynote: true, keynoteNote: panel,
      hackathonAddon: true, hackathonLogo: true, workshop: true, criptoThanks: true, hackathonTrack: false,
      total: '$38,000', totalUsd: '$2,171',
    },
  },
  {
    id: 'puma-oro',
    name: { es: 'Puma Oro', en: 'Puma Gold' },
    price: '$50,000',
    priceUsd: '$2,857',
    isCripto: false,
    highlight: true,
    benefits: {
      webLogo: true, digitalChannels: true, auditoriumPresence: true, emailFlyer: true,
      socialPost: true, stand2x1: false, stand3x1: true, stand3x1Note: dayComplete, keynote: true,
      hackathonAddon: true, hackathonLogo: true, workshop: true, criptoThanks: true, hackathonTrack: true,
      total: '$55,000', totalUsd: '$3,142.86',
    },
  },
];

export const SPONSORSHIP_TIERS_USD = [
  {
    id: 'goya',
    name: { es: 'Goya', en: 'Goya' },
    price: '$857',
    isCripto: false,
    benefits: {
      webLogo: true, digitalChannels: false, auditoriumPresence: true, emailFlyer: false,
      socialPost: false, stand2x1: false, stand3x1: false, keynote: true,
      hackathonAddon: false, hackathonLogo: true, workshop: false, criptoThanks: true, hackathonTrack: false,
      total: null,
    },
  },
  {
    id: 'puma',
    name: { es: 'Puma', en: 'Puma' },
    price: '$1,429',
    isCripto: false,
    benefits: {
      webLogo: true, digitalChannels: false, auditoriumPresence: true, emailFlyer: true,
      socialPost: false, stand2x1: true, stand2x1Note: dayFull, stand3x1: false, keynote: false,
      hackathonAddon: true, hackathonLogo: true, workshop: true, criptoThanks: true, hackathonTrack: false,
      total: '$1,514',
    },
  },
  {
    id: 'puma-plata',
    name: { es: 'Puma Plata', en: 'Puma Silver' },
    price: '$2,000',
    isCripto: false,
    benefits: {
      webLogo: true, digitalChannels: true, auditoriumPresence: true, emailFlyer: true,
      socialPost: false, stand2x1: false, stand3x1: true, stand3x1Note: dayFull, keynote: true,
      hackathonAddon: true, hackathonLogo: true, workshop: true, criptoThanks: true, hackathonTrack: false,
      total: '$2,171',
    },
  },
  {
    id: 'puma-oro',
    name: { es: 'Puma Oro', en: 'Puma Gold' },
    price: '$2,857',
    isCripto: false,
    highlight: true,
    benefits: {
      webLogo: true, digitalChannels: true, auditoriumPresence: true, emailFlyer: true,
      socialPost: true, stand2x1: false, stand3x1: true, stand3x1Note: dayComplete, keynote: true,
      hackathonAddon: true, hackathonLogo: true, workshop: true, criptoThanks: true, hackathonTrack: false,
      total: '$3,142.86',
    },
  },
];

export function renderTierCell(benefits, row, lang, options = {}) {
  if (row.isSection) return null;

  const b = benefits;
  const val = b[row.key];
  const { showDualCurrency = false } = options;

  if (row.isTotal) {
    const mxnVal = val ? withIva(val) : null;
    const usdVal = b.totalUsd ? withIva(b.totalUsd) : null;
    if (!mxnVal && !usdVal) return { type: 'empty' };
    if (showDualCurrency && (mxnVal || usdVal)) {
      return {
        type: 'dual',
        mxn: mxnVal || '—',
        usd: usdVal || '—',
      };
    }
    return mxnVal ? { type: 'text', value: mxnVal, bold: true } : { type: 'empty' };
  }

  if (row.noteKey && b[row.key]) {
    const note = b[row.noteKey];
    const noteText = typeof note === 'object' ? note[lang] : note;
    return { type: 'note', value: noteText };
  }

  if (val === true) return { type: 'check' };
  if (val === false || val == null) return { type: 'empty' };
  return { type: 'text', value: String(val) };
}
