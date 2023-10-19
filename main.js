function without(data, keysToRemove) {
  for (const key in keysToRemove) {
      if (data.hasOwnProperty(key)) {
          delete data[key];
      }
  }
  return data;
}