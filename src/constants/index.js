const IS_PROD = process.env.NODE_ENV === 'production';
export const BASE_URL = IS_PROD ? 'https://www.bodymass.mx' : 'http://localhost:4040';
