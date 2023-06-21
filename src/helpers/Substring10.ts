export const substring10 = (str: string) => {
    if (str.length > 10) {
        return str.slice(0, 10) + '...';
      }
      return str;
}