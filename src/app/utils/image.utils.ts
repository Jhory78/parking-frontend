/** Límite del backend para POST /entries/recognize. */
export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

const ACCEPTED_TYPES = ['image/jpeg', 'image/png'];
/** Una placa se lee bien a esta resolución y el archivo queda muy por debajo de 5 MB. */
const MAX_SIDE_PX = 1920;
const JPEG_QUALITY = 0.85;

/**
 * Deja la foto lista para el OCR (RF-01): JPEG o PNG de máximo 5 MB.
 * Las fotos grandes de la cámara del celular se reducen en el navegador.
 * Rechaza con un mensaje para el operario si no se puede usar.
 */
export async function preparePlateImage(file: File): Promise<Blob> {
  if (!ACCEPTED_TYPES.includes(file.type)) {
    throw new Error('La imagen debe ser JPEG o PNG');
  }
  if (file.size <= MAX_IMAGE_BYTES) {
    return file;
  }

  const reduced = await downscale(file);
  if (reduced.size > MAX_IMAGE_BYTES) {
    throw new Error('La imagen no puede superar 5 MB');
  }
  return reduced;
}

async function downscale(file: File): Promise<Blob> {
  const bitmap = await createImageBitmap(file).catch(() => {
    throw new Error('No se pudo abrir la imagen');
  });
  const scale = Math.min(1, MAX_SIDE_PX / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext('2d')?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();

  return new Promise((resolve, reject) =>
    canvas.toBlob(
      blob => (blob ? resolve(blob) : reject(new Error('No se pudo procesar la imagen'))),
      'image/jpeg',
      JPEG_QUALITY
    )
  );
}
