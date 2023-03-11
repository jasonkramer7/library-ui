export interface Book {
  "name": string,
  "description": string,
  "isbn": string,
  "authors": [
    {
      "name": string
    }
  ],
  "categories": [
    {
      "name": string
    }
    ]
}
