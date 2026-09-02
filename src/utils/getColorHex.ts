const colorCache: Record<string, string> = {
  midnight: '#191970',
};

export const fetchColorHex = async (colorName: string): Promise<string> => {
  const normalized = colorName.trim().toLowerCase();

  if (colorCache[normalized]) {
    return colorCache[normalized];
  }

  try {
    const response = await fetch(
      `https://color.pizza{encodeURIComponent(normalized)}`,
    );

    if (!response.ok) {
      return colorName;
    }

    const data = await response.json();

    if (data.colors && data.colors.length > 0) {
      const hex = data.colors[0].hex;

      colorCache[normalized] = hex;

      return hex;
    }
  } catch (error) {
    throw new Error('Помилка завантаження кольору:');
  }

  return colorName;
};
