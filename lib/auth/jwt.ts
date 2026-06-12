import crypto from 'crypto';

function base64url(buffer: Buffer) {
  return buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64urlToBase64(s: string) {
  let str = s.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) str += '=';
  return str;
}

export function createToken(payload: Record<string, any>, secret: string) {
  const header = base64url(Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })));
  const body = base64url(Buffer.from(JSON.stringify(payload)));
  const signature = base64url(crypto.createHmac('sha256', secret).update(`${header}.${body}`).digest());
  return `${header}.${body}.${signature}`;
}

export function verifyToken(token: string, secret: string) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [header, body, signature] = parts;
    const expected = base64url(crypto.createHmac('sha256', secret).update(`${header}.${body}`).digest());

    // timing-safe compare
    const a = Buffer.from(expected);
    const b = Buffer.from(signature);
    if (a.length !== b.length) return null;
    if (!crypto.timingSafeEqual(a, b)) return null;

    const json = Buffer.from(base64urlToBase64(body), 'base64').toString('utf8');
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}
