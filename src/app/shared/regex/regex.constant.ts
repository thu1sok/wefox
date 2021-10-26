export const REGEX = {
    title: '^[a-zA-Z0-9._& ,]{1,25}',
    content: '^[a-zA-Z0-9._& ,]{1,300}',
    imageUrl: '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?',
    coordinates: "^[-+]?[0-9]{1,7}(\.[0-9]+)?$"
}