export function filterDateByYyyyMmDd(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = (date.getDate() + 1).toString().padStart(2, '0');

    const yyyy_mm_dd = `${year}-${month}-${day}`;

    return yyyy_mm_dd;
}
