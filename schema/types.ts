export type DatabaseRow = {
    page: number,
    count: number,
    perPage: number,
    data?: {_id: string, name: string, count: number, createdAt: string, updatedAt: string}[]
}