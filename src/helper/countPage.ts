export const countPage = (el: any[], elPage: number) => {
    let counters = 0;
    const result: any[] = [[]];
    el.forEach(e => {
      if (result[counters].length < elPage) {
        result[counters].push(e);
      } else {
        result.push([e]);
        ++counters;
      }
    });
    return result;
  };