const crypto = require('crypto');

module.exports = async ({ data, key }) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

  let buffer = Buffer.concat([
    cipher.update(Buffer.from(data, 'utf8')),
    cipher.final(),
  ]);

  const encrypted = buffer;

  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(cipher.getAuthTag());

  buffer = Buffer.concat([
    decipher.update(buffer),
    decipher.final(),
  ]);

  return {
    encrypted, decrypted: buffer, iv, authTag: cipher.getAuthTag(),
  };
}
